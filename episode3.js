let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;        //  This should return "The murderer is Mrs. Peacock". Because the block let variable murderer cover the let variable murderer above (outof the function declareMurderer)
}

const firstVerdict = declareMurderer();       // This should assign the variable firstVerdict to "The murderer is Mrs.Peacock"
console.log('First Verdict: ', firstVerdict); // This should print 'First Verdict: The murderer is Mrs. Peacock'

const secondVerdict = `The murderer is ${murderer}.`; //  This should assign the variable secondVerdict to "The murderer is Professor Plum". Because the block let variable murderer is not accessable out of function block and the block let variable murderer above the declareMurderer function still can accessable. 
console.log('Second Verdict: ', secondVerdict); //  This should print 'Second Verdict: The murderer is Professor Plum'