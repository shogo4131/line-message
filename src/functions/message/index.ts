import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      eventBridge: {
        schedule: 'cron(0 17 ? * 1,2,3,6 *)',
      },
    },
  ],
};
