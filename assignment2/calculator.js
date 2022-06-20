class Calculator {
<<<<<<< HEAD
  constructor() {
    this.a = 0;
    this.b = 0;
    this.read = function(a, b) {
      this.a = a;
      this.b = b;
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.mul = function() {
      return this.a * this.b;
    };
  };
}

// Test
const calc = new Calculator();
calc.read(5, 10);
console.log(calc.sum());
console.log(calc.mul());
=======

    constructor() {
        this.a = 0;
        this.b = 0;
        this.read = function(a, b) {
            this.a = a;
            this.b = b;
        };
        this.sum = function() {
            return this.a + this.b;
        };
        this.mul = function() {
            return this.a * this.b;
        }
    };
  }
  
const calc = new Calculator();
calc.read(5,10);
console.log(calc.sum())
console.log(calc.mul())
>>>>>>> 2d48d5895da26e79ea0cc54a14fd6ff8e84d46a8
