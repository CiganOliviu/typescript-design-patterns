interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class Context {
    private strategy!: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}

class ConcreteStrategyOne implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyTwo implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const context = new Context(new ConcreteStrategyOne());
context.doSomeBusinessLogic();

context.setStrategy(new ConcreteStrategyTwo());
context.doSomeBusinessLogic();
