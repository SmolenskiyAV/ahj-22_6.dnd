/* eslint-disable max-len */
/* eslint-disable no-alert */
import puppetteer from 'puppeteer';
import { fork } from 'child_process';
// import { type } from 'os';

jest.setTimeout(30000); // default puppeteer timeout

describe('ToDo-module Tests', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // product: 'firefox',
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
      ignoreHTTPSErrors: true,
      // timeout: 60000,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  beforeEach(async () => {
    await page.goto(baseUrl);
  });

  test('should positive test for drag & drop', async () => {
    // const result = '';
    await page.goto(baseUrl);
    const collection = await page.$$('.list__item');
    const elm = collection[1];
    const boundingBox = await elm.boundingBox();
    const x = boundingBox.x + boundingBox.width / 2;
    const y = boundingBox.y + boundingBox.height / 2;
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.waitForTimeout(50);
    await page.mouse.move(x + 330, y + 10, { steps: 10 });
    await page.waitForTimeout(50);
    await page.mouse.up();
    await page.waitForTimeout(1500);
    // expect(result).toBe();
  });

  test('should positive test for add anothe card button', async () => {
    // let result = '';
    await page.goto(baseUrl);
    const collection = await page.$$('.add_card');
    const button = collection[1];
    await button.click();
    await page.waitForTimeout(2500);
    /* const columns = await page.$$('.column');
    const columnElm = columns[1];
    const elements = await columnElm.$$('.list__item');
    const item = elements[0];
    result = await page.evaluate((el) => el.innerHTML, await item); // извлечение текста из элемента
    expect(result).toBe('NewItem'); */
  });
});
