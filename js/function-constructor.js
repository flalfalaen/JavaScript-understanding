//function constructor example
function User(login, password) {
    this.login = login;
    this.password = password;
    this.greetingsMsg = 'hello, ' + this.login + '. Your password is: \'' + this.password + '\'. Remember this please. And does\'t show anyone';
}

let averageUser1 = new User('DeathKiller228', 'qwerty123');

let div1 = document.getElementById('output1');

console.log(averageUser1.greetingsMsg);

