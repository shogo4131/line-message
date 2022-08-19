import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      eventBridge: {
        schedule: 'cron(0 13 ? * 1,2,3,6 *)',
      },
    },
  ],
};
