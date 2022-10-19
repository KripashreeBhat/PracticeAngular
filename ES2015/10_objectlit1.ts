let firstname = "Ross";
let lastname = "Geller";

let personName = {
    firstname,
    lastname //lastname : lastname 
};

//working with function
let partner = (firstname,lastname, age) => {
let fullname = firstname+ ' ' +lastname;
return{
    fullname,
    lastname,
    isSenior(){
        return age > 60;
    }}
}

let nam = partner('Rachel','Green', 79);
console.log(nam.fullname);
console.log(nam.lastname);
console.log(nam.isSenior());

// console.log(personName.firstname);



