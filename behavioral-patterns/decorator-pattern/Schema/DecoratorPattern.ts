interface SimpleComponent {
    operation(): string;
}

class ConcreteComponent implements SimpleComponent {
    public operation(): string {
        return "Operation from concrete component";
    }
}

class Decorator implements SimpleComponent {
    private component: SimpleComponent;

    constructor(component: SimpleComponent) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

const component = new ConcreteComponent();
const concreteDecoratorA = new ConcreteDecoratorA(component);
const concreteDecoratorB = new ConcreteDecoratorB(concreteDecoratorA);

console.log(concreteDecoratorB.operation());
