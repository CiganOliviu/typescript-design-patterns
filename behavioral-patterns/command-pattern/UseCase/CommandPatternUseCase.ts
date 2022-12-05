interface PipelineCommand {
    execute();
}

class DependenciesInstallingCommand implements PipelineCommand {
    public execute() {
        console.log("Install required dependencies...");
    }
}

class TestsRunCommand implements PipelineCommand {
    public execute() {
        console.log("Run tests");
    }
}

class DeployCommand implements PipelineCommand {
    public execute() {
        console.log("Deploy");
    }
}

class Invoker {
    private onStart: PipelineCommand;
    private onMiddle: PipelineCommand;
    private inEnd: PipelineCommand;

    public setOnStart(onStart: PipelineCommand): void {
        this.onStart = onStart;
    }

    public setOnMiddle(onMiddle: PipelineCommand): void {
        this.onMiddle = onMiddle;
    }

    public setInEnd(inEnd: PipelineCommand): void {
        this.inEnd = inEnd;
    }

    private isPipelineCommand(object: any): object is PipelineCommand {
        return object.execute() !== undefined;
    }

    public triggerPipeline(): void {
        if (this.isPipelineCommand(this.onStart)) this.onStart.execute();
        if (this.isPipelineCommand(this.onMiddle)) this.onMiddle.execute();
        if (this.isPipelineCommand(this.inEnd)) this.inEnd.execute();
    }
}

const invoker = new Invoker();
invoker.setOnStart(new DependenciesInstallingCommand());
invoker.setOnMiddle(new TestsRunCommand());
invoker.setInEnd(new DeployCommand());

invoker.triggerPipeline();
