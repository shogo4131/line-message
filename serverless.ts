import type { AWS } from '@serverless/typescript';

import message from '@functions/message';

const serverlessConfiguration: AWS = {
  service: 'line-bot',
  frameworkVersion: '3',
  useDotenv: true,
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-dotenv-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    region: 'ap-northeast-1',
    eventBridge: {
      useCloudFormation: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      CHANNEL_ACCESS_TOKEN: process.env.CHANNEL_ACCESS_TOKEN || '',
      USER_ID: process.env.USER_ID || '',
    },
    lambdaHashingVersion: '20201221',
    logRetentionInDays: 7,
  },
  functions: {
    message,
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
