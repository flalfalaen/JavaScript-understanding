class Human {
    constructor(gender, weight, age) {
        this.gender = gender;
        this.weight = weight;
        this.age = age;
    }

    genderMsg() {
        let gender = '';
        this.gender === 'male' ? gender = 'Sir' : this.gender === 'female' ? gender = 'Madam' : gender = 'it';
        return 'look, who\'s we got here?! Its a ' + this.gender + '. Bless you, ' + gender + '!';
    }

    weightMsg() {
        return this.weight >= 70 ? 'wow, u so strong with ' + this.weight + ' kg' : 'wow, u so lightweight with yours ' + this.weight + ' kg'; //:'wtf u\'ve just input here';
    }

    ageMsg () {
        let oldness = this.gender === 'male' ? 'grandpa' : 'grandma';
        return this.age < 18 ? this.age + ' years old teenager' : (this.age >= 18 && this.age < 60) ? this.age + ' years old adult' : this.age >= 60 ? this.age + ' years old ' + oldness : ' why r y lying to me?';
    }

}

let it = new Human('male', 50, 61);
console.log('your paramaters was: gender - ' + it.gender + ', weight - ' + it.weight + ', age - ' + it.age);
console.log(it.genderMsg() + '\n' + it.weightMsg() + '\n' + it.ageMsg());
// console.log((59 >= 18 && 59 < 60));
