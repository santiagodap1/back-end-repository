var array = [];

array.push(function () {
    console.log("hello");
});

array.push(function () {
    console.log("hello 2");
});

array.push(function () {
    console.log("hello 3");
});

for(let i=0; array.length; i++){
    array[i]();
}

array.forEach(element => {
    
});

