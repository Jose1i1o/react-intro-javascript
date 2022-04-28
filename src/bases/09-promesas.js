import { getHeroesById } from './getHeroes.js';

// 1. Declare the promise

// const promise = new Promise(
//   function(resolve, reject) {
//     setTimeout(function myTimeout() {
//       console.log('Time is up!');
//     }, 2000);
//   }
// );

// 2. Declare and resolve promise

// const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const heroes = getHeroesById(2)
//         resolve(heroes); // Whatever parameters we passed onto the resolve promise are passed to then
//         // reject(' The resource couldn´t be found ')
//       }, 2000);
//     }
//   );

// promise.then( (heroes) => { // It can be named heroes or as you wish
//   console.log(heroes);
// })
// .catch( error => {
//   console.warn(error);
// })

// 3. Async promise

const getHeroesByIdAsync = (id) => { // lets you declare the id as a parameter
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroes = getHeroesById(id)
      if ( heroes ) {
      resolve(heroes); // Whatever parameters we passed onto the resolve promise are passed to then
      } else {
        reject('The hero could not be found')
      }
    }, 2000);
  });
}

// getHeroesByIdAsync(20)
// .then( heroes => {
//   console.log('My heroe is', heroes.name)
// })
// .catch( error => {
//   console.warn(error);
// })

// THE ABOVE CAN BE REPLACED By
getHeroesByIdAsync(20)
.then( console.log)
.catch( console.warn ) // if here you receive an argument that links with another function, it will recieve that argument authomatically