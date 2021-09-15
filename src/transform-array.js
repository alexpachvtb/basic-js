import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let newArr = [];
  if (!(Array.isArray(arr))) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  if (arr.length == 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i ++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (newArr[i] != undefined) {
      if (newArr[i] == '--discard-next') {
        newArr[i] = undefined;
        newArr[i + 1] = undefined;
      }
      if (newArr[i] == '--discard-prev') {
        newArr[i] = undefined; 
        newArr[i - 1] = undefined;
      }
      if (newArr[i] == '--double-next') {
        newArr[i] = newArr[i + 1];
      }
      if (newArr[i] == '--double-prev') {
        newArr[i] = newArr[i - 1];
      }
    }
  }
  return newArr.filter(item => item != undefined);
}