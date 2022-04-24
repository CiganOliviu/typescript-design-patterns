var ConcreteBuilder = /** @class */ (function () {
    function ConcreteBuilder() {
        var _this = this;
        this.resetProduct = function () {
            _this.product = new Product();
        };
        this.buildPartOne = function () {
            _this.product.addPart('PartOne');
        };
        this.buildPartTwo = function () {
            _this.product.addPart("PartTwo");
        };
        this.buildPartThree = function () {
            _this.product.addPart("PartThree");
        };
        this.getProduct = function () {
            var result = _this.product;
            _this.resetProduct();
            return result;
        };
        this.resetProduct();
    }
    return ConcreteBuilder;
}());
var Product = /** @class */ (function () {
    function Product() {
        var _this = this;
        this.parts = [];
        this.addPart = function (part) {
            _this.parts.push(part);
        };
        this.listParts = function () {
            console.log("Product parts: ".concat(_this.parts.join(', '), "\n"));
        };
    }
    return Product;
}());
var Director = /** @class */ (function () {
    function Director(newBuilder) {
        var _this = this;
        this.buildMinimalProduct = function () {
            _this.builder.buildPartOne();
        };
        this.buildFullProduct = function () {
            _this.builder.buildPartOne();
            _this.builder.buildPartTwo();
            _this.builder.buildPartThree();
        };
        this.builder = newBuilder;
    }
    return Director;
}());
var main = function () {
    var builder = new ConcreteBuilder();
    var director = new Director(builder);
    director.buildMinimalProduct();
    builder.getProduct().listParts();
    console.log('======================');
    director.buildFullProduct();
    builder.getProduct().listParts();
};
main();
