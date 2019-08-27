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
    return `Do you have driver license in yours ${this.age} and also can mess up with ${this.skill}?`
};

let anotherOneIntern1 = new Intern('Alex', 'Doe', 25, 'javascript', 'donetskyi', 'mariupol');

console.log(anotherOneIntern1.greetings() + '\n' +
            anotherOneIntern1.realtimeLocation() + '\n' +
            anotherOneIntern1.strangeQuestion());