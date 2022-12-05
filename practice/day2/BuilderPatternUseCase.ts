interface Builder {
    setupStagingEnvironment(): void;
    runPipeline(): void;
    deployFeatureBranch(): void;
}

class DevelopmentEnvironment {
    private developmentParts: string[] = [];

    public addDevelopmentStage(developmentStage: string) {
        this.developmentParts.push(developmentStage);
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

    private resetDevelopmentEnvironment(): void {
        this.developmentEnvironment = new DevelopmentEnvironment();
    }

    public getDevelopmentEnvironment(): DevelopmentEnvironment {
        return this.developmentEnvironment;
    }

    public deployFeatureBranch(): void {
        this.developmentEnvironment.addDevelopmentStage('Deploy Feature Branch');
    }

    public runPipeline(): void {
        this.developmentEnvironment.addDevelopmentStage('Run pipeline');
    }

    public setupStagingEnvironment(): void {
        this.developmentEnvironment.addDevelopmentStage('Setup Staging Environment');
    }
}

class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    public buildMVP(): void {
        this.builder.setupStagingEnvironment();
        this.builder.runPipeline();
    }

    public buildMaximumTestableDevelopmentEnvironment(): void {
        this.builder.setupStagingEnvironment();
        this.builder.runPipeline();
        this.builder.deployFeatureBranch();
    }
}

const builder = new ConcreteBuilder();
const director = new Director(builder);

director.buildMVP();
builder.getDevelopmentEnvironment().listDevelopmentParts();
