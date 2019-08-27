//tasks link https://learn.javascript.ru/task/clock-class-extended

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    constructor(template, precision) {
        super(template);
        this.precision = precision || 1000;
    }
    start() {
        this.render();
        setInterval(() => this.render(), this.precision);
    }

}
let extendedClock = new ExtendedClock({template: 'h-m-s'}, 1000);
extendedClock.start();
//let clock = new Clock({template: 'h:m:s'});
//clock.start();
// let obj = {
//   name: 'alex'
// };
// let obj2 = {
//   name2: 'stupidity'
// };
// obj = { name2: 'stupidity' };
// console.log(obj);

//tasks link https://learn.javascript.ru/task/clock-class-extended