class ObjectTypeOne {
  public constructor() {
    console.log("You created an object of type one");
  }
}

class ObjectTypeTwo {
  public constructor() {
    console.log("You created an object of type two");
  }
}

class ObjectTypeThree {
  public constructor() {
    console.log("You created an object of type three");
  }
}

type HybridType = ObjectTypeTwo | ObjectTypeTwo | ObjectTypeThree;

class IFactoryObject {

  public createNewObject: (objectType: HybridType) => HybridType;

  public constructor() {
    this.createNewObject = (objectType): HybridType => {
      let object: HybridType;
      if (objectType === 'TypeOne') {
        object = new ObjectTypeOne();
      }
      if (objectType === 'TypeTwo') {
        object = new ObjectTypeTwo();
      }
      if (objectType === 'TypeThree') {
        object = new ObjectTypeThree();
      }

      return object;
    }
  }
}

const main = () => {
  const factoryObject = new IFactoryObject();
  const objectTypeOne = factoryObject.createNewObject('TypeOne');
  const objectTypeTwo = factoryObject.createNewObject('TypeTwo');
  const ObjectTypeThree = factoryObject.createNewObject('TypeThree');
}

main();
