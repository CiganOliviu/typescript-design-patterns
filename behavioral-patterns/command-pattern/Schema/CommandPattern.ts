interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    execute(): void {
    }
}

class ComplexCommand implements Command {
    execute(): void {
    }
}

class Invoker {
    private onStart: Command;
    private onFinish: Command;

    public setOnStart(command: Command) {
        this.onStart = command;
    }

    public setOnFinish(command: Command) {
        this.onFinish = command;
    }

    private static isCommand(object): object is Command {
        return object.execute !== undefined;
    }

    public performSomething(): void {
        if (Invoker.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        if (Invoker.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }
}

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand());
invoker.setOnFinish(new ComplexCommand());
invoker.performSomething();
