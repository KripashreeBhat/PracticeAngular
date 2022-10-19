
let serveDrinks = (age,breakSession) =>{
    if( age >=18 && breakSession !== true)
        return true;
    else
        return false;
}
let age = +prompt('enter the age');
let breakSession = prompt('enter the break time');
alert(serveDrinks(age, breakSession));