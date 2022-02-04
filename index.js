const puppeteer = require("puppeteer");
// const prompt = require("prompt-sync")();
// const ExcelService = require("./xlsx.service");
const title = [];
const ids = [];
const loginUrl = "http://carbill.ir/partner/login";
const panelUrl = "http://carbill.ir/partner/insurance";
const fromDate = new Date(2022, 02, 02);
const toDate = new Date(2022, 02, 04);
const username = "hor4451";
const password = "09123063070";
const excel = [
  {
    date: 1,
    invoiceId: 1,
    amount: 1,
  },
];
const exportColumns = ["date", "invoiceId", "amount"];

// const url = "https://google.com";

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    // args: ["--proxy-server=80.75.13.203:80"],
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
  await page.goto(panelUrl);
  await page.waitForTimeout(3000);
  await page.click(
    "#content > div:nth-child(3) > div > div > div > div > form > div.card-body.py-2 > div.row.mb-2.mt-4 > div.input-group.form-group.col-12.col-lg-3.width-class > div.btn-group > button"
  );
  await page.click(
    "#content > div:nth-child(3) > div > div > div > div > form > div.card-body.py-2 > div.row.mb-2.mt-4 > div.input-group.form-group.col-12.col-lg-3.width-class > div.btn-group.show > ul > li:nth-child(5) > a > label > input[type=checkbox]"
  );
  await page.click(
    "#content > div:nth-child(3) > div > div > div > div > form > div.card-body.py-2 > div.row.mb-2.mt-4 > div.input-group.form-group.col-12.col-lg-3.width-class > div.btn-group.show > ul > li:nth-child(6) > a > label > input[type=checkbox]"
  );
  await page.click(
    "#content > div:nth-child(3) > div > div > div > div > form > div.card-body.py-2 > div.row.mb-2.mt-4 > div.input-group.form-group.col-12.col-lg-3.width-class > div.btn-group.show > ul > li:nth-child(7) > a > label > input[type=checkbox]"
  );
  await page.click(
    "#content > div:nth-child(3) > div > div > div > div > form > div.card-body.py-2 > div.row.mb-2.mt-4 > div.input-group.form-group.col-12.col-lg-3.width-class > div.btn-group.show > ul > li:nth-child(8) > a > label > input[type=checkbox]"
  );
  await page.click(
    "#content > div:nth-child(3) > div > div > div > div > form > div.card-body.py-2 > div.row.mb-2.mt-4 > div.input-group.form-group.col-12.col-lg-3.width-class > div.btn-group.show > ul > li:nth-child(9) > a > label > input[type=checkbox]"
  );
  await page.click(
    "#content > div:nth-child(3) > div > div > div > div > form > div.card-body.py-2 > div.row.mb-2.mt-4 > div.input-group.form-group.col-12.col-lg-3.width-class > div.btn-group.show > ul > li:nth-child(10) > a > label > input[type=checkbox]"
  );
  // await page.click("#start-date-alt");
  await page.evaluate(() => {
    const date = document.querySelector("#start-date-alt");
    date.value = "2022-02-02";
  });
  await page.waitForTimeout(3000);
  await page.click(
    "#content > div:nth-child(3) > div > div > div > div > form > div.card-body.py-2 > div.float-left.mb-2 > button"
  );
  await page.waitForTimeout(3000);
  await page.click(
    "#content > div:nth-child(3) > div > div > div > div > form > div.card-body.py-2 > div.float-left.mb-2 > button"
  );

  await page.waitForNavigation();

  const firstTry = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll("#pills-THIRD_PARTY .status_ASSIGN_TO_PARTNER")
    ).map((x) => x.getAttribute("id"));
  });
  console.log(firstTry);

  // const buttons = await page.$x(
  //   "//tr[@class[contains(.,'status_ASSIGN_TO_PARTNER')]]/td[16]/a[1]"
  // );
  // for (let button of buttons) {
  //   await button.click();
  //   await page.waitForSelector(".modal", { visible: true });
  //   const newButton = await page.waitForSelector(".close", {
  //     visible: true,
  //   });
  //   await page.waitForTimeout(3000);
  //   await newButton.click();
  //   await page.waitForTimeout(6000);
  //   await page.waitForNavigation();
  //   // await page.waitForFunction(".modal", { hidden: true });
  //   // await page.click("button.close");
  // }

  // await page.click("#user_row_0 > td:nth-child(16) > a:nth-child(1)");

  // await page.waitForTimeout(3000);

  // const data = await page.evaluate(() => {
  //   const tds = Array.from(
  //     document.querySelectorAll('[id^="order_"] .modal-body table tr td')
  //   );
  //   return tds.map((td) => td.innerText);
  // });

  // const data1 = await page.evaluate(() => {
  //   const tds = Array.from(
  //     document.querySelectorAll('modal-content')
  //   );
  //   return tds.map((td) => td.innerText);
  // });

  // async function chunk(arr, len) {
  //   var chunks = [],
  //     i = 0,
  //     n = arr.length;

  //   while (i < n) {
  //     chunks.push(arr.slice(i, (i += len)));
  //   }

  //   return chunks;
  // }
  // const newData = await chunk(data, 54);
  // console.log(newData[1], newData.length);

  // await page.waitForTimeout(3000);
  // await page.click("#next-button");
  // await page.waitForTimeout(3000);
  // const otp = await prompt("What is your otp?");
  // console.log(`Hey there ${otp}`);
  // await page.keyboard.type(otp);
  // await page.waitForTimeout(3000);
  // await page.click("#secondary-btn");
  // await page.waitForTimeout(3000);
  // await page.click("#ChoiceCab");
  // await page.waitForTimeout(3000);
  // await page.click("#mainMenuButton");
  // await page.waitForTimeout(3000);
  // await page.click("#rides-container");
  // const finalResponse = await page.waitForResponse((response) =>
  //   response.url().includes("history?page")
  // );
  // let responseJson = await finalResponse.json();
  // const rides = responseJson.data.rides;

  // if (fromDate > new Date(rides.slice(-1)[0].created_at)) {
  //   console.log(new Date(rides.slice(-1)[0].created_at));
  //   for (let i = 1; i <= 15; i++) {
  //     await page.waitForSelector(
  //       `main > div:nth-child(2) > div:nth-child(3) > a:nth-child(${i}) > div > div:nth-child(2) > div:nth-child(1) > p`
  //     );
  //     let element = await page.$(
  //       `main > div:nth-child(2) > div:nth-child(3) > a:nth-child(${i}) > div > div:nth-child(2) > div:nth-child(1) > p`
  //     );
  //     let value = await page.evaluate((el) => el.textContent, element);
  //     if (!value.includes("لغو شده")) {
  //       title.push(value);
  //       ids.push(i);
  //     }
  //   }
  //   console.log(title);
  //   console.log(ids);
  //   for (const id of ids) {
  //     excel.push({
  //       date: rides[id - 1]["created_at"],
  //       price: rides[id - 1]["final_price"],
  //       id: rides[id - 1]["human_readable_id"],
  //     });
  //     await page.waitForSelector(
  //       `main > div:nth-child(2) > div:nth-child(3) > a:nth-child(${id}) > div > div:nth-child(2) > div:nth-child(1) > p`
  //     );
  //     await page.click(
  //       `main > div:nth-child(2) > div:nth-child(3) > a:nth-child(${id}) > div > div:nth-child(2) > div:nth-child(1) > p`
  //     );
  //     await page.waitForSelector("#ride-receipt-button");
  //     //save target of original page to know that this was the opener:
  //     const pageTarget = page.target();
  //     //execute click on first tab that triggers opening of new tab:
  //     await page.click("#ride-receipt-button");
  //     //check that the first page opened this new page:
  //     const newTarget = await browser.waitForTarget(
  //       (target) => target.opener() === pageTarget
  //     );
  //     //get the new page object:
  //     const newPage = await newTarget.page();
  //     await page.waitForTimeout(3000);
  //     await newPage.screenshot({
  //       path: `screenshot(${id}).png`,
  //       fullPage: true,
  //     });
  //     newPage.close();
  //     await page.goBack();
  //   }
  // } else {
  //   console.log("nashod");
  // }
  // console.log(excel);
  // const newExcel = new ExcelService();
  // newExcel.exportCustomColumnsAsExcelFile(excel, exportColumns, "news");

  //   browser.close();
}
run();

// #cellphone-number-input
// #next-button
// #input-otp
// #secondary-btn
// #ChoiceCab
// #mainMenuButton
// #rides-container
// #ride-receipt-button
