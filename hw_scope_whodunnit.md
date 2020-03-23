# Scope Homework: Who Dunnit

### Learning Objectives

- Understand function scope
- Know the difference in between the let and const keywords

## Brief

Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

### MVP

#### Episode 1

```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict); //  This should print "The murderer is Miss Scarlet"
```

#### Episode 2

```js
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';  //  cannot change the value of a const string object, should give some error
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;  
}

changeMurderer();                 
const verdict = declareMurderer();  
console.log(verdict);     //  This should print "The murder is Professor Plum" 
```

#### Episode 3

```js
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;        //  This should return "The murderer is Mrs. Peacock". Because the block let variable murderer cover the let variable murderer above (outof the function declareMurderer)
}

const firstVerdict = declareMurderer();       // This should assign the variable firstVerdict to "The murderer is Mrs.Peacock"
console.log('First Verdict: ', firstVerdict); // This should print 'First Verdict: The murderer is Mrs. Peacock'

const secondVerdict = `The murderer is ${murderer}.`; //  This should assign the variable secondVerdict to "The murderer is Professor Plum". Because the block let variable murderer is not accessable out of function block and the block let variable murderer above the declareMurderer function still can accessable. 
console.log('Second Verdict: ', secondVerdict); //  This should print 'Second Verdict: The murderer is Professor Plum'
```

#### Episode 4

```js
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
} // This function should return 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'. Because the block let variable suspectThree blocked the let variable above the function declareAllSuspects. 

const suspects = declareAllSuspects();  //  This should assign "The suspects are Miss Scarlet, Professor Plum, Colonel Mustart" to const variable suspects
console.log(suspects);  //  This should print "The suspects are Miss Scarlet, Professor Plum, Colonel Mustart"
console.log(`Suspect three is ${suspectThree}.`); //  This should print "Suspect three is "Mrs. Peacock". Because this is the only variable cover here. The block let variable suspectThree in anonymous function declareAllSuspects cannot cover here.
```

#### Episode 5

```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver'); // This should call anonymous function changeWeapon and change the scenario.weapon to 'Revolver'
const verdict = declareWeapon();  //  This should return 'The weapon is the Revolver' and assign this value to verdict
console.log(verdict); //  This should print 'The weapon is the Revolver'
```

#### Episode 6

```js
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
```

#### Episode 7

```js
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green'; //  This should change the let block variable murderer to 'Mr. Green'

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';       //This defined a new block variable which is only accessable in the function plotTwist

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';  //  This should change the let block variable murderer above the function changeMurderer to 'Miss Scarlet'
    }

    unexpectedOutcome();  // This should call the anonymous function unexpectedOutcome
  }

  plotTwist();  //  This should call the anonymous function plotTwist
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;  //  This should use the variable murderer above the function changeMurderer
}

changeMurderer(); // This should call the anonymous function changeMurderer,  
const verdict = declareMurderer();  //  This should call the anonymous function declareMurderer and assign 'The murderer is Miss Scarlet'
console.log(verdict); //  This should print 'The murderer is Miss Scarlet' 
```

#### Episode 8

```js
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock'; //  This should change the object scenario.murderer(line 163) to 'Mrs. Peacock'
  scenario.room = 'Dining Room';//  This should change the object scenario.room(line 164) to 'Dining Room'

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';  
      // Because the scenario.room(line 164) is 'Dining Room', the scenario.murderer(line 163) changed to 'Colonel Mustard' 
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
        // Because the scenario.murderer was changed to 'Colonel Mustard', the condition is true. 
        //Then scenario.weapon is changed to 'Candle Stick' 
      }
    }

    unexpectedOutcome('Colonel Mustard'); //  This should call the function unexpectedOutcome
  }

  plotTwist('Dining Room'); // This should call the function plotTwist
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

/*  This should call the function changeScenario
*/
changeScenario(); 
const verdict = declareWeapon();  //  This should call the function declareWeapon and return 'The weapon is Candle Stick'
console.log(verdict); // This should print 'The weapon is Candel Stick'
```

#### Episode 9

```js
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';  //  This line defined a new block let variable murderer and assiged the value 'Mrs. Peacock', but does effect the let block variable murderer(line 206)
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;  //  This line still return the value of variable murderer(line 206), which is still 'Professor Plum'
}

const verdict = declareMurderer();  // This should call the function declareMurderer and assign the return value to const variable verdict 
console.log(verdict);// This should print 'The murder is Proferssor Plum'
```

### Extensions

Make up your own episode!
