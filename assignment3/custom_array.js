class MyArray {
  constructor() {
    this.dataCollection = {};
    this.collectionLength = 0;
  }

  push(data) {
    this.dataCollection[this.collectionLength] = data;
    this.collectionLength++;
  }

  pop() {
    if (this.collectionLength <= 0) {
      throw new Error('Already Empty Array');
    }
    this.collectionLength--;
    const res = this.dataCollection[this.collectionLength];
    delete this.dataCollection[this.collectionLength];
    return res;
  }

  length() {
    return this.collectionLength;
  }

  indexOf(data) {
    const res = new MyArray();
    for (let i=0; i<this.collectionLength; i++) {
      if (this.dataCollection[i] === data) {
        res.push(i);
      }
    }
    return res;
  }

  shift() {
    if (this.collectionLength <= 0) {
      throw new Error('Already Empty Array');
    }
    const res = this.dataCollection[0];
    --this.collectionLength;
    for (let i = 0; i<this.collectionLength; i++) {
      this.dataCollection[i] = this.dataCollection[i+1];
    }
    delete this.dataCollection[this.collectionLength];
    return res;
  }

  unShift(no) {
    if (this.collectionLength <= 0) {
      this.push(no);
      return this.collectionLength;
    }
    for (let i = this.collectionLength; i > 0; i--) {
      this.dataCollection[i] = this.dataCollection[i-1];
    };
    this.dataCollection[0] = no;
    return ++this.collectionLength;
  }

  slice(start, end) {
    if (start > this.collectionLength || start < 0) {
      throw new Error('Invalid Starting Index');
    }
    const res = new MyArray();
    for (let i = start; i<end && i<this.collectionLength; i++) {
      res.push(this.dataCollection[i]);
    }
    return res;
  }

  forEach(callback) {
    for (const prop of dataCollection) {
      callback(dataCollection[prop]);
    }
  }
}

// Test
const arr = new MyArray();
arr.push(1);
arr.push(2);
arr.push(2);
arr.push(3);

console.log('Initial Array', arr);
console.log('Index of Array', arr.indexOf(2));

console.log('Array POP', arr.pop());
console.log(arr);

console.log('Array Shift', arr.shift());
console.log(arr);

console.log('Array Unshift', arr.unShift(1));
console.log('Array Unshift', arr.unShift(3));
console.log(arr);

console.log('Array Slice', arr.slice(1, 3));
