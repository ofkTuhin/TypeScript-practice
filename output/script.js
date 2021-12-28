"use strict";
const country = "Bangladesh";
console.log(country);
const checkFunction = (params) => {
    const ans = params * 2;
    return ans;
};
checkFunction(2);
const x = checkFunction;
console.log(x);
// explicit type
let a;
let b;
let c;
let array = [];
array.push("xyz");
console.log(array);
const UserDetails = (id, user) => {
    console.log(`User Id:${id} the name of user is ${user.user} and his age is ${user.age}`);
};
const object = {
    user: "rrr",
    age: 34
};
UserDetails(12, object);
// sfignature function
// return void
let UserInfo;
UserInfo = (id, user) => {
    return;
};
//return number
let Calculation;
Calculation = (a, b, c) => {
    if (c == "devide") {
        return a / b;
    }
    else {
        return a * b;
    }
};
const result = Calculation(4, 2, "devide");
console.log(result);
// class & object
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        return `the name of the palyer is ${this.name} age is ${this.age} and from ${this.country} `;
    }
}
class Club extends Player {
    constructor(c, name, age, country) {
        super(name, age, country);
        this.club = c;
    }
    setPlayer() {
        return `${this.play()} and he also play in ${this.club}`;
    }
}
const messi = new Club("Barcelona", "messi", 33, "argentina");
console.log(messi.setPlayer());
// access modifier
class Developer {
    constructor(designation, language, salary) {
        this.designation = designation;
        this.language = language;
        this.salary = salary;
    }
    All() {
        return `Mr. Rakib is ${this.designation} he is in expert in ${this.language} he withdraw $${this.salary} every month`;
    }
}
const rakib = new Developer("Developer", "React", 1200);
console.log(rakib.All());
