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