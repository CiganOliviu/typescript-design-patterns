var IFactoryObject = /** @class */ (function () {
    function IFactoryObject() {
        this.createNewForm = function (formType) {
            var form;
            if (formType === 'Circle') {
                form = new Circle();
            }
            if (formType === 'Triangle') {
                form = new Triangle();
            }
            if (formType === 'Square') {
                form = new Square();
            }
            return form;
        };
    }
    return IFactoryObject;
}());
var Circle = /** @class */ (function () {
    function Circle() {
        console.log("Circle");
    }
    return Circle;
}());
var Triangle = /** @class */ (function () {
    function Triangle() {
        console.log("Triangle");
    }
    return Triangle;
}());
var Square = /** @class */ (function () {
    function Square() {
        console.log("Square");
    }
    return Square;
}());
var main = function () {
    var factoryObject = new IFactoryObject();
    var circle = factoryObject.createNewForm('Circle');
    var triangle = factoryObject.createNewForm('Triangle');
    var square = factoryObject.createNewForm('Square');
};
