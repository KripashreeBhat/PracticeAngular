// use of for each in array
let num = [2,4,6,8];
num.forEach(array);
function array(element, index,array){
    console.log("arr["+index+"] = " +element);
};

// use of for each in map
let mapuse = new Map([["fname","claire"],
                    ["lname","Dumphy"]]);
mapuse.forEach(mapFunction);
function mapFunction(value,key,callingMap){
    console.log(key+" : " + value);
    console.log(mapuse === callingMap);
}
    
//use of for each in set
let setuse = new Set([1,2,3,4]);
setuse.forEach(setFunction);
function setFunction(value, key, callingSet){
    console.log(key+ " : " +value);
    console.log(setuse === callingSet);
} 
    
    