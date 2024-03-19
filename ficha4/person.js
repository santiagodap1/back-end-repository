var p0= {firstName : "pedro", lastName : "matos"};
p0.firstName;


//first class
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = function(){
    //     console.log(this.firstName +" " + this.lastName)
    // }
}

// var p1 = new Person("pedro", "matos");
// p1.firstName;
// p1.fullName();

Person.prototype.fullName = function(){
    console.log(this.firstName +" " + this.lastName + ", " + this.age)
}

Person.prototype.age =0;

var p1 = new Person("pedro", "matos");
p1.firstName;
p1.fullName();
p1.age = 20;
p1.fullName();
console.log(p1.__proto__)