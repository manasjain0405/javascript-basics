function factorialCalculator(num) {

    let res = 1;
    return function calcFactorial() {
        while(num >= 1) {
            res = res * num;
            num--;
        }
        return res;
    }
}

console.log(factorialCalculator(5)())


//Alternate Approach
function factorialCalculatorAlter(n) {

    let mulNumber = () => {
        if(n <= 1) {
            return 1;
        }
        n=n-1;
        return (n+1) * mulNumber();
    }
    return mulNumber;
}

let factCalc = factorialCalculatorAlter(5);
console.log(factCalc());