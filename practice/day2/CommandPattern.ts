interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    public execute(): void {
        console.log("Execute simple command");
    }
}

class ComplexCommand implements Command {
    public execute(): void {
        console.log("Execute complex command");
    }
}

class Invoker {
    private onStartCommand: Command;
    private onFinishCommand: Command;

    public setOnStartCommand(onStartCommand: Command): void {
        this.onStartCommand = onStartCommand;
    }

    public setOnFinishCommand(onFinishCommand): void {
        this.onFinishCommand = onFinishCommand;
    }

    private isCommand(object: any): object is Command {
        return object.execute() !== undefined;
    }

    public performCommands(): void {
        if (this.isCommand(this.onStartCommand)) {
            this.onStartCommand.execute();
        }

        if (this.isCommand(this.onFinishCommand)) {
            this.onFinishCommand.execute();
        }
    }
}

const invoker = new Invoker();
invoker.setOnStartCommand(new SimpleCommand());
invoker.setOnFinishCommand(new ComplexCommand());

invoker.performCommands();
