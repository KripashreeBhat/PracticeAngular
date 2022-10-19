// left pattern

function starPattern(n){
    let row = "";
    for ( let i = 1; i <= n; i++){
        for (let j = 0; j < i; j++){
            row += "*";
        }
        row +='\n';
    
}
return row;
}
let input = +prompt("enter the number of rows", 0);
alert(starPattern(input));