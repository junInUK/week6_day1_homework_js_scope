const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';  //  cannot change the value of a const string object, should give some error
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;  
}

// changeMurderer();                 
const verdict = declareMurderer();  
console.log(verdict);     //  This should print "The murder is Professor Plum" 