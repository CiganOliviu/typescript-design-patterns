interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string;
}

abstract class AbstractHandler implements Handler {

    private nextHandler: Handler | undefined;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): string {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }

        return "";
    }
}

class ConcreteHandlerOne extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'OptionOne') {
            return `ConcreteHandlerOne: ${request}.`;
        }
        return super.handle(request);

    }
}

class ConcreteHandlerTwo extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'OptionTwo') {
            return `ConcreteHandlerTwo: ${request}.`;
        }
        return super.handle(request);
    }
}

class ConcreteHandlerThree extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'OptionThree') {
            return `ConcreteHandlerThree: ${request}.`;
        }
        return super.handle(request);
    }
}

const clientCode = (handler: Handler) => {
    const options = ['OptionOne', 'OptionTwo', 'OptionThree'];

    for (const option of options) {
        const result = handler.handle(option);

        if (result) {
            console.log(` ${result}`);
        } else {
            console.log(`  ${option} was left`);
        }
    }
}

const optionOne = new ConcreteHandlerOne();
const optionTwo = new ConcreteHandlerTwo();
const optionThree = new ConcreteHandlerThree();

optionOne.setNext(optionTwo).setNext(optionThree);

clientCode(optionOne);
