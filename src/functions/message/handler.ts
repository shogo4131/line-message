import { client } from '@libs/client';
import type { Handler } from 'aws-lambda';
import type { Message } from '@line/bot-sdk';

const selectedDaysMessage = (day: number) => {
  switch (day) {
    case 0:
      return '燃えないゴミ';
    case 1:
      return 'ダンボール、衣類';
    case 2:
    case 5:
      return '燃えるゴミ';
    default:
      throw new Error('ゴミ捨ての日ではありません。');
  }
};

const handler: Handler = async () => {
  const day = new Date().getUTCDay();

  console.info('selected day', day);

  const selectedMessage = selectedDaysMessage(day);

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
