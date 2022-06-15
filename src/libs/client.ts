import * as line from '@line/bot-sdk';

export const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
});
