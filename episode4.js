let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
} // This function should return 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'. Because the block let variable suspectThree blocked the let variable above the function declareAllSuspects. 

const suspects = declareAllSuspects();  //  This should assign "The suspects are Miss Scarlet, Professor Plum, 
// Colonel Mustart" to const variable suspects
console.log(suspects);  //  This should print "The suspects are Miss Scarlet, Professor Plum, Colonel Mustart"
console.log(`Suspect three is ${suspectThree}.`); //  This should print "Suspect three is Mrs. Peacock". 
// Because this is the only variable cover here. The block let variable suspectThree in anonymous function declareAllSuspects cannot cover here.
