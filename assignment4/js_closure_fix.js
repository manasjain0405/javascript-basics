for(var i = 0; i < 10; i++) {

    setTimeout(function() {
 
      console.log(i); 
 
    }, 10);
 
 }

/*
Output:
10
10
10
10
10
....

Reason: Each block execution creates a closure with the parent block,
hence the same reference of i is attached to all block execution,
and when the timer expires for setTimeout, the reference is updated to 10;

Solution: Create a new block-scoped variable for each block execution.
*/

for(var i = 0; i < 10; i++) {
    const x = i;
    setTimeout(function() {
      console.log(x); 
    }, 10);
 }