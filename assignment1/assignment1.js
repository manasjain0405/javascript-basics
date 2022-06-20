/* Problem 1: Complete the secondLargest function which takes in an array of numbers in input
and return the second biggest number in the array. (without using sort) */
function secondLargest(array) {
  // Write your code here
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargestNo = Number.MIN_SAFE_INTEGER;
  for (const no of array) {
    if (no > largest) largest = no;
    else if (no > secondLargestNo) secondLargestNo = no;
  }
  return secondLargestNo;
}

/* Problem 2: Complete the calculateFrequency function that takes lowercase string as input
and returns frequency of all english alphabet. (using only array, no in-built function) */
function calculateFrequency(string) {
  const freqMap = {};
  for (const c of string) {
    if (c.toLowerCase() != c.toUpperCase()) {
      if (freqMap[c] != undefined) {
        freqMap[c] = freqMap[c] + 1;
      } else {
        freqMap[c] = 1;
      }
    }
  }
  return freqMap;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(ob) {
  // Write your code here
  const result = {};
  for (const i in ob) {
    if ((typeof ob[i]) === 'object') {
      const temp = flatten(ob[i]);
      for (const j of temp) {
        result[i + '.' + j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(ob) {
  // Write your code here
  const result = {};
  for (const i of ob) {
    const propertyDepth = i.split('.');
    if (Array.isArray(propertyDepth) && propertyDepth.length > 1) {
      const firstProperty = propertyDepth.shift();
      const lastProperty = propertyDepth.pop();
      let finalRef = createProperty(result, firstProperty);
      for (const property of propertyDepth) {
        finalRef = createProperty(finalRef, property);
      }
      finalRef[lastProperty] = ob[i];
    } else if (Array.isArray(propertyDepth) && propertyDepth.length > 1) {
      result[propertyDepth.pop()] = result[i];
    } else {
      result[i] = ob[i];
    }
  }

  function createProperty(obj, property) {
    if (!obj.hasOwnProperty(property)) {
      obj[property] = {};
    }
    return obj[property];
  }
  return result;
}

// Test 1
console.log(secondLargest([1, 2, 3, 0, 9, 6]));

// Test 2
console.log(calculateFrequency('Test String to calc frequency'));

// Test 3
console.log(flatten({
  'prop1': {
    'insideProp1': 'prop1',
    'insideProp2': 2,
  },
  'prop2': 5,
  'prop3': [1, 2, 3],
}));

// Test 4
console.log(unflatten({
  'prop1.insideProp1': 'prop1',
  'prop1.insideProp2': 2,
  'prop2': 5,
  'prop3': [1, 2, 3],
}));
