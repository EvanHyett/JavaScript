var hello;
console.log(hello); // Undefined
hello = 'world';

var needle;
function test(){
    var needle;
    needle = 'magnet'; // Defined in test() scope
    console.log(needle); // Log Magnet
}
needle = 'haystack'; // Globally Defined
test(); // Function is called, logging magnet within test scope

var brendan;
function print(){
    brendan = 'only okay'; // Defined in the print() scope
    console.log(brendan); // Logs 'only okay' defined in function print()
}
brendan = 'super cool'; // Defined Globally
console.log(brendan) // Logs 'super cool' from global brendan

var food;
function eat(){
    var food;
    food = 'half-chicken'; // Defined in the eat() scope
    console.log(food); // Logs 'half-chicken'
    food = 'gone'; // Redefines food in the eat() scope
}
food = 'chicken'; // Defines food globally
console.log(food); // Logs 'chicken' from globally defined food
eat(); // Function eat is called, logging 'half chicken'

mean();
console.log(food) // Undefined
var mean = function(){ // Initializes function
    var food;
    food = 'chicken'; // Defines food in mean() scope
    console.log(food); // Logs 'chicken'
    food = 'fish'; // Redefines food in mean() scope
    console.log(food); // Logs 'fish'
}
console.log(food); // Undefined

var genre = 'disco'; // Globally defines genre as 'disco'
function rewind(){
    var genre = 'rock'; // Defines genre as 'rock' within rewind() scope
    console.log(genre); // Logs 'rock'
    var genre = 'r&B'; // Redefines genre as 'r&b' within rewind() scope
    console.log(genre); // Logs 'r&b'
}
console.log(genre); // Logs 'disco' from global definition

var dojo = 'san jose'; // Globally defines dojo as 'san jose'
console.log(dojo);// Logs 'san jose'
function learn(){
    var dojo = 'seattle'; // Defines dojo as 'seattle' within learn() scope
    console.log(dojo); // Logs 'seattle'
    var dojo = 'burbank'; // Redefines dojo as 'burbank'
    console.log(dojo);
}
console.log(dojo); // Logs 'san jose'

