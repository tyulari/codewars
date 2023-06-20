console.log(humanYearsCatYearsDogYears(2))

function humanYearsCatYearsDogYears(humanYears) {
    let arr = [0,0,0];
    arr[0] = humanYears;
    let firstYear = 15;
    let secondYear = 9; 
    while(humanYears>1){
    console.log(`humanYears ${humanYears}`);
    console.log(`arr ${arr}`);
    if (humanYears - 1 >= 0) {
        arr[1] += firstYear;
        arr[2] += firstYear;
    }

    else if   (humanYears - 2 >= 0) {
        arr[1] += secondYear;
        arr[2] += secondYear;
    }
   
    else{
        arr[1] += 4;
        arr[2] += 5;
    }
        humanYears =humanYears - 1;
    }
    
    return arr;
  }
  

//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]

// const humanYearsCatYearsDogYears = (humanYears) => {
//     let catYears = 0;
//     let dogYears = 0;
    
//     for (let i = 1; i <= humanYears; i++) {
//       if (i === 1) {
//         catYears += 15;
//         dogYears += 15;
//       }
//       else if (i === 2) {
//         catYears += 9;
//         dogYears += 9;
//       }
//       else {
//         catYears += 4;
//         dogYears += 5;
//       }
//     }
//     return [humanYears,catYears,dogYears];
//   }