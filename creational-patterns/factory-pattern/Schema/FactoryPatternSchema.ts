type HibridType = ObjectTypeTwo | ObjectTypeTwo | ObjectTypeThree;

class IFactoryObject {

  public createNewObject: (objectType: HibridType) => HibridType;

  public constructor() {
    this.createNewObject = (objectType): HibridType => {
      let object: HibridType;
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

const main = () => {
  const factoryObject = new IFactoryObject();
  const objectTypeOne = factoryObject.createNewObject('TypeOne');
  const objectTypeTwo = factoryObject.createNewObject('TypeTwo');
  const ObjectTypeThree = factoryObject.createNewObject('TypeThree');
}


main();
