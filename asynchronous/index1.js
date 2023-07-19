let a = 20;
let b = 0;

let writingdata = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
});

writingdata.then((data) => {
    b = data
    console.log(a + b);
});
