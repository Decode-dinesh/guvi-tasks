class circle {
    constructor(radius,color,area,circumference){
        this.radius=radius;
        this.color=color;
        this.area=area;
        this.circumference=circumference;
    }
    getRadius(){
        this.radius=radius;
    }
   getColor(){
       console.log(this.color);
   }
    getArea(){
        console.log(3.14*this.radius*this.radius);
    }
    getCircumference(){
        console.log(2*3.14*this.radius);
    }
    }
    var res = new circle(7,"green");
    res.getColor();
    res.getArea();
    res.getCircumference();