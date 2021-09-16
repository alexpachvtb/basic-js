import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  let result = '';
  if (options.additionRepeatTimes) {
    for (let i = 1; i <= options.additionRepeatTimes; i ++) {
      if (i == options.additionRepeatTimes) {
        str = str + options.addition;
      } else {
        if (options.additionSeparator) {
          str = str + options.addition + options.additionSeparator;
        } else {
          str = str + options.addition + '|';
        } 
      }
    }
  } else {
    if (options.addition) {
      str = str + options.addition;
    }
  }
  
  if (options.repeatTimes) {
    for (let i = 1; i <= options.repeatTimes; i ++) {
      if (i == options.repeatTimes) {
        result += str;
      } else {
        if (options.separator) {
          result += str + options.separator;
        } else {
          result += str + '+';
        }
      }
    }
  } else {
    return str;
  }
  return result;
}
/* 
repeater('аГуСиК ', { repeatTimes: 3, separator: '♥♥♥  ', addition: ' пОкАкУнЬкАл ', additionRepeatTimes: 5, additionSeparator: '( ͡° ͜ʖ ͡°)' }); */