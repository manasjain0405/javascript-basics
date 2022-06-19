function validateString(input, callback) {
  
  setTimeout(function () {
  // input is said to be valid if it is a lowercase string
  if (typeof input === "string" && input === input.toLowerCase()) {
    return callback(null, true)
  }
  return callback(new Error('Invalid string'), null)
}, 500)
}

const res = {}
function get_callback(x) {
  
  return function(a, b) {
      if(b) {
          res[x] = true;
      }else {
          res[x] = false;
      }
      console.log(res);
  }
}


const input = ['first', 'Second', 'thiRd', 4, false, 'true'];
input
.map((x) => validateString.bind(null, x, get_callback(x)))
.forEach( (x) => x())
