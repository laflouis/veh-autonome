function setup() {
  createCanvas(600, 400);
  car1 = new Car(25, 25);
  car2 = new Car(25, 125);
}


function draw(){
  background(200);
  car1.show();
  car1.acc(5);
  car2.show();
  car2.acc(2);
  /*acc();
  dec();
  turn();*/
}
class Car {
  constructor(x,y,v) {
    this.height=30;
    this.width=10;
    this.x=x;
    this.y=y;
}
  acc(v){
    this.v=v;
    this.x=this.x+this.v;
  }
  dec(){
  }
  turn(){
  }
  show() {
    stroke(255);
    rect(this.x, this.y, this.height, this.width,);
}
}
