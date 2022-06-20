# Questions

## Q1 Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or higher than the value 10

### Solution: [Test Num Promise](/assignment4/test_num.js)

## Q2 Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the Array contains anything but Strings, it should throw an error

### Solution: [Capital Sort](/assignment4/capital_sort.js)

## Q3 Using Promise create a function named 'sleep' that should invoke a callback function after x seconds. NOTE: sleep function should not block the call stack

### Solution: [Promise Delay](/assignment4/promise_delay.js)

## Q4 Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds). We need to modify it using promises to print sequentially 0 to 10. For example, if 0 takes 6 seconds to print and 1 takes two seconds to print, then 1 should wait for 0 to print, and so on

### Solution: [Promise Chain 0-10](/assignment4/one_to_ten.js)

## Q5 The following recursive code will cause a stack overflow if the array "somelist" is too large. How can you fix this and still retain the recursive pattern

### Recursive code

    ``` javascript
    const somelist = readVeryLongList();
    var nextItem = function() {
    const item = somelist.pop();
    if (item) {
        // process the list item...
        nextItem();
    }
    };
    ```

### Solution: [Recursive Call By Promise](/assignment4/process_promise_recursive.js)

## Q6 Give the reasons for the output the above snippet gives. Also, modify the snippet to print values from 0 to 9

### Code

    ``` javascript
    for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i); 
    }, 10);
    }
    ```

### Soluton: [Colsure Fix](/assignment4/js_closure_fix.js)
