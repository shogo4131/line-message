# Serverless Frameworkを使用したゴミの日通知botの作成

## アプリ概要 
ゴミ捨ての前の日にlineに通知がくるアプリ。  
ゴミ捨てを忘れ、家がゴミ屋敷になるため。

## インフラ構成図
![constractor](https://user-images.githubusercontent.com/60390181/188453773-df5e33d9-afec-4e32-861f-d02a1e7484a4.png)

## 環境構築

### Node.js インストール
- https://nodejs.org/ja/ 　

### AWS CLIインストール
- https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-chap-install.html

#### Accesskey, secretAccesskeyの設定
- https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-files.html

### Serverless Framework インストール
- https://www.serverless.com/framework/docs/getting-started

### LINE Developers Message API 作成
- https://developers.line.biz/ja/services/messaging-api/

### 環境変数設定
```
.env

CHANNEL_ACCESS_TOKEN=" Message APIで発行したトークン"
USER_ID="LINE DeveloperのユーザーID"
```

### Serverless Command

#### Deploy

```
yarn deploy
```

#### Remove

```
sls remove
```
