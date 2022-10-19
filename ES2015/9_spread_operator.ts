let displayColor = function(message,...color){
    console.log(message);
    // console.log(color);
    // console.log(arguments.length);
    
    for ( let i in color){
        console.log(color[i]);
        
    }
    
}
let msg ="List of colors";
let colArray = ['orange','yellow','black'];
displayColor(msg,...colArray);
// displayColor(msg,"Red");
// displayColor(msg,"Red","Blue","Green");