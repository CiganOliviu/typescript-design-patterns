class ComponentWithBackReference {
    public prototype: Prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

class Prototype {
    private primitiveData: any;
    private component: object;
    private circularReference: ComponentWithBackReference;

    public setPrimitiveData = (newPrimitiveData: any) => {
        this.primitiveData = newPrimitiveData;
    }

    public setComponent = (newComponent: object) => {
        this.component = newComponent;
    }

    public setCircularReference = (newCircularReference: ComponentWithBackReference) => {
        this.circularReference = newCircularReference;
    }

    public clone = (): this => {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

const main = () => {
    const prototype = new Prototype();
    prototype.setPrimitiveData(1234);
    prototype.setComponent(new Date());
    prototype.setCircularReference(new ComponentWithBackReference(prototype));

    const prototypeClone = prototype.clone();
}

main();
