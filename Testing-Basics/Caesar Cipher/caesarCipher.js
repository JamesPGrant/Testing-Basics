const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function caesarCipher(string, num){
  const upperString = string.toUpperCase();
  const splitString = upperString.split('');
  let arr = []
  let letters = []
  let regEx = (/[^A-Za-z]/g);
  const reg = new RegExp('^[0-9]+$')
  splitString.forEach(function(letter){
    if(regEx.test(letter) === true){
      arr.push(letter)
      return
    }
    let found = ALPHABET.indexOf(letter)
    for(let i = 0; i < num; i++){
        found ++
      if(found > ALPHABET.length - 1){
          found = 0
        }  
      
    }
    arr.push(found)
    
  });
  console.log(arr)
  arr.forEach(function(index){
    if(reg.test(index) === true){
      letters.push(ALPHABET.at(index))
      return
    }
    letters.push(index)
    
  })
  console.log(letters)
  console.log(splitString)
  const finalString = letters.join('').toLowerCase()
  console.log(finalString)
  return finalString
}

caesarCipher('!!!!', 5)

module.exports = caesarCipher;