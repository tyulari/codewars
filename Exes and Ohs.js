console.log(XO("xxxm"));

function XO(str) {
    let arr = str.toLowerCase().split('');

    let  constItems = {};
    for (const item of arr) {
        // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
        constItems[item] = constItems[item] ? constItems[item] + 1 : 1;
    }
    
    console.log(constItems);
    console.log(!constItems['x']);
    let a = str.replace(/x/gi, '');
    console.log(a)
    return (constItems['x'] == constItems['o'] || (!constItems['x'] && !constItems['o'] )) ? true : false;
}

// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

// function XO(str) {
//     var a = str.replace(/x/gi, ''),
//         b = str.replace(/o/gi, '');
//     return a.length === b.length;
// }