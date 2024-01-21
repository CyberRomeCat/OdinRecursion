function fib(n) {
    let array = [0,1,1];
    let sum;
    if (n === 1 || n === 2) {
        return 1;
    } else {
        for (let i = 2; i < n; i++) {
            sum = (array[array.length - 1]) + (array[array.length - 2]);
            array.push(sum);
        }
        console.log(array)
        return array[array.length - 1]
    }
}

function fibsRec(n) {
    if (n === 0 || n === 1)
        return 0
    else if (n === 2) 
        return [0,1]  
    else {
        let array = [];
        let newArr = array.concat(fibsRec(n-1));
        let sum = newArr[newArr.length - 1] + newArr[newArr.length - 2]
        newArr.push(sum)
        return newArr
    }
}