/* eslint-disable global-require */
import { getInput, setFailed, setOutput } from '@actions/core';
import { exec } from 'child_process';
import { Browser, Page } from 'puppeteer';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';

console.log('installing puppeteer');
exec('sudo npm i puppeteer --unsafe-perm=true --allow-root', () => {
  try {
    const puppeteer = require('puppeteer');
    const youtubeId = getInput('account-id');
    const youtubePw = getInput('account-password');

    puppeteer.use(stealthPlugin());

    (async () => {
      const browser: Browser = await puppeteer.launch({ headless: true });
      const page: Page = await browser.newPage();

      // Login Process
      await page.goto('https://accounts.google.com/signin/v2/identifier', { waitUntil: 'networkidle2' });
      await page.waitForSelector('#identifierId');
      await page.type('input[type="email"]', youtubeId);
      await page.keyboard.press('Enter');
      await page.waitForSelector('input[type="password"]');
      await page.type('input[type="password"]', youtubePw);
      await page.keyboard.press('Enter');

      const data = await page.content();

      console.log('data', data);

      await browser.close();

      return new Promise((resolve) => resolve('end'));
    })().then((r) => console.log(r), (v) => console.log(v));
  } catch (error) {
    setFailed(error.message);
  }
});
