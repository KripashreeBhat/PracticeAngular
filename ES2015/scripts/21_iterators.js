// use of iterator and iterable
// let iterables = [1,2,3];
// function myIterator(array){
//     let count = 0;
//     return{
//         next:function(){
//             return count < array.length?
//         {value:array[count++],done:false}:
//         {value: undefined,done:true};
//         }
//     }    
// }
// let itt = myIterator(iterables);
// console.log(itt.next());
// console.log(itt.next());
// console.log(itt.next());
// console.log(itt.next());
// console.log(itt.next());
// iterators on objects
let persondetails = {
    fname: "Phill",
    lname: "Dumphy"
};
persondetails[Symbol.iterator] = function () {
    let properties = Object.keys(persondetails);
    let count = 0;
    let isDone = false;
    let next = () => {
        if (count >= properties.length) {
            isDone = true;
        }
        return { value: this[properties[count++]], done: isDone };
    };
    return { next };
};
for (let p of persondetails) {
    console.log(p);
}
//# sourceMappingURL=21_iterators.js.map