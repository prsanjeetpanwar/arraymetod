    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    
        constructor(width) {
            this.width = width;
        }
        get area() {
            return this.calcArea();
        }
        calcArea() {
            return this.height * this.width;
        }
    }




    // i try it but a class can't have more then one constroctor
    
    const square = new Rectangle(20, 30);
    