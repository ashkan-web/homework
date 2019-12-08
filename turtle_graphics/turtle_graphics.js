
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

    

    dec() {
        this.currentCount -= this.step;
    }

    now() {
        return this.x, this.y;
    }

    setStep(counterStepx,counterStepy) {
        this.stepx = counterStepx;
        this.stepy= counterStepy;
    }
}
const turtle1 =new turtle(6, 5);
 turtle1.forward(9);

arr.push(turtle1.x,turtle1.y);
 console.log( turtle1.forward(4));


// class Counter {
//     constructor(currentCount, step) {
//         this.currentCount = currentCount;
//         this.step = step;
//     }

//     set(n) {
//         this.currentCount = n;
//     }

//     inc() {
//         this.currentCount += this.step;
//     }

//     dec() {
//         this.currentCount -= this.step;
//     }

//     now() {
//         return this.currentCount;
//     }

//     setStep(counterStep) {
//         this.step = counterStep;
//     }
// }

// const counter1 = new Counter(20, 5);
// counter1.dec()
// console.log(counter1)