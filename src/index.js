module.exports = function toReadable(number) {
      if(number === 0) return 'zero'
      let units = number % 10;
      
      let hundreds = Math.floor(number / 100);

      let un = (n) => {
            switch (n) {
                  case 1: return 'one';
                  case 2: return 'two';
                  case 3: return 'three';
                  case 4: return 'four';
                  case 5: return 'five';
                  case 6: return 'six';
                  case 7: return 'seven';
                  case 8: return 'eight';
                  case 9: return 'nine';
                  default: return '';
            }          
      }
      let teen = (n) => {
            switch (n) {
                  case 10: return 'ten';
                  case 11: return 'eleven';
                  case 12: return 'twelve';
                  case 13: return 'thirteen';
                  case 14: return 'fourteen';
                  case 15: return 'fifteen';
                  case 16: return 'sixteen';
                  case 17: return 'seventeen';
                  case 18: return 'eighteen';
                  case 19: return 'nineteen';
                  default: return '';
            }
      }
      let ten = (n) => {
            switch(n) {
                  case 2: return 'twenty';
                  case 3: return 'thirty';
                  case 4: return 'forty';
                  case 5: return 'fifty';
                  case 6: return 'sixty';
                  case 7: return 'seventy';
                  case 8: return 'eighty';
                  case 9: return 'ninety';
                  default: return '';
            }
      }
      let hundred = (n) => {
            switch (n) {
                  case 1: return 'one hundred';
                  case 2: return 'two hundred';
                  case 3: return 'three hundred';
                  case 4: return 'four hundred';
                  case 5: return 'five hundred';
                  case 6: return 'six hundred';
                  case 7: return 'seven hundred';
                  case 8: return 'eight hundred';
                  case 9: return 'nine hundred';
                  default: return '';
            }
      }
      if (number < 1000) {
            if (number % 100 === 0) {
                  return hundred(hundreds).trim();
            }
            if (number % 100 >= 10 && number % 100 <= 19) {
                  return (hundred(hundreds) + ' ' + teen(number % 100)).trim()
            }
            if (number % 10 === 0) {
                  return (hundred(hundreds) + ' ' + ten(Math.floor(number % 100) / 10)).trim();
            }
            if (number % 100 <= 9) {
                  return (hundred(hundreds) + ' ' + un(units)).trim();
            }
            return (hundred(hundreds) + ' ' + ten(Math.floor((number % 100) / 10)) + ' ' + un(units)).trim();
      }
}
