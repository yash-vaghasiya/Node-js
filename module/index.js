const app = require('./app')
console.log(app.z())

const arr = [2, 4, 5, 3, 6, 7, 4, 7, 8];
// console.log(arr)

let result = arr.filter((items) => {
    return items === 4
})
console.log(result);
