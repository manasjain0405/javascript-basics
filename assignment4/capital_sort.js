function capitalPromise(array) {

    return new Promise((resolve, reject) => {
        if(!Array.isArray(array)) {
            reject("Parameter is not array");
        } else if(array.filter( (x) => typeof x != 'string').length > 0) {
            reject("Contents not string");
        }
        resolve(array.map( (x) => x.toUpperCase()))
    })
}

function sortPromise(array) {
    
    return new Promise((resolve, reject) => {
        if(!Array.isArray(array)) {
            reject("Parameter is not array");
        } else if(array.filter( (x) => typeof x != 'string').length > 0 || array.filter( (x) => x != x.toUpperCase()).length > 1) {
            reject("Contents not capital string");
        }
        array.sort()
        resolve(array)
    })
}

capitalPromise(["Banana", "Orange", "Apple", "Mango"])
.then( (x) => sortPromise(x))
.then( (x) => console.log(x))
.catch( (x) => console.log(x));