let pieton
function setup() {
  createCanvas(600, 400);
  pieton1 = new Pieton(25,25)
  pieton2 =new Pieton (25, 125);
}


function draw(){
  background(200);
  pieton1.show();
  pieton1.acc(2);
  pieton2.show();
  pieton2.acc(1);
  /*acc();
  dec();
  turn();*/
}

class Pieton {
  constructor(x,y) {
    this.width=5;
    this.x=x;
    this.y=y;
}
  acc(v){
    this.v=v;
    this.x=this.x+this.v;
  }
  // acc(){
  //   car.x=car.x+5
  show() {
    stroke(255);
    ellipse(this.x, this.y, this.width);
}
}
