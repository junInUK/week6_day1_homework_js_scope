let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green'; //  This should change the let block variable murderer(line 1) to 'Mr. Green'

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';       //This defined a new block variable which is only accessable 
    //  in the function plotTwist

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';  //  This should change the let block variable murderer (line 7) above the 
      //   function changeMurderer to 'Miss Scarlet'
      //    The actual result is different with my expectation. 
      // I think is because after last sentence, js found murderer was defined above function unexpectedOutcome and 
      // changed that variable. But the variable murderer(line 7) is a block variable which cannot effect outside of
      // function plotTwist 
    }

    unexpectedOutcome();  // This should call the anonymous function unexpectedOutcome
  }

  plotTwist();  //  This should call the anonymous function plotTwist
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;  //  This should use the variable murderer above the function changeMurderer
}

changeMurderer(); // This should call the anonymous function changeMurderer,  
const verdict = declareMurderer();  
//  This should call the anonymous function declareMurderer and assign 'The murderer is Miss Scarlet'
//### The variable murderer of line 1 is 'Mr. Green'
console.log(verdict); 
//  This should print 'The murderer is Miss Scarlet'
// ### This should print 'The murderer is Mr. Green' 