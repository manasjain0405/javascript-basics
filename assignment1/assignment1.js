// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  let largest = Number.MIN_SAFE_INTEGER;
  let second_largest = Number.MIN_SAFE_INTEGER;
  for(const no of array) {
    if(no > largest) largest = no;
    else if(no > second_largest) second_largest = no;
  }
  return second_largest;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  
  const freqMap = {};
  for(let c of string) {
    
    if(c.toLowerCase() != c.toUpperCase()) {
    if(freqMap[c] != undefined) {
      freqMap[c] = freqMap[c] + 1;
    }else {
      freqMap[c] = 1;
    }
    }
  }
  return freqMap;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(ob) {
  // Write your code here
  let result = {};
  for (const i in ob) {
    if ((typeof ob[i]) === 'object') {
      const temp = flatten(ob[i]);
      for (const j in temp) {
        result[i + '.' + j] = temp[j];
      }
    }
    else {result[i] = ob[i];}
  }
  return result;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(ob) {
  // Write your code here
  let result = {};
  for (const i in ob) {
    const propertyDepth = i.split('.');
    if(Array.isArray(propertyDepth) && propertyDepth.length > 1) {
      const firstProperty = propertyDepth.shift()
      const lastProperty = propertyDepth.pop()
      let finalRef = createProperty(result, firstProperty);
      for(let property of propertyDepth) {
        finalRef = createProperty(finalRef, property);
      }
      finalRef[lastProperty] = ob[i];
    }else if(Array.isArray(propertyDepth) && propertyDepth.length > 1) {
      result[propertyDepth.pop()] = result[i]
    }else{result[i] = ob[i];}
  }
    
  function createProperty(obj, property) {
    if(!obj.hasOwnProperty(property)) {
      obj[property] = {};
    }
    return obj[property];
  }
  return result;
}
