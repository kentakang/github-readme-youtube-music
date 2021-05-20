/* eslint-disable global-require */
import { getInput, setFailed, setOutput } from '@actions/core';
import { exec } from 'child_process';

console.log('installing puppeteer');
exec('sudo npm i puppeteer --unsafe-perm=true --allow-root', () => {
  try {
    const puppeteer = require('puppeteer');
    const youtubeId = getInput('account-id');
    const youtubePw = getInput('account-password');

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto('https://music.youtube.com', { waitUntil: 'networkidle0' });

      const data = await page.content();

      console.log('data', data);
      setOutput('data', data);

      await browser.close();

      return new Promise((resolve) => resolve('end'));
    })().then((r) => console.log(r), (v) => console.log(v));
  } catch (error) {
    setFailed(error.message);
  }
});
