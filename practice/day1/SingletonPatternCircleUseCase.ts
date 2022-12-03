type CircleType = {
    xPoint: number;
    yPoint: number;
    radius: number;
}

class Circle {
    public static instance: Circle;
    private circle: CircleType = { xPoint: 0.0, yPoint: 0.0, radius: 0.0 }

    private constructor(circle: CircleType) {
        this.circle.xPoint = circle.xPoint;
        this.circle.yPoint = circle.yPoint;
        this.circle.radius = circle.radius;
    }

    public static getCircleInstance(circle: CircleType): Circle {
        if (!Circle.instance) {
            Circle.instance = new Circle(circle);
        }

        return Circle.instance;
    }
}

const main = () => {
    const circleObject = Circle.getCircleInstance(
        { 'xPoint': 2.2, 'yPoint': 3.4, 'radius': 5.6 });

    const circleObjectAux = Circle.getCircleInstance(
        { 'xPoint': 6.2, 'yPoint': 7.3, 'radius': 12.8 });

    console.log(circleObject);
    console.log(circleObjectAux);
}

main();
