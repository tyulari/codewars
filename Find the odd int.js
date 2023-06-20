console.log(findOdd([0,1,0,1,0]));

function findOdd(A) {
 // return Number(Object.entries(A.reduce((r, c) => (r[c]=(r[c]||0)+1, r), {})).filter(([key, value]) => value % 2 === 1)[0][0]);
 return A.reduce(function(c,v){
    console.log(`c = ${c}`);
    console.log(`v = ${v}`);
    return c^v;},0); 
  }