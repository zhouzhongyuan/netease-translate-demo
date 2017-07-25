const src = '10-1-2';
const dst = 'log.js';
let i = 0;
const readline = require('readline');
const fs = require('fs');

const obj = {};

// 多行-> 单行
fs.readFile(src, (err, data) => {
    if (err) throw err;
    const srcStr = data.toString();
    const sigleLineSrcStr = srcStr.replace(/\s/igm, '\n');

    // 生成Object

    const stringArr = sigleLineSrcStr.split('\n');

    for(var i = 0, len = stringArr.length; i < len;){
        obj[stringArr[i]] = stringArr[i+1];
        i = i + 2;
    }
    // console.log(obj);
});


//
//
// const rl = readline.createInterface({
//     input: fs.createReadStream('del.js')
// });
//
//
// fs.writeFile(dst, '');
//
// var logger = fs.createWriteStream(dst, {
//     flags: 'a' // 'a' means appending (old data will be preserved)
// })
//
// rl.on('line', (line) => {
//     if(i % 2 === 0){
//         logger.write(`${line}:`) // append string to your file
//         console.log(`${line}:`);
//
//     }else{
//         logger.write(`${line},`) // append string to your file
//
//         console.log(`${line},`);
//
//     }
//     i++;
//
// });
//
//
//
//
//
