console.log(arrayDiff([1,2,2,2,3], [2]));

function arrayDiff(mas1, mas2) {
    return mas1.filter(function(i){
        console.log(mas1.indexOf(i));
        return mas2.indexOf(i) < 0 ;})
}