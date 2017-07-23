var appKey  = '530a2c476ff57c0c';
var key = 'AXlW9sXcjKiUxIBk1akIjaBtcYVbJdo9';
var salt = (new Date).getTime();
var query = 'fresh';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'en';
var to = 'zh-CHS';
var str1 = appKey + query + salt +key;
var sign = MD5(str1);
$.ajax({
    url: 'http://openapi.youdao.com/api',
    type: 'get',
    dataType: 'jsonp',
    data: {
        q: query,
        from: from,
        to: to,
        appKey: appKey,
        salt: salt,
        sign: sign
    },
    success: function (data) {
        console.log(data);
    }
});