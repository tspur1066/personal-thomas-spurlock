


// Code for the non-negatively adjusted function:
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
isEven(75);



// Code for the negatively-adjusted function:
const negisEven = function(x) {
    if (x < 0) {
        let neg_x = -x;
        if (neg_x == 1) {
            return console.log(false);
        } else if (neg_x == 0) {
            return console.log(true);
        }
            else return negisEven(neg_x - 2)
    }
    if (x == 1) {
        return console.log(false);
    } else if (x == 0) {
        return console.log(true);
    } else return negisEven(x - 2);
}


negisEven(-3);
negisEven(-2);
negisEven(200);
negisEven(-200);