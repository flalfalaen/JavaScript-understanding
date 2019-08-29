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
// }

var val = 2;

const obj2 = {
    val: 1,
    func: function() {
        function test() {
            console.log('global a', this.val);
        }

        test();
        console.log('context a', this.val);
    }
};
obj2.func();

function test1 () {
    var val = 3;
    console.log('global var is calling inside func test1() {} as window.val = ' + window.val );
    console.log('global var is calling inside func test1() {} as this.val = ' + this.val);
    console.log('global var is calling inside func test1() {} as val = ' + val);
}

// console.log(test1.prototype.constructor);
// var test44 = new test1();
// console.log('1111111', test44);


var val = 'global 2';

const obj2 = {
    val: 'obj2 1',
    func: function() {
        // val = this.val;
        function test() {
            console.log('func()s test() ---' + this.val);
        }

        test();
        console.log('func() --- ' + this.val);
        console.log('innerObj.val2 --- ' + this.innerObj.val2);
        console.log('innerObj.func2() --- ' + this.innerObj.func2());
        console.log('func3() --- ' + this.func3());
    },
    func3: function() {
        return this.val;
    },
    innerObj: {
        val2: this.val,
        func2: function() {
            function func2_1() {
                console.log('func2_1 --- ' + this.val);
            }
            func2_1();
            return this.val2;
        }
    }
};
obj2.func();









function Animal(name) {
    this.name = name;
}

Animal.prototype.run = function () {
    console.log(this.name + ' is running');
};

function Rabbit() {

}

let rabbit = new Animal('monster');

console.log(rabbit.run());