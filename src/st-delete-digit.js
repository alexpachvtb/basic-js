import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let count = 0;
  return +(String(n).split('').filter((digit) => {
    if (digit != String(n).split('').sort()[0]) {
      return digit;
    } else if (digit == String(n).split('').sort()[0] && count == 0) {
      count++;
    } else if (digit == String(n).split('').sort()[0] && count != 0) {
      return digit;
    }
  }).join(''));
}