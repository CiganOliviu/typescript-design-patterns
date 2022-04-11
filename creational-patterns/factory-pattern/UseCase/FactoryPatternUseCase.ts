type GeometryFormsType = Circle | Triangle | Square;

class IFactoryObject {
  public createNewForm: (form: GeometryFormsType) => GeometryFormsType;

  public constructor() {
    this.createNewForm = (formType): GeometryFormsType => {
      let form: GeometryFormsType;

      if (formType === 'Circle') {
        form = new Circle();
      }
      if (formType === 'Triangle') {
        form = new Triangle();
      }
      if (formType === 'Square') {
        form = new Square();
      }

      return form;
    }
  }
}

class Circle {
  public constructor() {
    console.log("Circle")
  }
}

class Triangle {
  public constructor() {
    console.log("Triangle");
  }
}

class Square {
  public constructor() {
    console.log("Square");
  }
}

const main = () => {
  const factoryObject = new IFactoryObject();
  const circle = factoryObject.createNewForm('Circle');
  const triangle = factoryObject.createNewForm('Triangle');
  const square = factoryObject.createNewForm('Square');
}
