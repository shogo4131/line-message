import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const handler: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {
  return formatJSONResponse({
    message: 'こんにちは',
    event,
  });
};

export const main = middyfy(handler);
