function convertProperCase(str) {
<<<<<<< HEAD
  if (str.length <= 0) {
    return;
  }
  if (str[0] == str[0].toLowerCase()) {
    return str[0].toUpperCase().concat(str.substring(1));
  }
  return str;
}

// Test
console.log(convertProperCase('manas'));
console.log(convertProperCase('Jain'));
=======
    if(str.length <= 0){
        return;
    }
    if(str[0] == str[0].toLowerCase()) {
        return str[0].toUpperCase().concat(str.substring(1))
    }
    return str;
}

console.log(convertProperCase("manas"))
console.log(convertProperCase("Jain"))
>>>>>>> 2d48d5895da26e79ea0cc54a14fd6ff8e84d46a8
