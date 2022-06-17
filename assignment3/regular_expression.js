const passwordPattern = new RegExp("^[^.](?=.*[0-9])(?=.*[!#\$%&'\*\+\-\/=\?\^_`{|}~])(?=.*[a-z])(?=.*[A-Z])(?![^.]*[\.]{2,})[0-9a-zA-Z!#\$%&'\*\+\-\/=\?\^_`{|}~]*[^.]$")

const emailPattern = new RegExp("^[A-Za-z0-9][A-Za-z0-9\_\.]*@[A-Za-z]+\.[A-Za-z]+$");

const phonePattern = new RegExp("^([\(]?([\+](?=[0-9]))?[0-9]{1,3}?[\)]){0,1}[0-9]{5}-?[0-9]{5}$")

console.log(passwordPattern.test("TestQodeLeaf.0405!")); //True
console.log(passwordPattern.test("TestQodeLeaf..0405!")); //False
console.log(passwordPattern.test(".TestQodeLeaf0405!")); //False

console.log(emailPattern.test("manasjain_0405@gmail.com")); //True

console.log(phonePattern.test("(+91)94249-01643")); //True

const paragraph = "Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. mytraining@qodeleaf.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.";

let phoneIterator = str.matchAll(phonePattern);
let emailIterator = str.matchAll(emailPattern);