var MD5 = require('./md5');
var request = require('request');

var appKey = '530a2c476ff57c0c';
var key = 'AXlW9sXcjKiUxIBk1akIjaBtcYVbJdo9';
var salt = (new Date).getTime();
var from = 'en';
var to = 'zh-CHS';
const url = 'http://openapi.youdao.com/api';



function translate(query) {
    var str1 = appKey + query + salt + key;
    var sign = MD5(str1);
    const data = {
        q: query,
        from: from,
        to: to,
        appKey: appKey,
        salt: salt,
        sign: sign
    }
    return new Promise((resolve, reject) => {
        request.post(
            {url, form: data},
            function (err, httpResponse, body) {
                if(!err){
                    resolve(body);
                }
                reject(err);
            }
        )
    })
}

module.exports = translate;