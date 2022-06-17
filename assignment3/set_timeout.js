function mySetTimeout(callback, duration, args) {
    
    const endTime = new Date().getTime() + duration;
    let currentTime = new Date().getTime();
    while(currentTime < endTime) {
        currentTime = new Date().getTime();
    }
    if(args === undefined) {
        callback();
    } else {
        callback.apply(this, args);
    }
}
console.log("Start");
mySetTimeout(() => {console.log("Callback")}, 2000)