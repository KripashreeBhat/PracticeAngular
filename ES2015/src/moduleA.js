// import are read only 
// console.log('module a is loaded first');
import {fname as f, lname, obj} from './moduleB.js'
obj.name="rachel";
console.log(obj.name);
// console.log('module a is loaded second');
// console.log(`${f}` , lname);