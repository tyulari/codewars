console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function alphabetPosition(text) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return text.toUpperCase().replace(/[^A-Z]/g, m => alphabet.indexOf(m)+1+' ');
  }

//   function alphabetPosition(text) {
//     return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
//   }

//   function alphabetPosition(text) {
  
//     var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    
//     return text.toLowerCase().replace(/[^a-z]/g,'').split('').map(x => alphabet.indexOf(x)+1).join(' ');
//   }
    
    
    