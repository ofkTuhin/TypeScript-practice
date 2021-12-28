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
