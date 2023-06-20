console.log(squareDigits(3212));

function squareDigits(num){
    return num.toString().split('').map(el => el**2).join('');
  }

//   function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   }