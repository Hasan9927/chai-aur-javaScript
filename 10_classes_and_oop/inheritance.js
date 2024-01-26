class User{
    constructor(username){
        this.username  = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const hasan = new Teacher('Hasan', 'chai@gmail.com','123')
hasan.addCourse()






