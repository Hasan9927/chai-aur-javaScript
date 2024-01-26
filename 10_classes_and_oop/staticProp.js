class User{
    constructor(username){
        this.username = username;

    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const hasan = new User('Hasan');
// console.log(hasan.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "i@phone.com");
iPhone.logMe()