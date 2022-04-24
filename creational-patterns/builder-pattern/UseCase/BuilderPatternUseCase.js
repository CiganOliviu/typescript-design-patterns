var DevelopmentEnvironment = /** @class */ (function () {
    function DevelopmentEnvironment() {
        var _this = this;
        this.developmentParts = [];
        this.addDevelopmentPart = function (part) {
            _this.developmentParts.push(part);
        };
        this.listDevelopmentParts = function () {
            console.log("Product parts: ".concat(_this.developmentParts.join(', '), "\n"));
        };
    }
    return DevelopmentEnvironment;
}());
var ConcreteBuilder = /** @class */ (function () {
    function ConcreteBuilder() {
        var _this = this;
        this.resetDevelopmentEnvironment = function () {
            _this.developmentEnvironment = new DevelopmentEnvironment();
        };
        this.getDevelopmentEnvironment = function () {
            var result = _this.developmentEnvironment;
            _this.resetDevelopmentEnvironment();
            return result;
        };
        this.resetDevelopmentEnvironment();
    }
    ConcreteBuilder.prototype.setupStagingEnvironment = function () {
        this.developmentEnvironment.addDevelopmentPart('Setup staging environment');
    };
    ConcreteBuilder.prototype.runPipeline = function () {
        this.developmentEnvironment.addDevelopmentPart('Run CI/CD pipeline');
    };
    ConcreteBuilder.prototype.deployFeatureBranch = function () {
        this.developmentEnvironment.addDevelopmentPart('Deploy feature branch');
    };
    return ConcreteBuilder;
}());
var Director = /** @class */ (function () {
    function Director(newBuilder) {
        var _this = this;
        this.buildMinimalDevelopmentEnvironment = function () {
            _this.builder.runPipeline();
            _this.builder.setupStagingEnvironment();
        };
        this.buildMaximumTestableDevelopmentEnvironment = function () {
            _this.builder.runPipeline();
            _this.builder.setupStagingEnvironment();
            _this.builder.deployFeatureBranch();
        };
        this.builder = newBuilder;
    }
    return Director;
}());
var main = function () {
    var builder = new ConcreteBuilder();
    var director = new Director(builder);
    director.buildMinimalDevelopmentEnvironment();
    builder.getDevelopmentEnvironment().listDevelopmentParts();
    console.log('==========================');
    director.buildMaximumTestableDevelopmentEnvironment();
    builder.getDevelopmentEnvironment().listDevelopmentParts();
};
main();
