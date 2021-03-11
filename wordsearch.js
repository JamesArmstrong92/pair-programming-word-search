const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let val = transpose(letters);
  let vertJoin = val.map(ls => ls.join(''));
  let output = false;

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      output = true;
    }
    for (let l of vertJoin) {
        if (l.includes(word)) {
          output = true;
    }
  return output
};

const transpose = function(matrix) {
    // Put your solution here
    //Creating a counter
    let arrCounter = 0;
    //Declare variable to store array
    let output = [];
    //Loop through the matrix
    for (const row of matrix) {
      //loop through row
      for (const val of row) {
        // checking if newMatrix is undefined or not
        if (output[arrCounter] === undefined) {
          //setting result to empty array
          output[arrCounter] = [];
        }
        //checking if counter is less than the length of the matrix index
        if (arrCounter < matrix[0].length - 1)  {
          //Pushing result to output
          output[arrCounter].push(val);
          //Increasing counter by one
          arrCounter++;
        } else {
          //Pushing result to output
          output[arrCounter].push(val);
          //setting counter back to 0
          arrCounter = 0;
        }
      }
    }
    return output;
  };


module.exports =  wordSearch 