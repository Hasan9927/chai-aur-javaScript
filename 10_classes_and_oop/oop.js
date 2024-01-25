const user = {
    userName: 'Hasan',
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        console.log(`UserName: ${this.userName}`)
    }
}

console.log(user.getUserDetails());

// Importance of "new"

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User('Hasan', 12, true);
const userTwo = new  User('Mahedi', 20, false)

console.log(userOne);
console.log(userTwo);