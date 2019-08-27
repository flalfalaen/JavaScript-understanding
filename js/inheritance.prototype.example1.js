function Intern(firstName, lastName, age, skill, region, city) {
    this.name = {
        firstName,
        lastName
    };
    this.age  = age;
    this.skill = skill;
    this.location = {
        region,
        city
    }
}

Intern.prototype.greetings = function () {
  return `Hello ${this.name.firstName} ${this.name.lastName}, nice to meet ya`;
};

Intern.prototype.realtimeLocation = function () {
  return `What is the weather in ${this.location.city}? Does this city located in ${this.location.region} region?`
};

Intern.prototype.strangeQuestion = function () {
    return `Could you mess up with ${this.skill} in yours ${this.age}?`
};

let anotherOneIntern1 = new Intern('Alex', 'Doe', 25, 'javascript', 'donetskyi', 'mariupol');

console.log(anotherOneIntern1.greetings() + '\n' +
            anotherOneIntern1.realtimeLocation() + '\n' +
            anotherOneIntern1.strangeQuestion());
console.log(anotherOneIntern1.__proto__);

let animal = {
    eats: true,
    breathingUnderwater: false
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

console.log(rabbit.breathingUnderwater);
// if('kyc1' === 'kyc' || 'KYC') {
//     console.log(1);
// }
// else {
//     console.log(0);
// }
// if('kyc1' === 'kyc' || 'kyc1' === 'KYC') {
//     console.log(1);
// }
// else {
//     console.log(0);
// }
// console.log('KYC' === 'kyc' || 'KYC');