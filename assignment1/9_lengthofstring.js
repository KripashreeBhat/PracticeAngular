let length = (str) => {
    if (str == ""){
        return 0;
    }
    else
    return length(str.substring(1))+1;
}

let len = prompt("enter the string",'abc');
alert(`Length of the string is: ${length(len)}`);
