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
