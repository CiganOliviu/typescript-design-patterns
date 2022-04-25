var Prototype = /** @class */ (function () {
    function Prototype() {
        var _this = this;
        this.setDevelopmentStage = function (newDevelopmentStage) {
            _this.developmentStage = newDevelopmentStage;
        };
        this.getDevelopmentStage = function () {
            return _this.developmentStage;
        };
        this.setReleaseDate = function (newReleaseDate) {
            _this.releaseDate = newReleaseDate;
        };
        this.getReleaseDate = function () {
            return _this.releaseDate;
        };
        this.clone = function () {
            var clone = Object.create(_this);
            clone.component = Object.create(_this.releaseDate);
            return clone;
        };
    }
    return Prototype;
}());
var main = function () {
    var prototype = new Prototype();
    prototype.setDevelopmentStage('Staging');
    prototype.setReleaseDate(new Date());
    var stagingClone = prototype.clone();
    console.log(stagingClone.getDevelopmentStage());
    console.log(stagingClone.getReleaseDate());
};
main();
