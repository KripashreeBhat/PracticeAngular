

let sumSalaries=(salaries)=>{
    let sum=0;
    for(let salary of Object.values(salaries)){
        sum +=salary;

    }
return sum;
}
let salaries={
    "jhon":100,
    "pete":300,
    "marry":250
};
alert(sumSalaries(salaries));