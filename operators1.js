//Branching with Logical Operator "&&" if "roll" is greater than or equal to "2" AND "roll" is lesser than or equal to "3" then console.log "Great roll"//


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

if(roll >= 2 && roll <= 3) {
 console.log("Great roll!");
}


console.log("You rolled a " + roll);


