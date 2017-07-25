# 有道翻译中转服务器

## 背景
有道翻译的Web Api 有问题：
- 不支持JSONP,因为返回值是json，外面没有函数包裹。
jsonp要求
```
callback( {"result":"success"} )
```
又到返回的
```
{"result":"success"}
```
- 也不支持其他跨域方式
- 感觉这个接口可能刚开始做，短期内很难被开发人员修改。
## translator api
GET
```
http://127.0.0.1:3000/translator?word=success
```