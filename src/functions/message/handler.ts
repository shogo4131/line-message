import { client } from '@libs/client';
import type { Handler } from 'aws-lambda';
import type { Message } from '@line/bot-sdk';

const handler: Handler = async () => {
  const day = new Date().getUTCDay();

  console.info('selected day', day);

  let selectedMessage: string;
  switch (day) {
    case 0:
      selectedMessage = '燃えないゴミ';
      break;
    case 1:
      selectedMessage = 'ダンボール、衣類';
      break;
    case 2:
    case 5:
      selectedMessage = '燃えるゴミ';
      break;
    default:
      throw new Error('ゴミ捨ての日ではありません。');
  }

  console.info('selected message', selectedMessage);

  const message: Message = {
    type: 'text',
    text: selectedMessage,
  };

  try {
    await client.pushMessage(process.env.USER_ID || '', message);
  } catch (error) {
    if (error instanceof Error) throw new Error('APIエラーが発生しました。', error);
  }

  console.info('success send message');
};

export const main = handler;
