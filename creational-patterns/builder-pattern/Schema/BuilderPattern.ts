interface Builder {
    buildPartOne(): void;
    buildPartTwo(): void;
    buildPartThree(): void;
}

class ConcreteBuilder implements Builder {
    private product: Product;

    constructor() {
        this.resetProduct();
    }

    private resetProduct = () => {
        this.product = new Product();
    }

    public buildPartOne = () => {
        this.product.addPart('PartOne');
    }

    public buildPartTwo = () => {
        this.product.addPart("PartTwo");
    }

    public buildPartThree = () => {
        this.product.addPart("PartThree");
    }

    public getProduct = (): Product => {
        const result = this.product;
        this.resetProduct();
        return result;
    }
}

class Product {
    private parts: string[] = [];

    public addPart = (part: string) => {
        this.parts.push(part);
    }

    public listParts = () => {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class Director {
    private builder: Builder;

    constructor(newBuilder: Builder) {
        this.builder = newBuilder;
    }

    public buildMinimalProduct = () => {
        this.builder.buildPartOne();
    }

    public buildFullProduct = () => {
        this.builder.buildPartOne();
        this.builder.buildPartTwo();
        this.builder.buildPartThree();
    }
}

const main = () => {
    const builder = new ConcreteBuilder();
    const director = new Director(builder);
    director.buildMinimalProduct();
    builder.getProduct().listParts();

    console.log('======================');

    director.buildFullProduct();
    builder.getProduct().listParts();
}

main();
