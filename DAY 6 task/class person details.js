class Person{
    constructor(name,age,degree,college,state,nation){
        this.name=name;
        this.age=age;
        this.degree=degree;
        this.college=college;
        this.state=state;
        this.nation=nation;
    }
    getdetails(){
        return `Name : ${this.name}, age : ${this.age}, degree : ${this.degree}, state : ${this.state}, Nation : ${this.nation} `;
    }
}
var p= new Person("kalangiam","21","BE","VSA","Tamilnadu","India");
console.log(p.getdetails());