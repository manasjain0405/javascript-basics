const getRandomMilis = (x) => Math.floor(Math.random() * x)*1000;

function sleep(t, v) {
    return new Promise(function(resolve) {
        setTimeout(() => printNo(resolve, v), t)
    });
 }

function printNo(resolve, no) {
    console.log(no);
    resolve();
}

function printPromise(array) {
    
    let chain = Promise.resolve();
    for(no of array) {
        const x = no;
        chain = chain.then(() => sleep(getRandomMilis(6), x))
    }
}

printPromise([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])