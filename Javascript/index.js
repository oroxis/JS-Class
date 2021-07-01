var users = [
    {name: 'John', Age: 50},
 {name: 'Mary', Age: 30}
];
 for (let index = 0; index < users.length; index++) {
     console.log(users[index].age);
     console.log(users[index].name);   
 };

users.forEach(function (val) {
     console.log(val.age)
     console.log(val.name)})

users.map(function (val) {
    console.log(val.name);
    console.log(val.age);
}
)

//var and let and const
//Arrow function

let addition = (x, y) => x + y;

let add = function(x,y) {
    return
}





