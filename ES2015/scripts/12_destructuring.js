// DESTRUCTURING ARRAY
// let student = [,'female','56'];
// let [studentName = 'sheldon',...restinfo] = student;
// console.log(studentName);
// console.log(restinfo);
// // console.log(id);
// DESTRUCTURING OBJECT
let student = {
    fname: 'sheldon',
    gender: 'male',
    age: 23
};
let { fname, gender: g, age } = student;
console.log(fname);
// console.log(gender);
console.log(g);
console.log(age);
//# sourceMappingURL=12_destructuring.js.map