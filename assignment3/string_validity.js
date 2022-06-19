function validateString(input, callback) {
  
    setTimeout(function () {
    // input is said to be valid if it is a lowercase string
    if (typeof input === "string" && input === input.toLowerCase()) {
      return callback(null, true)
    }
    return callback(new Error('Invalid string'), null)
  }, 500)
}

const result = {};
const callbackClosure = function(input, result) {
  return function callback(a, b) {
    if(b == true) {
      this.result[input] = true;
    }else{
      this.result[input] = false;
    }
  }
}

const input = ['first', 'Second', 'thiRd', 4, false, 'true'];
input.forEach((x) => callbackClosure(x, result))