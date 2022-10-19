function greetPerson(age){
    let greet;
    if(age <= 5){
        greet ='Hello kid';
    }
    else{
         greet ="Hi there!";
    }
    console.log(greet);
    
    }
    greetPerson(10);
    greetPerson(2);

    var a = 10;
    var b = 20;
    if(a === 10){
       var a = 100;
       let b = 200;
       console.log(a);
       console.log(b);
    }
    console.log(a);
    console.log(b); //let is a block scope 
    
    
       
       