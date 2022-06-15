import { formatJSONResponse } from '@libs/apiGateway';
import { client } from '@libs/client';
import { middyfy } from '@libs/lambda';
import { Message } from '@line/bot-sdk';

const handler = async (event) => {
  const message: Message = {
    type: 'text',
    text: 'メッセージだよ',
  };
  try {
    await client.pushMessage(process.env.USER_ID || '', message);
  } catch (error) {
    console.error(error);
  }

  return formatJSONResponse({
    message: 'success',
    event,
  });
};

export const main = middyfy(handler);
