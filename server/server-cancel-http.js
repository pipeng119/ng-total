const express = require('express');
const app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next()
});

const userData = {
  name: '张三',
  age: 18,
};

const adminData = [{
  name: '李四',
  age: 20,
}]

const list = [{
  name: '王五',
  age: 37
}]



app.get('/user', (req, res) => {
  setTimeout(() => res.send(userData), 3000)
});

app.get('/admin', (req, res) => {
  setTimeout(() => res.send(adminData), 4000)
})

app.get('/list', (req, res) => {
  setTimeout(() => res.send(list), 5000)
})

//配置服务端口
var server = app.listen(8888, () => {
  console.log(`8000 port is listening~~~~~~~`);
});