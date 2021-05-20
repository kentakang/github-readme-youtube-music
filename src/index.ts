import { getInput, setFailed } from '@actions/core';
import http, { RequestOptions } from 'http';

try {
  const youtubeId = getInput('account-id');
  const youtubePw = getInput('account-password');
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
  setFailed(error.message);
}
