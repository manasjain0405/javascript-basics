var somelist = [0, 1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function processElement(ele) {
    return new Promise((resolve, reject) => {
        console.log(ele);
        resolve();
    })
}

function recursiveProcessPromise(chain, list) {
    
    const item = list.pop();
    if(item) {
        chain = chain.then(processElement(item));
        recursiveProcessPromise(chain, list);
    }
}

recursiveProcessPromise(Promise.resolve(), somelist);