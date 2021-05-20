/* eslint-disable global-require */
import { getInput, setFailed, setOutput } from '@actions/core';
import { exec } from 'child_process';

console.log('installing puppeteer');
exec('sudo npm i puppeteer --unsafe-perm=true --allow-root', async (execError, _, stderr) => {
  try {
    if (execError) {
      throw new Error(execError.message);
    }

    if (stderr) {
      throw new Error(stderr.toString());
    }

    const puppeteer = require('puppeteer');
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
});
