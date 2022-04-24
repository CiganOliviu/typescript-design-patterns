interface Builder {
    setupStagingEnvironment(): void;
    runPipeline(): void;
    deployFeatureBranch(): void;
}

class DevelopmentEnvironment {
    private developmentParts: string[] = [];

    public addDevelopmentPart = (part: string) => {
        this.developmentParts.push(part);
    }

    public listDevelopmentParts = () => {
        console.log(`Product parts: ${this.developmentParts.join(', ')}\n`);
    }
}

class ConcreteBuilder implements Builder {

    private developmentEnvironment: DevelopmentEnvironment;

    constructor() {
        this.resetDevelopmentEnvironment();
    }

    private resetDevelopmentEnvironment = () => {
        this.developmentEnvironment = new DevelopmentEnvironment();
    }

    public setupStagingEnvironment(): void {
        this.developmentEnvironment.addDevelopmentPart('Setup staging environment');
    }

    public runPipeline(): void {
        this.developmentEnvironment.addDevelopmentPart('Run CI/CD pipeline');
    }

    public deployFeatureBranch(): void {
        this.developmentEnvironment.addDevelopmentPart('Deploy feature branch');
    }

    public getDevelopmentEnvironment = (): DevelopmentEnvironment => {
        const result = this.developmentEnvironment;
        this.resetDevelopmentEnvironment();
        return result;
    }
}

class Director {
    private builder: Builder;

    constructor(newBuilder: Builder) {
        this.builder = newBuilder;
    }

    public buildMinimalDevelopmentEnvironment = () => {
        this.builder.runPipeline();
        this.builder.setupStagingEnvironment();
    }

    public buildMaximumTestableDevelopmentEnvironment = () => {
        this.builder.runPipeline();
        this.builder.setupStagingEnvironment();
        this.builder.deployFeatureBranch();
    }
}

const main = () => {
    const builder = new ConcreteBuilder();
    const director = new Director(builder);
    director.buildMinimalDevelopmentEnvironment();
    builder.getDevelopmentEnvironment().listDevelopmentParts();

    console.log('==========================');

    director.buildMaximumTestableDevelopmentEnvironment();
    builder.getDevelopmentEnvironment().listDevelopmentParts();
}

main();
