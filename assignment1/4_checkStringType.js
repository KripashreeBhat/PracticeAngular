
function checkStringType(employee){
    for (let emp in employee){
        if(typeof employee[emp] == 'string'){
            console.log(employee[emp]);
        }

    }       
    
}

let employee = {
    name:"John",
    empId:"EMP123",
    phoneno:9845675210,
}

checkStringType(employee);

    


