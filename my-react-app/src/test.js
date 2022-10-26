class User {
    constructor(email, password, firstName, lastName){
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    

}

class PersonalInfo extends User {
    constructor(email, password, firstName, lastName){
        super(email, password);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

let user1 = new PersonalInfo("edgarpateno80@gmail.com", "Almighty143", "Edgar", "Pateno");
let user2 = new PersonalInfo("shellapateno80@gmail.com", "Almighty143", "Shella", "Pateno");

document.write(user2.fullName());