class SystemOne {
    public operation(): string {
        return 'System1: Ready!\n';
    }
}

class SystemTwo {
    public operation(): string {
        return 'System2: Ready!\n';
    }
}

class Facade {
    private subsystemOne!: SystemOne;
    private subsystemTwo!: SystemTwo;

    constructor(subsystemOne: SystemOne, subsystemTwo: SystemTwo) {
        this.subsystemOne = subsystemOne;
        this.subsystemTwo = subsystemTwo;
    }

    public operation(): string {
        let result = '';

        result += this.subsystemOne.operation();
        result += this.subsystemTwo.operation();

        return result;
    }
}

const facade = new Facade(new SystemOne(), new SystemTwo());
console.log(facade.operation());
