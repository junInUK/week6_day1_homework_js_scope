let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';  //  This line defined a new block let variable murderer and assiged the value 'Mrs. Peacock', but does effect the let block variable murderer(line 206)
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;  //  This line still return the value of variable murderer(line 206), which is still 'Professor Plum'
}

const verdict = declareMurderer();  // This should call the function declareMurderer and assign the return value to const variable verdict 
console.log(verdict);// This should print 'The murder is Proferssor Plum'