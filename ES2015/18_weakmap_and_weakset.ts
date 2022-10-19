// strong set
let set1 = new Set();
let key = {};
set1.add(key);
console.log(set1.size);
key = null;
console.log(set1.size);

// weak set

let wset = new WeakSet();
let key1 = {};
wset.add(key1);
console.log(wset.has(key1));
key1 = null;
console.log(wset.has(key1));

// weak map

let wmap = new WeakMap();
let object = {};
wmap.set(object,"hello world!");
console.log(wmap.get(object));
object=null;
console.log(wmap.get(object));





