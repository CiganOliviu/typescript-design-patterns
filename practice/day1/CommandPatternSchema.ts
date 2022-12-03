interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    execute(): void {}
}

class ComplexCommand implements Command {
    execute(): void {}
}

class Invoker {
    private onStartRun: Command = new SimpleCommand();
    private onFinishRun: Command = new SimpleCommand();

    public setOnStart(command: Command) {
        this.onStartRun = command;
    }

    public setOnFinish(command: Command) {
        this.onFinishRun = command;
    }

    private static isCommand(object: any): object is Command {
        return object.execute() !== undefined;
    }

    public performSomething(): void {
        if (Invoker.isCommand(this.onStartRun)) {
            this.onStartRun.execute();
        }

        if (Invoker.isCommand(this.onFinishRun)) {
            this.onStartRun.execute();
        }
    }
}

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand());
invoker.setOnFinish(new ComplexCommand());
invoker.performSomething();
