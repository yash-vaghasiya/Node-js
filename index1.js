// const colors = require('colors');
// console.log("package.jsom".green)

// console.warn("nodemon")

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

fs.writeFileSync(filePath,'this is apple file');
