const puppeteer = require("puppeteer");
// const prompt = require("prompt-sync")();
// const ExcelService = require("./xlsx.service");
const title = [];
const ids = [];
const loginUrl = "http://carbill.ir/partner/login";
const panelUrl = "http://carbill.ir/partner/insurance";
const fromDate = new Date(2021, 11, 10);
const toDate = new Date(2021, 11, 22);
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
