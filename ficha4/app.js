var obj = {
    name:"santiago" , age:50, gender:"M"
}

var x = JSON.stringify(obj);

var obj2 = JSON.parse(x);

// console.log(obj2)


var enviroments = require('./enviroments.js');

console.log(enviroments.env.DEV1);


