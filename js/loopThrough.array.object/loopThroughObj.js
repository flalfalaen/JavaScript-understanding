let templateObject = {
    name: {
        first: 'James',
        last: 'Delaney'
    },
    gender: 'Male',
    age: 30,
    weight: 70,
    location: {
        country: 'USA',
        city: 'Nevada'
    }
};

console.log(templateObject);

//converting object to array
console.log('\n--------method .keys()---------');
{
    let tempArray = Object.keys(templateObject);
    console.log('array with Objects keys \n = ' + tempArray);
}
console.log('\n-------method .values()--------');
{
    let tempArray = Object.values(templateObject);
    console.log('array with Objects keys \n = ' + tempArray);
}
console.log('\n-------method .entries()--------');
{
    let tempArray = Object.entries(templateObject); //added in ES8
    console.log('array with Objects keys \n = ' + tempArray);
}
//then you've choose working method with created array like in previously
//example
console.log('\n-------for-of--------');
{
    let index = 0;
    let tempArray = Object.entries(templateObject);
    let tempKeyArray = [];
    for (let element of tempArray) {
        if (typeof element[1] === 'object') {
            tempKeyArray = Object.entries(element[1]);
            console.log('index: ' + index + ' | Object name: ' + element[0] + ': {}');
            for (let elementKey of tempKeyArray) {
                console.log('index: ' + index + ' | \t\tkey: value: ' + elementKey)
            }
        }
        else {
            console.log('index: ' + index + ' | key: value ' + element)
        }
        index++;
    }
    index = null;
}

//hasOwnProperty
console.log('\n-------for-in--------\n with hasOwnProperty');
{
    let tempObj = {};
    for (let key in templateObject) {
        console.log(key + ' -> ' + templateObject[key]);
        tempObj = templateObject[key];
        if (typeof tempObj === 'object') {
            if (templateObject.hasOwnProperty(key)) {
                for (let subKey in tempObj) {
                    if (tempObj.hasOwnProperty(subKey)) {
                        console.log('\t' + subKey + ' -> ' + tempObj[subKey]);
                    }
                }
            }
        }
    }
}
//simplified
console.log('\n-------for-in--------\n simplified previous\n');
{
    for (let key in templateObject) {
        console.log(`${key} -> ${templateObject[key]}`);
        if(typeof templateObject[key] === 'object') {
            for (let subKey in templateObject[key]){
                if(templateObject[key].hasOwnProperty(subKey)){
                    console.log(`\t${subKey} -> ${templateObject[key][subKey]}`);
                }
            }
        }
    }
}

console.log(templateObject.hasOwnProperty('location'));

function test() {
    console.log(this);
}
test();
// console.log(this);
