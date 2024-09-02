function convertToRoman(num) {
    let roman = {
        M: 1000,CM: 900,
        D: 500,CD: 400,
        C: 100,XC: 90,
        L: 50,XL: 40,
        X: 10,IX: 9,
        V: 5,IV: 4,
        I: 1
    }
    let str = '';
    while (num) {
        for (let key in roman) {
            if (num >= roman[key]) {
                str += key;
                num -= roman[key];
                break;
            }
        }
    }

    return str;
}
   
/* Debug */
// let x = convertToRoman(36);
// console.log(x);