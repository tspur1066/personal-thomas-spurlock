


// function
const isEven = function(x) {
    if (x < 0) {
        return console.log("!!!!x must be a positive number!!!!");
    }
    if (x == 1) {
        return console.log(false);
    } else if (x == 0) {
        return console.log(true);
    } else return isEven(x - 2);
}

isEven(50);