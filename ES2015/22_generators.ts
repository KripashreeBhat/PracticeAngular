// function* createGenerator(){
//     yield 1;
//     console.log("after first yield");
//     yield 2;
// }
// let mygen = createGenerator();
// console.log(mygen.next());
// console.log(mygen.next());
// console.log(mygen.next());

//iterators as generators

let personaldetails = {
    fname : "Phill",
    lname : "Dumphy"
};
personaldetails[Symbol.iterator]= function*(){
    let properties = Object.keys(personaldetails);
    for(let t of properties){
        yield this[t];
    }
};
for(let p of personaldetails){
    console.log(p);
}
