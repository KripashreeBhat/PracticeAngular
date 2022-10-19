// working with sets(checking if value exists or not)
let mySet = Object.create(null);
// mySet.id = false;
mySet.id = true;
if (mySet.id) {
    console.log("id exits");
}
else {
    console.log("id doesn't exists");
}
// working with maps = (key and value)
let myMap = Object.create(null);
myMap.name = "kripa"; //name = key and kripa = value
console.log(myMap.name); //retrive the value
myMap[100] = "juhi";
console.log(myMap["100"]); // number and string 100 refer to same property(create problems)
// working with object
let ob1 = {};
let ob2 = {};
myMap[ob1] = "hello world";
console.log(myMap[ob2]);
console.log(ob1.toString());
console.log(ob2.toString());
// working with  the operation of sets :
// has : to check an element
// add : to add unique elements to the sets
// delete :  to delete element from sets
// size : for determing the length of the set
let uniqueElement = new Set();
uniqueElement.add(3);
let obj = {};
uniqueElement.add(obj);
console.log(uniqueElement.size);
console.log(uniqueElement.has(5));
let newSet = new Set([1, 2, 3, 4, 5, 4, 4]);
console.log(newSet.size);
console.log(newSet.has(2));
// set chaining
let newSet2 = new Set().add("hello").add("world");
console.log(newSet2);
console.log(newSet2.size);
console.log(newSet2.delete("world"));
console.log(newSet2.size);
//map methods : by using set method, adding
// key-value pair to map.
let map = new Map();
map.set("fname", " Gloria");
map.set("age", 25);
console.log(map.get("fname"));
let ob1 = {};
let ob2 = {};
map.set(ob1, 12);
map.set(ob2, 34);
console.log(map.get(ob2));
console.log(map.delete("age"));
console.log(map.has("age"));
console.log(map.size);
map.clear(); // clears out all elements
console.log(map.size);
// Iterating over maps (map methods)
let mapp = new Map([
    ["fname", "jay"],
    ["lname", "kiran"]
]);
// just keys
for (let key of mapp.keys()) {
    console.log(key);
}
// just values
for (let value of mapp.values()) {
    console.log(value);
}
// both key and values
// for(let entry of mapp.entries()){
//     console.log(`${entry[0]} : ${entry[1]}`);
// }
for (let [key, value] of mapp.entries()) {
    console.log(`${key} : ${value}`);
}
//# sourceMappingURL=17_mapsandsets.js.map