let s = Symbol("hello");
console.log(typeof s);
console.log(s.toString());
let s1 = Symbol("same");
let s2 = Symbol("same");
console.log(s1 === s2); //false: as symbol creates unique id
let s3 = Symbol.for("same"); // creates registry
let s4 = Symbol.for("same");
let s5 = Symbol.for("change");
console.log(s3 === s4); //s4 value stores in s5
console.log(Symbol.keyFor(s5)); // returns description
// working with objects
let fnamee = Symbol();
let persondetail = {
    [fnamee]: "lily"
};
console.log(Object.getOwnPropertySymbols(persondetail));
//# sourceMappingURL=20_symbols.js.map