//Branching with Comparison Operator e.g. if roll is equal to "6" then console.log "Great roll!"//


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

if(roll == 2) {
   console.log("Snake Eyes!");
}


console.log(roll);