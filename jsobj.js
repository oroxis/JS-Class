const user = {
    name: 'Emeka',
    username: "emek123",
    email: "emek123@gmail.com",
    age: 30,
    blog: ['This is my first post', 'Hello guys', 'How are you?'],
    greet(){
        console.log('Hello ' + this.name)
        //console.log(`Hello ${this.name}`)
    },
    logIn(){
        console.log('you are logged in')
    },

    logOut(){
        console.log('You are logged out')
    }
};
console.log(`Hello ${this.name} `)
console.log('Hello' + this.name)

