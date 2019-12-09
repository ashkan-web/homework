//Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates
const arr=[];
class turtle{
    constructor(x, y) {
        this.step=[[0,0]]
        this.x = x;
        this.y = y;
        this.move=East
    }
   
//forward method that takes a number of steps then updates the Turtle instance with its new position after moving that many steps
   
    forward(n) {
        this.x = this.x+n;
        this.y = this.y;

    switch(this.move){

     case East:
        this.step.push([x+n,y]);
        break;
     case West:
        this.step.push([x-n,y]);
        break;   
     case South:
        this.step.push([x,y+n]);
        break;
     case North:
        this.step.push([x,y-n]);
        break;   
    }


    return this;

    }

//rigth method that takes zero arguments. When right is called, update the Turtle instance to rotate its facing to the right

rigth(){
    this.move = (this.mov)
}


}

    

    