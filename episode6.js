let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';         //  This should change the variable murderer to 'Mr. Green'

  const plotTwist = function() {
    murderer = 'Mrs. White';    //  This should change the variable murderer to 'Mrs. White'
  }

  plotTwist();  //  This should call the anonymous function plotTwist
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();       //  This should call the anonymous function changeMurderer, after this sentence, the variable murderer is 'Mrs. White' 
const verdict = declareMurderer();  //  This should call the anonymous function declareMurderer and assign the value 'The murderer is Mrs. White.' to const variable verdict.   
console.log(verdict); //  This should print 'The murderer is Mrs. White.' 