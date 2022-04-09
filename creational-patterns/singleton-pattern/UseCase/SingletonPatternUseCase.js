var Circle = /** @class */ (function () {
    function Circle(circle) {
        this.circle = { 'xPoint': 0.0, 'yPoint': 0.0, 'radius': 0.0 };
        this.circle.xPoint = circle.xPoint;
        this.circle.yPoint = circle.yPoint;
        this.circle.radius = circle.radius;
    }
    Circle.getInstance = function (circle) {
        if (!Circle.instance) {
            Circle.instance = new Circle(circle);
        }
        return Circle.instance;
    };
    Circle.prototype.getCircleObject = function () {
        return this.circle;
    };
    return Circle;
}());
var main = function () {
    var circleObject = Circle.getInstance({ 'xPoint': 2.2, 'yPoint': 3.4, 'radius': 5.6 });
    var circleObjectAux = Circle.getInstance({ 'xPoint': 2.2, 'yPoint': 3.4, 'radius': 5.6 });
    console.log(circleObject);
    console.log(circleObjectAux);
};
main();
