
var express = require('express');
var router = express.Router();
var translate = require('./translate');
router.get('/', async function(req, res, next) {
    console.log(req.query.word);
    let word = req.query.word;
    // 此处应该做一个缓存
    let r = {};
    if(word){
        r = await translate(word);
        r = JSON.parse(r);
    }
    res.json(r);
});

module.exports = router;
