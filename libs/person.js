class person{
    constructor(name , age) {
        this.name  = name;
        this.age = age;
    }
    createPhrase = ()=>{
        var phrase =  "Hi  my name is "+this.name +" and my age is " +this.age;
        console.log(phrase);
        return phrase;
    }
    creatPhrase2 = (name, prof)=>{
        var phrase2 = "Hi my name is "+ name + "and my profession is " +prof;
        console.log("phrase2");
        console.log(phrase2);
        return phrase2;
    }

}
module.exports = person;
