function rot13(message){
    let result = '';
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char.match(/[a-z]/i)) {
            let code = message.charCodeAt(i);
            char = String.fromCharCode(((code - 65 + 13) % 26) + 65);
        }
        result += char;
    }
    return result
}

let x = rot13("SERR PBQR PNZC")
console.log(x)