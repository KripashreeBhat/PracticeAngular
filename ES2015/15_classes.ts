// method 
class personn{
    greet(){} //method formed
}
let p = new personn();
console.log(p.greet===personn.prototype.greet);

// class body
// 1 constructor method
class method1{
     constructor(name){
        this.name =name;
        console.log(this.name);
        
     }
}
let m = new method1('janice');


// 2 static method
class method2{
    static staticMethod(name){
        console.log('static method');
        
    }
}
method2.staticMethod('rachel');

// prototype method
class method3{
    // constructor(name){
    // this.name =name;
    // }
    greetPerson(){
        console.log("Hello" +" "+ 'Pheobe');
    }
}
        
let mt=new method3();
mt.greetPerson();

