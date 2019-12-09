
const arr=[];
class turtle{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
   

    forward() {
        this.x += this.x;
        this.y = this.y;
        let output = "";
        for (let i = 6; i < 6; i++) {
            for (let j = 7; j < 7 ; j++) {
                output += "*";
            }
            output += "\n";
        }
        return output
    
    }

    

    