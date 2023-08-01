// const (long) = require('console');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('node:path');

let param = process.argv[2];

console.log({param});

let _path = path.dirname(param);
let _dir = path.basename(param);

let filePath = path.join(_path, _dir);

fs.readdir(filePath , (err, files)=>{
    files.forEach(file => {
        let ext = path.extname(file).substr(1)
        // console.log({ext});
        let typeDir = path.join(filePath.ext);
        if(!fs.existSync(typeDir)){
            fs.mkdirSync(typeDir);
        }

        fse.move(`${filePath}/${file}`, `${typeDir}/${file}`, err =>{
            if(err) return console.error(err);
            console.log('succes /');
        });
    })
});

