let express = require('express');
let app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next()
});

let data = {
  name: 'wade',
  age: 18,
};

let api = '/api/user';

let timeFlag = false;
app.get(api, (req, res) => {
  if (timeFlag) {

    res.send(data);
  } else {
    try {

      res.send(data.slice());
    } catch (err) {
      setTimeout(() => {
        timeFlag = true
      }, 1000);
      res.send(data.slice());
    }
  }
});

//配置服务端口
var server = app.listen(8000, () => {
  console.log(`8000 port is listening~~~~~~~`);
});
