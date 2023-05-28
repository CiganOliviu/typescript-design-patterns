var AlphabeticalOrderIterator = /** @class */ (function () {
    function AlphabeticalOrderIterator(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        var _this = this;
        this.position = 0;
        this.reverse = false;
        this.rewind = function () {
            _this.position = _this.reverse ? _this.collection.getCount() - 1 : 0;
        };
        this.current = function () {
            return _this.collection.getItems()[_this.position];
        };
        this.key = function () {
            return _this.position;
        };
        this.next = function () {
            var item = _this.collection.getItems()[_this.position];
            _this.position += _this.reverse ? -1 : 1;
            return item;
        };
        this.valid = function () {
            return _this.reverse ? _this.position >= 0 : _this.position < _this.collection.getCount();
        };
        this.collection = collection;
        this.reverse = reverse;
        if (reverse)
            this.position = collection.getCount() - 1;
    }
    return AlphabeticalOrderIterator;
}());
var WordsCollection = /** @class */ (function () {
    function WordsCollection() {
        var _this = this;
        this.items = [];
        this.getItems = function () {
            return _this.items;
        };
        this.getCount = function () {
            return _this.items.length;
        };
        this.getIterator = function () {
            return new AlphabeticalOrderIterator(_this);
        };
        this.getReverseIterator = function () {
            return new AlphabeticalOrderIterator(_this, true);
        };
        this.addItem = function (item) {
            _this.items.push(item);
        };
    }
    return WordsCollection;
}());
var collection = new WordsCollection();
collection.addItem("First");
collection.addItem("Second");
collection.addItem("Third");
collection.addItem("Fourth");
var iterator = collection.getIterator();
while (iterator.valid()) {
    console.log(iterator.next());
}
console.log();
var reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
