let obj = {
    value: 3
};

let anonFunc = function (x, y, z) {
    return this.value * x * y * z;
};

let arr = [1, 1, 3];
let resArr = [];

resArr.push(anonFunc(1, 1, 3)); //NaN
resArr.push(anonFunc.call(obj, 1, 1, 3)); // 9
resArr.push(anonFunc.apply(obj, arr)); // 9
resArr.push(anonFunc.bind(obj, 1, 1, 3)()); // 9
resArr.push(anonFunc.bind(obj)(1, 1, 3)); // 9
resArr.push(anonFunc.bind(obj)(arr)); // 9

for (let element of resArr){
    console.log(element);
}