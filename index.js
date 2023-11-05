const puppeteer = require("puppeteer");
const xl = require("excel4node");
const fromDate = new Date(new Date().setDate(new Date().getDate() - 2))
  .toISOString()
  .split("T")[0];
const toDate = new Date(Date.now()).toISOString().split("T")[0];
const loginUrl = "http://carbill.ir/partner/login";
const filteredUrl = `http://carbill.ir/partner/insurance?mobile=&buyer_id=&national_code=&status%5B%5D=ORDERED&status%5B%5D=ASSIGN_TO_PARTNER&status%5B%5D=INCOMPLETE&status%5B%5D=CONFLICT_RESOLVED&status%5B%5D=PRICE_CONFLICT&start_date=${fromDate}&end_date=${toDate}&pay_status=PAID&plate-ir=&plate-p3=&plate-p2=01&plate-p1=`;
const username = "user";
const password = "password";
const wb = new xl.Workbook();

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(loginUrl);
  await page.waitForTimeout(3000);
  await page.waitForSelector("input[name=username]");
  await page.click("input[name=username]");
  await page.keyboard.type(username);
  await page.click("input[name=password]");
  await page.keyboard.type(password);
  await page.click("button[type=submit]");
  await page.goto(filteredUrl);
  await page.waitForSelector(".status_ASSIGN_TO_PARTNER");

  const rows = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll("#pills-THIRD_PARTY .status_ASSIGN_TO_PARTNER")
    ).map((x) => x.getAttribute("id"));
  });
  console.log(rows);
  for (let row of rows) {
    const ws = wb.addWorksheet(row);
    ws.cell(1, 1).string("name");
    ws.cell(1, 2).string("detail");
    await page.click(`#${row} > td:nth-child(16) > a:nth-child(1)`);
    await page.waitForTimeout(3000);
    await page.waitForSelector(".modal.show table tr td");
    const data = await page.evaluate(() => {
      const tds = Array.from(
        document.querySelectorAll(".modal.show table tr td")
      );
      return tds.map((td) => td.innerText);
    });
    for (var i = 0, len = data.length; i < len; i++) {
      if (i % 2 === 0) {
        ws.cell(i / 2 + 2, 1).string(data[i]);
      } else {
        ws.cell((i + 1) / 2 + 1, 2).string(data[i]);
      }
    }
    console.log(data);
    await page.waitForSelector(".modal.show button.close");
    await page.click(`.modal.show button.close`);
    await page.waitForTimeout(3000);
  }

  //   browser.close();
  wb.write("Excel.xlsx");
}
run();
