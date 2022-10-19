let percent = () => 0.1;
let getValue = function (val = 10, bonus = val * percent()) {
    console.log(val + bonus);
    console.log(arguments.length);
};
getValue();
getValue(20, 50);
getValue(undefined, 30);
//# sourceMappingURL=7_functiondefault.js.map