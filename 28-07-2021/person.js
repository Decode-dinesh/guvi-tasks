class person {
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    getName(){
        console.log(this.name);
    }
    getAge(){
        console.log(this.age);
    }
    getGender(){
        console.log(this.gender);
    }
}
var res = new person("Dinesh",24,"male");
res.getName();
res.getAge();
res.getGender();