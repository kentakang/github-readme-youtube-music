import core from '@actions/core';
import http, { RequestOptions } from 'http';

try {
  const youtubeId = core.getInput('account-id');
  const youtubePw = core.getInput('account-password');
  const requestOptions: RequestOptions = {
    hostname: 'music.youtube.com',
    path: '/',
  };

  http.request(requestOptions, (response) => {
    let serverData = '';

    response.on('data', (chunk) => {
      serverData += chunk;
    });

    response.on('end', () => {
      console.log(serverData);
    });
  });
} catch (error) {
  core.setFailed(error.message);
}
