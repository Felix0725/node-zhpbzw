const express = require(`express`);
const line = require(`@line/bot-sdk`);
const Config = {
  channelAccessToken: ` `,
};
const app = express();

app.get(`/`, (req, rep) => {
  rep.end(`hello`);
});
app.listen(8080, () => {
  console.log(`running`);
});
