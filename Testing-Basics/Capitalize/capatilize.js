function capitalize(string){
    const properCasing = string.split(' ');
    for (let i = 0; i < properCasing.length; i++) {
        properCasing[i] = properCasing[i][0].toUpperCase() + properCasing[i].substr(1);
      }
    return properCasing.join(" ")
}

console.log(capitalize('hello, world!'))

module.exports = capitalize;