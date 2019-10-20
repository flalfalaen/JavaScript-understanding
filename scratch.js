const obj = {
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4
};

const arr = [1,2,3,4];

let array1 = arr.filter(elem => elem % 2 === 0);
console.log(array1);

function test1 () {
    var val = 3;
    console.log('global var is calling inside func test1() {} as window.val = ' + window.val );
    console.log('global var is calling inside func test1() {} as this.val = ' + this.val);
    console.log('global var is calling inside func test1() {} as val = ' + val);
}

/////////////////////////////////////////////////////////////////////////////////

var val = 'global 2';

const obj2 = {
    val: 'obj2 1',
    func: function() {
        // val = 'this.val';
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
        val: 'test',
        val2: this.val,
        func2: function() {
            function func2_1() {
                console.log('func2_1 --- ' + this.val);
            }
            func2_1();
            console.log('sdfsdfsdfsdfs' + this.val2);
        }
    }
};
obj2.func();
obj2.innerObj.func2();

/////////////////////////////////////////////////////////////////////////////////

function Animal(name) {
    this.name = name;
}
Animal.prototype.run = function () {
    return true //'running';
};
Animal.prototype.swimming = function () {
    return false //'swimming';
};
function Rabbit() {
    Animal.apply(this, arguments);
    this.__proto__ = Object.assign(Animal.prototype); // 1st method

}
let rabbit = new Rabbit('monster');

// Rabbit.prototype = Object.assign(Animal.prototype);

console.log(typeof rabbit === 'object');
// console.log('rabbit is ' + rabbit.name + '. Can he run? ' + rabbit.__proto__.run() + '. How about swimming? ' + rabbit.__proto__.swimming() ); // 1st method
console.log('rabbit is ' + rabbit.name + '. Can he run? ' + rabbit.run() + '. How about swimming? ' + rabbit.swimming() ); // 1st method



//
// let test3 = 50;
// function f() {
//     let test3 = 75;
//     function f2() {
//         var test2 = 11;
//         console.log(this.test3);  //this.context global
//         console.log(test3);  //function context
//     }
//     console.log(this.test3); //this.context global
//     console.log(test3);
//     f2();
// }
// f();


