import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 export default function createDreamTeam(members) {
  let dreamTeam = [];
  if (Array.isArray(members)) {
    members.forEach(name => {
      if (typeof(name) === 'string') {
        dreamTeam.push(name.replace(/\s/g, '').toUpperCase()[0]);
      }
    })
  } else {
    return false;
  }
  return dreamTeam.sort().join('');
}