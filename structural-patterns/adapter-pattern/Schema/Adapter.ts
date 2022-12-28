class Target {
    public request(): string {
        return 'Target';
    }
}

class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

class Adapter extends Target {
    private adaptee!: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        return this.adaptee.specificRequest().split('').reverse().join('');
    }
}

const target = new Target();
console.log(target.request());

const adaptee = new Adaptee();
console.log(adaptee.specificRequest());

const adapter = new Adapter(adaptee);
console.log(adapter.request());
