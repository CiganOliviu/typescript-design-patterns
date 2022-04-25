var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Prototype = /** @class */ (function () {
    function Prototype() {
        var _this = this;
        this.setPrimitiveData = function (newPrimitiveData) {
            _this.primitiveData = newPrimitiveData;
        };
        this.setComponent = function (newComponent) {
            _this.component = newComponent;
        };
        this.setCircularReference = function (newCircularReference) {
            _this.circularReference = newCircularReference;
        };
        this.clone = function () {
            var clone = Object.create(_this);
            clone.component = Object.create(_this.component);
            clone.circularReference = __assign(__assign({}, _this.circularReference), { prototype: __assign({}, _this) });
            return clone;
        };
    }
    return Prototype;
}());
var ComponentWithBackReference = /** @class */ (function () {
    function ComponentWithBackReference(prototype) {
        this.prototype = prototype;
    }
    return ComponentWithBackReference;
}());
var main = function () {
    var prototype = new Prototype();
    prototype.setPrimitiveData(1234);
    prototype.setComponent(new Date());
    prototype.setCircularReference(new ComponentWithBackReference(prototype));
    var prototypeClone = prototype.clone();
};
main();
