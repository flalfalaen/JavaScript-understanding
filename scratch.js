const obj = {
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4
};

const arr = [1,2,3,4];

let array1 = arr.filter(elem => elem % 2 === 0);
console.log(array1);

// ajaxCall()

// let tempArray = Object.values(obj);
// for (let element of tempArray) {
//     console.log('value ' + element);
// }
//
// for (key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         console.log('key ' + key + ' value ' + obj[key]);
//     }
//
// }

var val = 2;

const obj2 = {
    val: 1,
    func: function() {
        function test() {
            console.log('dddd', this.val);
        }

        test();
    }
};


obj2.func();

function Animal(name) {
    this.name;
}

Animal.prototype.run() {

}

function Rabbit() {

}
