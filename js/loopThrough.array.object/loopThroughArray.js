//declare array
let templateArray = []; //new Array();

// randomazer
function rand(range) {
    return range > 1 ? Math.floor(Math.random() * range) : range = 2;
}

// data check functions
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isObject(value) {
    return typeof value === 'object';
}

//generating array
for(let i = 0; i < (rand(9) + 2); i++) {
    templateArray[i] = rand(2) === 1 ? rand(1000) : 'string ' + rand(500);
}

// 1 - for loop
console.log('\n--------for loop---------');
for(let i = 0; i < templateArray.length; i++) {
    console.log('index: ' + i + ' -  element: ' + templateArray[i]);
}

// 2 - ArrayName.prototype.forEach
console.log('\n--------forEach----------');
templateArray.forEach(function (element, index) {
    console.log('index: ' + index + ' -  element: ' + element);
});

// 3 for - of
console.log('\n--------for-of-----------');
{ //block for let
    let index = 0;
    for (let element of templateArray) {
        console.log('index: ' + index + ' -  element: ' + element);
        index++;
    }
    index = null;
}

// 4 for-in (deprecated for arrays, better its use to objects)
console.log('\n--------for-in-----------');
for(let index in templateArray) {
    console.log('index: ' + index + ' -  element: ' + templateArray[index]);
}

// 5 method every();
console.log('\n------method .every()-----');
{ //block for let
    let isOkay = templateArray.every(function (element, index) {
        console.log('index: ' + index + ' -  element: ' + templateArray[index]);
        return isString(element) || isNumber(element); //(element instanceof String/Number)
    });
    console.log(' Does this array contains only strings and numbers? - ' + isOkay +
                '\nNOTE: this array will break if one of the element in queue cause once false');
}

// 6 method some();
console.log('\n------method .some()------');
{ //block for let
    let isOkay = templateArray.some(function (element, index) {
        console.log('index: ' + index + ' -  element: ' + templateArray[index]);
        return isObject(element); //(element instanceof String/Number) // isString(element) || isNumber(element)
    });
    console.log(' Does this array contains any objects? - ' + isOkay +
                '\nNOTE: this array will break if one of the element in queue cause once true');
}

// 7 method reduce(); reduceRight();
console.log('\n--method .reduce(Right)()--');
templateArray.reduce(function (total, element, index) {
    if(index - 1 === 0) {
        console.log('index: ' + 0 + ' -  element: ' + total);
    }
    console.log('index: ' + index + ' -  element: ' + element);
});

// 8 method filter(); //returns new filtered array
console.log('\n-----method .filter()-----');
{ //block for let
    let temporaryArray = templateArray.filter(function (element, index) {
        console.log('index: ' + index + ' -  element: ' + element);
        return isString(element);
    });
    console.log(`filtered array with only ${temporaryArray.length} strings = ${temporaryArray}`);
}

// 9 method map();
console.log('\n-----method .map()-------');
{
    let temporaryArray = templateArray.map(function (element, index) {
        console.log('index: ' + index + ' -  element: ' + element);
        return element + ' |MAPPED|';
    });
    console.log(`This is mapped array. Added string flag to every element: ${temporaryArray.length} elements = \n ${temporaryArray}`);
}

// 10 do...while
console.log('\n-----do while-------');
{
    let index = 0;
    do {
        console.log('index: ' + index + ' -  element: ' + templateArray[index]);
        index++;
    } while (index < templateArray.length)
}

//11 recursion
console.log('\n-----recursion-------');
//todo