/* eslint-disable prefer-promise-reject-errors */
function testNumPromise(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve();
    } else {
      reject();
    }
  });
}

// Test
testNumPromise(5)
    .then(() => console.log('Less than 10'))
    .catch(() => console.log('Greater than 10'));


testNumPromise(15)
    .then(() => console.log('Less than 10'))
    .catch(() => console.log('Greater than 10'));
