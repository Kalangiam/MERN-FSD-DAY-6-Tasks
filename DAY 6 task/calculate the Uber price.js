class Uber_price{
    constructor(source,destination,km,members,total_fare){
        this.source=source;
        this.destination=destination;
        this.km=km;
        this.members=members;
        this.fare = this.km*7;
        this.total_fare=this.fare*members;
    }
    getprice(){
        
        return `source : ${this.source}, detination : ${this.destination}, km : ${this.km}, Members : ${this.members}, Your fare : ${this.fare}, Total fare : ${this.total_fare}`;
        
    }
    
}
var u=new Uber_price("Vellore","chennai",200,5);
console.log(u);