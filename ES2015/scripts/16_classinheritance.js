class Parent {
    constructor(name) {
        console.log("hello" + " " + name);
    }
    getId() {
        return 10;
    }
}
class Child extends Parent {
    constructor(name) {
        super(name);
        console.log("hello child" + " " + name);
    }
    getId() {
        return 50;
        // return super.getId(); //10
    }
}
let relation = new Child('chandler');
console.log(relation.getId());
//# sourceMappingURL=16_classinheritance.js.map