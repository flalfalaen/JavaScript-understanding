let person = {
    firstName: 'John',
    lastName: "Smith",
    age: 30,

    greetingInObj_3: function () {
        console.log('Greetings 3ed time, humans from ' + this.firstName);
    }
};
let admin = {
    firstName: 'Dexter',
    lastName: "Doe",
    age: 28,
};

//teaching person to say hello///////////////////
//method 1 //////////////////////////////////////
person.greetingInObj = function () {
    console.log('Greetings, humans');
};
person.greetingInObj();

//method 2 //////////////////////////////////////
function greetingFunc() {
    console.log('Greetings 2nd time, humans');
}
person.greetingInObj_2 = greetingFunc;
person.greetingInObj_2();

//method 3 //////////////////////////////////////
person.greetingInObj_3();

//improving
function greetingForAll1() {
    console.log('Greetings in 4th time, humans ' + this.firstName);
}
admin.greetingsInObj_4 = greetingForAll1;
person.greetingsInObj_4 = greetingForAll1;
admin.greetingsInObj_4();
person.greetingsInObj_4();

// let literallyNo1 = person;
// console.log(literallyNo1.firstName);


/////////////////////////////////////////////////
console.log('\n-----inside of the object-----');
console.log(person);


///////////////////// arrow function
// let first = 'hello first';
// let sec = 'hello second';
// let third = 'hello third';

let obj = {
    first: 'hello first',
    second: 'hello second',
    third: 'hello third',
    func0() {
        console.log(this.first);
        console.log(this.second);
        console.log(this.third);
    },
    func: function() {
        console.log(this.first);
        console.log(this.second);
        console.log(this.third);
    },
    arrowFunc: null, //arrow function does now allow objects context and always be as global
    methodWithArrowFunc: function () {
        this.arrowFunc = () => {
            console.log(this.first);
            console.log(this.second);
            console.log(this.third);
        }
    }
};

obj.func0();
console.log('\n');
obj.func();
console.log('\n');
obj.methodWithArrowFunc();
