var fs = require('fs-extra');
function cache(word, json) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./data/${word}.json`, JSON.stringify(json), 'utf8', (err, data) => {
            if(!err){
                resolve(data);
            }
            reject(err);
        });
    })
}
module.exports = cache;
