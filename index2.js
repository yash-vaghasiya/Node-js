const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'this is apple file');

// // read file

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);  
// })

// // update file

// fs.appendFile(filePath,' and file name is fruie',(err,item)=>{
//     if(!err)console.log("file is update");
// })

// // rename file

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)console.log("file name is update");
// });

fs.unlinkSync(`${dirPath}/fruit.txt`)
