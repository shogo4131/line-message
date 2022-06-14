import type { AWS } from '@serverless/typescript';

import hello from '@functions/message';

const serverlessConfiguration: AWS = {
  service: 'line-bot',
  frameworkVersion: '2',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ap-northeast-1',
    eventBridge: {
      useCloudFormation: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {
    hello,
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
