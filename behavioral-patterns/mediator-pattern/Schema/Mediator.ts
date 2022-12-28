interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private componentOne!: ComponentOne;
    private componentTwo!: ComponentTwo;

    constructor(componentOne: ComponentOne, componentTwo: ComponentTwo) {
        this.componentOne = componentOne;
        this.componentOne.setMediator(this);
        this.componentTwo = componentTwo;
        this.componentTwo.setMediator(this);
    }

    notify(sender: object, event: string): void {
        if (event === 'A') {
            this.componentTwo.doC();
        }

        if (event === 'D') {
            this.componentOne.doB();
            this.componentTwo.doC()
        }
    }
}

class BaseComponent {
    private mediator!: Mediator;

    constructor(mediator?: Mediator) {
        if (mediator) this.mediator = mediator;
    }

    public setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }

    public getMediator(): Mediator {
        return this.mediator;
    }
}

class ComponentOne extends BaseComponent {
    public doA(): void {
        console.log('Component 1 does A.');
        this.getMediator().notify(this, 'A');
    }

    public doB(): void {
        console.log('Component 1 does B.');
        this.getMediator().notify(this, 'B');
    }
}

class ComponentTwo extends BaseComponent {
    public doC(): void {
        console.log('Component 2 does C.');
        this.getMediator().notify(this, 'C');
    }

    public doD(): void {
        console.log('Component 2 does D.');
        this.getMediator().notify(this, 'D');
    }
}

const componentOne = new ComponentOne();
const componentTwo = new ComponentTwo();

const mediator = new ConcreteMediator(componentOne, componentTwo);

componentOne.doA();
componentTwo.doD();
