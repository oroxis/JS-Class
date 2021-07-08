// // class declaration

// class user{
//     constructor(username, age, email){
//         this.username = username;
//         this.age =  age;
//         this.email = email;
//     }
// }

// const userOne = new user('ejiro', 10, 'flexy@gmail.com');
// const userTwo = new user('John', 12, 'j12@mail.com');

// // console.log(userOne);
// // console.log(userTwo);

// //class expression

// //extending classes
// // class Admin extends {
// //     constructor(name)
// // };

// setTimeout
// setInterval(() => {
    
// }, 2000);

// fetch ("https://randomuser.me/api/?results=10")
// .then ((resp) => resp.json())
// .then(function(data) {console.log(data);})
// .catch(function(error){console.log(error);})

fetch('https://randomuser.me/api/?results=10')
    .then((resp) => {
        return resp.json();
    }).then(data => {
       console.log(data);
    })
    .catch(function(error){
        console.log(error);
    });

    // let candidates = data.results
    // // return candidates
    

