
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(size) {
  //accepts a number and logs a triangle shape with that many triangles
  if (size <= 0) return; //handles not positive numbers
  for (let i = 1; i <= size; i++) {
    //uses a loop to llg each level with the correct number of pound signs
      console.log('#'.repeat(i)); //logs pound sign repeated i times
  }
}
triangles(7);

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  //loop through all numbers from 'start' through 'end'
  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) {
        console.log('fizzbuzz');//divisible by both 3 and 5
    } else if (i % 3 === 0) {
        console.log('fizz');//diviible by only 3
    } else if (i % 5 === 0) {
        console.log('buzz');//divisible by only 5
    } else {
        console.log(i); 
      //uses conditions to log fizz and buzz or fizzbuzz based on if divisvle by
    }
}
}
fizzBuzz(1, 15);

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
  let board = ''; //initialize empty string for the chessboard
    for (let row = 0; row < x; row++) { //row for each row
        for (let col = 0; col < x; col++) { //col for each column
            //determine whether to place a space or a pound sign
            if ((row + col) % 2 === 0) {
                board += ' '; //add space for evens
            } else {
                board += '#'; //add pound sign for odds
            }
        }
        board += '\n'; //add newline character after each row
    }

    console.log(board); //log the board
  
}

drawChessboard(8);
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}