a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//a = [2, 1, 3];
//b = [18, 1, 2];

console.log(comp(a, b));

function comp(array1, array2){
    if(array1 == null || array2 == null) return false;
    else if (array1.length==0 && array2.length==0) return true;
    else if(array1.length != array2.length) return false;
    else {
    
        console.log(array1.map(el => el**2).sort((a, b) => a - b).toString());
        console.log(array2.sort((a, b) => a - b).toString());
     return array1.map(el => el**2).sort((a, b) => a - b).toString() === array2.sort((a, b) => a - b).toString();
    }
  }