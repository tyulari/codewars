console.log(findNb(36));

function findNb(m) {
    let i = 0;
    let sum = 0;
    let n = 0; 
    while(m > sum){
      n++;
      //i++;
      console.log(`n= ${n}`);
      //console.log(`i= ${i}`);
      sum += (++i)**3;
      console.log(`sum = ${sum}`);
    }

    return (m==sum)?(n):(-1);
}

//решение других участников
function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
  }