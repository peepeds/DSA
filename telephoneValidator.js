function telephoneCheck(str){
    let firstSpace = str.indexOf(' ');
    let firstSubStr = str.slice(0,firstSpace);
    let firstSubStrLength = firstSubStr.length;
    let openBracket = str.indexOf('(');

    if(firstSpace == -1 && openBracket != -1){
        firstSubStr = str.slice(0,openBracket);
        firstSubStrLength = firstSubStr.length;
    }
    if(firstSpace === -1 && openBracket === -1){
        firstSubStrLength = '0';
    }
    
    let numericLengthValid = numericLengthCheck(str,firstSubStrLength);
    
    str = str.replaceAll(' ', '') 
    str = str.replaceAll('-', '');

    let bracketValid = bracketCheck(str);
    
    str = str.replace('(', '') 
    str = str.replace(')', '');

    let numeric = isNumeric(str);
    let countryValid = countryCode(firstSubStr);
    
    if(!numericLengthValid){return false;}
    if(!countryValid && firstSpace != -1){return false;}
    if(!numeric){return false;}
    if(!bracketValid){return false;}
    return true;
}

function numericLengthCheck(str , firstSubStrLength){
    let regex = /\d/g;
    let numeric = str.match(regex);
    let numericLength = numeric.length;
    
    numericLength = numericLength - firstSubStrLength;
    console.log({numericLength});
    if(numericLength != 10){
        return 0;
    }
    return 1
}

function isNumeric(str) {
    str = str.replace('(', '') && str.replace(')', '');
    return /^\d+$/.test(str);
}

function bracketCheck(str){
    let posOpen = str.indexOf('(');
    let posClose = str.indexOf(')');
    let firstSubStr = str.slice(0,posOpen);
    let countryValid = countryCode(firstSubStr);
    
    if(posOpen >=2){return 0;}
    if(posOpen === -1 && posClose === -1){return 1;
    } else if( posClose ==  posOpen + 4 && posOpen != 0){
        if(countryValid){return 1;}
    } else if(posClose == 4 && posOpen == 0) { return 1;}
    return 0;
}

function countryCode(str){
    if(str != '1'){return 0;}
    return 1
}

/* debug */
//console.log({firstSubStrLength});
// console.log({firstSpace});
// console.log({str});
// console.log({numeric});
// console.log({bracketValid});
// console.log({countryValid});
// console.log({numericLengthValid})