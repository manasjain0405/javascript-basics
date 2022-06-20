function validateString(input, callback) {
  setTimeout(function() {
  // input is said to be valid if it is a lowercase string
    if (typeof input === 'string' && input === input.toLowerCase()) {
      return callback(null, true);
    }
    return callback(new Error('Invalid string'), null);
  }, 500);
}

const res = {};
function getCallback(x) {
  return function(a, b) {
    if (b) {
      res[x] = true;
    } else {
      res[x] = false;
    }
  };
}

// Test
const input = ['first', 'Second', 'thiRd', 4, false, 'true'];
input
    .forEach((x) => validateString(x, getCallback(x)));
setTimeout(() => {
  console.log(res);
}, 500);
