module.exports = function toReadable (number) {
    let numberNames = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    };
    let twoLastNumbers = +(String(number).substr(1)); 
    
        //проверяем число в диапазоне 0-19
    if (number < 20) { 
      return numberNames[number];
    } //проверяем число в диапазоне 20-100 кратное 10
        else if(number >= 20 && number < 100 && (number % 10) === 0) { 
        return numberNames[number];
    } //проверяем число в диапазоне 20-100 не кратное 10
        else if (number > 20 && number < 100) { 
      return numberNames[parseInt(number / 10) * 10] + ' ' + numberNames[number % 10];
    } // проверяем число кратное 100
        else if (number % 100 === 0) { 
        return numberNames[parseInt(number / 100)] + ' hundred';
    }	// проверяем число в диапазоне 100-999 у которых две последних цифры кратны 10
        else if (number > 100 && (number % 10) === 0) {
        return numberNames[parseInt(number / 100)] + ' hundred ' + numberNames[twoLastNumbers];
    } //проверяем число в диапазоне 100-999 у которых две последних цифры меньше 20
        else if (number > 100 && twoLastNumbers < 20) {
      return numberNames[parseInt(number / 100)] + ' hundred ' + numberNames[twoLastNumbers];
    } //проверяем число в диапазоне 100-999 у которых две последних цифры больше 20
        else if (number > 100 && twoLastNumbers > 20) { 
        return numberNames[parseInt(number / 100)] + ' hundred ' + numberNames[parseInt(twoLastNumbers / 10) * 10] + ' ' + numberNames[twoLastNumbers % 10];
    } 
}
