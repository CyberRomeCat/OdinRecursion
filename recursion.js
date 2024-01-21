function sumToLoop(n) {
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

function sumToRecursive(n) {
        if (n === 1) {
            return n;
        } else {
            return n + sumTo(n-1);
        }
}

function contains(o, v) {
    if (Object.values(o).includes(v))
        return Object.values(o).includes(v);
    else if (o[Object.keys(o)] === undefined)
        return false;
    else
        return contains(o[Object.keys(o)], v)
}

function all(array, func) {
    if (array.length === 1) {
        console.log(func(array[0]))
    }
    else if (func(array[0]) === false) {
        console.log(func(array[0]))
    }
    else {
        array.shift()
        return all(array, func)
    }
}

function totalIntegers(array) {
    let integers = 0
    if (typeof(array) === 'object') {
        for (let i = 0; i < array.length; i++) {
            if (typeof(array[i]) === 'object')
                integers += totalIntegers(array[i]) 

            if(typeof(array[i]) === 'number'){
                 integers += 1
            }
        }
    }  
    return integers
}

function sumSquares(array) {
    let sum = 0
    array.forEach(e => {
        if (typeof(e) === 'number') {
            sum += e * e
        }

        if (typeof(e) === 'object') {
            sum += sumSquares(e)
        }
    })
    return sum
}

function replicate(x, n) {
    let array = []
    if (n < 0) 
        return array
    else if (x === 0 ) {
        return array;
    }
    else {
        array.push(n)
        return array.concat(replicate(x-1, n))
    }
 }