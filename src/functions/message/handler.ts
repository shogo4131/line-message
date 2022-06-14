import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const handler = async (event) => {
  console.log('success');
  return formatJSONResponse({
    message: 'こんにちは',
    event,
  });
};

export const main = middyfy(handler);
