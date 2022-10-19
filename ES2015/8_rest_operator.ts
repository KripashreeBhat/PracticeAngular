let displayColors = function(message,...color){
    console.log(message);
    console.log(color);
    console.log(arguments.length);
    
    for ( let i in color){
        console.log(color[i]);
        
    }
    
}
let message =" List of colors";
displayColors(message,"Red");
displayColors(message,"Red","Blue","Green");