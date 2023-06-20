console.log(persistence(999));

function persistence(num) {
    if(num<10) return 0;
    let count = 0;
    while(num >=10){
      count++;
      num=num.toString().split('').map(el => Number(el)).reduce((s,el) => (s*el));
      //console.log(num);
    }
    return count;
  }
  
//   function sumNumber(num){
//     return num.toString().split('').map(el => Number(el)).reduce((s,el) => (s*el));
//   }