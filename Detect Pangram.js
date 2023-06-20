console.log(isPangram("The quick brown fox jumps over the lazy dog."));

function isPangram(string){
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  
    return alphabet.every(el => string.toUpperCase().split('').filter(el=> (el.charCodeAt(0)>=65 && el.charCodeAt(0)<=90)).includes(el));

  
}

// function isPangram(string){
//     return 'abcdefghijklmnopqrstuvwxyz'
//       .split('')
//       .every((x) => string.toLowerCase().includes(x));
//   }

// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
//   }