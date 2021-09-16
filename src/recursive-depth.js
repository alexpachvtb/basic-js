import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 let count = 1;
 let depth = 0;
export default class DepthCalculator {
  calculateDepth(arr) {
    if (count == 1) {
      depth = 0;
    }
    arr.forEach(item => {
      if (Array.isArray(item)) {
        count++;
        this.calculateDepth(item);
        if (count > depth) {
          depth = count;
        }
        count = 1;
      }
    })
    if (count == 1 && depth == 0) {
      return 1;
    } else {
      return depth;
    }
  }
}