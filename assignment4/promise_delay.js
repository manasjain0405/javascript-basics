function sleep(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

// Test
console.log('Start');
sleep(1000, () => console.log('Sleep Done'))
    .then( (x) => x());
console.log('End');
