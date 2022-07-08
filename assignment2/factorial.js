function factorialCalculator(num) {
  let res = 1;
  return function calcFactorial() {
    while (num >= 1) {
      res = res * num;
      num--;
    }
    return res;
  };
}

// Test 1
console.log(factorialCalculator(5)());


// Alternate Approach
function factorialCalculatorAlter(n) {
  const mulNumber = () => {
    if (n <= 1) {
      return 1;
    }
    n=n-1;
    return (n+1) * mulNumber();
  };
  return mulNumber;
}

// Test 2
const factCalc = factorialCalculatorAlter(5);
console.log(factCalc());
