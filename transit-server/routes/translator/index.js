var fs = require('fs-extra');
var express = require('express');
var router = express.Router();
var translate = require('./translate');
var cache = require('./cache');
router.get('/', async function(req, res, next) {
    let word = req.query.word;
    // 此处应该做一个缓存
    let r = {};
    if(word){
        // 首先去cache查找
        cachePath = `data/${word}.json`;
        const cacheExist = await fs.pathExists(cachePath);
        if(cacheExist){
            r = await fs.readJson(cachePath);
            res.json(r);
        }else {
            console.log('fectch', word);
            r = await translate(word);
            r = JSON.parse(r);
            res.json(r);
            cache(word, r);
        }

    }else{
        res.json(r);
    }
});

module.exports = router;
