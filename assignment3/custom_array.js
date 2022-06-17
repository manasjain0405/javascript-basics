class MyArray {

    constructor() {
        this.dataCollection = {};
        this.collectionLength = 0;
    }

    push(data) {
        this.dataCollection[this.collectionLength] = data;
        this.collectionLength++;
    } 

    pop(){
        if(this.collectionLength <= 0) {
            throw new Error("Already Empty Array");
        }
        this.collectionLength--;
        const res = this.dataCollection[this.collectionLength];
        delete this.dataCollection[this.collectionLength];
        return res;
    }

    length(){
        return this.collectionLength;
    }

    indexOf(data) {
        let res = new MyArray();
        for(let i=0; i<this.collectionLength; i++){
            if(this.dataCollection[i] === data){
                res.push(i);
            }
        }
        return res;
    }

    shift() {
        if(this.collectionLength <= 0) {
            throw new Error("Already Empty Array");
        }
        let res = this.dataCollection[0];
        --this.collectionLength;
        for(let i = 0; i<this.collectionLength; i++) {
            this.dataCollection[i] = this.dataCollection[i+1];
        }
        delete this.dataCollection[this.collectionLength];
        return res;
    }

    unShift(no) {
       
        for(let i = this.collectionLength; i > 0; i++) {

        };
        ++this.collectionLength;
    }

    slice(start, end) {
        if(start > this.collectionLength || start < 0) {
            throw new Error("Invalid Starting Index");
        }
        let res = new MyArray();
        for(let i = start; i<end && i<this.collectionLength; i++) {
            res.push(this.dataCollection[i]);
        }
        return res;
    }

    forEach(callback) {
        for(const prop of dataCollection) {
            callback(dataCollection[prop]);
        }
    }
}

let arr = new MyArray();
arr.push(1);
arr.push(2);
console.log(arr)
