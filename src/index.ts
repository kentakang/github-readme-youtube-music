import { getInput, setFailed, setOutput } from '@actions/core';
import puppeteer from 'puppeteer';

(async () => {
  try {
    const youtubeId = getInput('account-id');
    const youtubePw = getInput('account-password');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://music.youtube.com', { waitUntil: 'networkidle0' });

    const data = await page.content();

    console.log('data', data);
    setOutput('data', data);
  } catch (error) {
    setFailed(error.message);
  }
})();
