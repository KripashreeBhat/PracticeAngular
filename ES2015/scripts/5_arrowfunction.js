let c = 10;
let d = 20;
console.log(`Before swapping : a =${c} and b =${d}`);
let swap = (c, d) => {
    c = c + d;
    d = c - d;
    c = c - d;
    console.log(` after swapping : a =${c} and b =${d}`);
};
swap(c, d);
console.log(typeof c);
//# sourceMappingURL=5_arrowfunction.js.map