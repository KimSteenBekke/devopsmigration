// Branching with Operators: //
// Comparison Operator: "==" (EQUAL TO) // 


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

//If "roll" is EQUAL TO "2" then console.log "Snake Eyes!"//

if(roll == 2) {
   console.log("Snake Eyes!");
}


console.log(roll);