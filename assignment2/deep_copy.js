function deep_copy(obj) {
    if(obj == null || typeof obj != "object") {
        return obj;
    } else if(Array.isArray(obj)) {
        let arr = [];
        for (let i of obj){
            arr.push(deep_copy(i))
        }
        return arr;
    } else {
        let res = {};
        for (let property in obj) {
            res[property] = deep_copy(obj[property]);
        }
        return res;
    }
}

a = {
    list : ["a", {a : "a"}, ["a", "b"]],
    str : "Random String"
}
b = deep_copy(a);

a["list"][1]["a"] = "b"

console.log(a)
console.log(b)