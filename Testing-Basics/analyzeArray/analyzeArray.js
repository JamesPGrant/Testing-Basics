let average = 0;
let min;
let max = 0;
let len = 0;

function createObjectArray(avg, min, max, length){
  return {avg, min, max, len}
}

function analyzeArray(arr){
   if(arr.length === 0){
       return 'ERROR';
   }
  for(let i = 0; i < arr.length; i++){
      if(arr.length < 0){
          return len;
      }
      len = i + 1;
      average += arr.at(i)/arr.length
      if(arr.at(i) > max){
          max = arr.at(i)
      }
      min = Math.min(...arr);
  }
  
  let objArray = createObjectArray(average, min, max, len);
  return objArray;
}

//console.log(analyzeArray([1]))

module.exports = analyzeArray