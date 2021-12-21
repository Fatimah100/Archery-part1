class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
      this.x=x;
      this.y=y;
      this.w=w
      this.h=h
      this.body=Bodies.rectangle(x, y, w, h , options);
       World.add(world, this.body);
    };

//create the rectangular shaped body.

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
