class  TestSuitOne {
    constructor() {
        console.log("Setup testing suit one");
    }
}

class  TestSuitTwo {
    constructor() {
        console.log("Setup testing suit two");
    }
}

class  TestSuitThree {
    constructor() {
        console.log("Setup testing suit three");
    }
}

type TestsSuitsType = TestSuitOne | TestSuitTwo | TestSuitThree;

class IFactoryObject {
    public createNewTestSuitObject: (testSuitType: TestsSuitsType) => TestsSuitsType;

    public constructor() {
        this.createNewTestSuitObject = (testSuitType: TestsSuitsType): TestsSuitsType => {

            if (testSuitType === 'TestSuitOne') {
                return new TestSuitOne();
            }
            if (testSuitType === 'TestSuitTwo') {
                return new TestSuitTwo();
            }
            if (testSuitType === 'TestSuitThree') {
                return new TestSuitThree();
            }
        }
    }
}


const main = () => {
    const factoryObject = new IFactoryObject();
    const circle = factoryObject.createNewTestSuitObject('Circle');
    const triangle = factoryObject.createNewTestSuitObject('Triangle');
    const square = factoryObject.createNewTestSuitObject('Square');
}
