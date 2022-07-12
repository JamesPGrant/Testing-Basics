function reverseString(string){
    return string.split('').reverse().join('');
}

console.log(reverseString('reverse'));

module.exports = reverseString;