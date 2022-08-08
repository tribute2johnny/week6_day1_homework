//Episode 1//

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);


// the murderer is Miss Scarlet
// in the declareMurderer function the murderer is returned from the scenario function

//Episode 2//

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//the murderer is professor plum
// the const variable for murderer cannot be changed so it will remain professor plum

//Episode 3//

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The first murderer is Mrs Peacock
//the first murderer uses the function declareMurderer which changes the murderer to Mrs Peacock
//the second murderer would be Professor Plum
//The second murderer is accessed from the global variable so returns Professor Plum

//Episode 4//

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// all suspects would return 'Miss Scarlett', 'professor Plum', and 'Colonel Mustard'
// this is as inside the scope of declareAllSuspects function 'Mrs Peacock has been replaced with 'Col Mustard'
//suspect 3 would return 'Mrs Peacock'
// this is as we can't access the change made to suspect 3 outside of the function so it will take the original string

//Episode 5//

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

// The weapon is the revolver
// This woulkd be as we use the changeWeapon function to change the weapon despite it being a 
// const function then call it outside the block with the revolver


//Episode 6//

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// the murderer is Mrs White
// the murderer changes to Mr Green when we call the changeMurderer function
// then to Mrs White as the plot twist function is within the scope of the changeMurderer block 

//Episode 7//

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//The murderer is Mr Green
//calling the changeMurderer function returns mr Green as it refrences that function above 
//therefor returning that and not accessing any functions in the rest of the block

//Episode 8//

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

// the weapon is candle stick
// we get this outcome as we call the changeScenario function which changes the weapon to the candle stick


//Episode 9//

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// The murderer would be Professor Plum
// the if statement only changes the murderer inside the block so it wouldn't change when the function is called


// Episode 10

const scenario = {
    murderer: 'Colonel Mustard',
    weapon: 'Revolver',
    room: 'Dining Room'
}

const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}

const changeMurderer = function() {
    scenario.murderer = 'Miss Scarlet';
}

const declareWeapon = function() {
    return `The murder weapon is ${scenario.weapon}.`;

}

const declareRoom = function() {
    return `The murder was committed in the ${scenario.room}`;
}

changeMurderer();
const verdict = declareMurderer()
console.log(verdict);

const weaponUsed = declareWeapon()
console.log(weaponUsed);

const murderRoom = declareRoom()
console.log(murderRoom);

