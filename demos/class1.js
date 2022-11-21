let person = {
    first: "Jarel",
    last: "Wright",
    email: "nottoday012@email.com"
};

console.log(person)

let person2 = {
    first: "Ari",
    last: "Black",
    email: "blackisback@email.com"
};

console.log(person2)

class Person {
    first;
    last;
    email; 
}

let person3 = new Person()
person3.first = "Rayna";
person3.last = "Bell";
person3.email = "DoIringaBell@email.com"

console.log(person3)

let person4 = new Person()
person4.first = "Craig"
person4.last = "Mceachie"
person4.email = "MrMan@email.com"

console.log(person4)

let person5 = new Person()
person5.first = "Samuel"
person5.last = "Kahura"
person5.email = "SKahura@email.com"

console.log(person5)

class Person1 {
//   first;
//   last;
//   email;
    constructor(first, last, email) {
        this.first = first;
        this.last = last;
        this.email = email; 
    }

    getIntroduction() {
        return `Hi my name is ${this.first} ${this.last}. You can contact me at: ${this.email}. `;
    }
    
    
}

let person7 = new Person1("Rayna", "Star", "RainStar@email.com")
console.log(person7)
console.log(person7.getIntroduction())