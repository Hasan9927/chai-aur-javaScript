// let myName = "Hasan  ";
// let myChannel = "chai   "
// console.log(myName.trueLength);


let heros = ['spiderman','superman'];

let heroPower = {
    spiderman: "spider-web",
    superman:"strength",

    powerOfSpiderman:function(){
        console.log(`Power of spiderman is ${this.spiderman}`)
        console.log(hasan());
    }
}

Object.prototype.hasan = function(){
    console.log(`Hasan's power is present in everywhere`);
}

// heroPower.powerOfSpiderman()
heroPower.hasan()


//            Inheritance             //

const User = {
    username: 'Hasan',
    isLoggedIn: true
}

const Teacher = {
    makeVideos:true,
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
}

Teacher.__proto__ = User;

// Modern Syntex of doing this

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUserName = "MahediHasan";

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}

anotherUserName.trueLength()