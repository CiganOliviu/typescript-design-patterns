class Singleton {

  public static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public setBusinessLogic(): void {}
}

const main = () => {
  const objectOne = Singleton.getInstance();
  const objectTwo = Singleton.getInstance();

  const instanceValidator = (): boolean => {
    return objectOne === objectTwo;
  }

  console.log(instanceValidator());
}

main();
