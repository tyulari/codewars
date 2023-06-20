console.log(count('aba'));

function count(string) {
    return string.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {});
  }

//решение других участников
// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }

//   function count (string) {
//     return string.split('').reduce(function(counts,char){
//       counts[char] = (counts[char]||0) + 1;
//       return counts;
//     },{});
//   }

// function count (string) {
//     var result = {};
    
//     for(let i = 0; i < string.length; i++) {
//       if(result.hasOwnProperty(string[i])){
//         result[string[i]] += 1;
//       } else {
//         result[string[i]] = 1;
//       }
//     }
    
//     return result;
//   }