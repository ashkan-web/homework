//add array from user 
const names=[];
let  namelen=[];
let max=0;
let str="━";
for (i = 2; i < process.argv.length; i++) {
  names.push(process.argv[i]);
}
//find maximum length of word 
for (let i=0;i < names.length;i++){
    namelen.push(names[i].length);
    if(namelen[i] > max){
        max = namelen[i];   
    } 
 } 
// function that takes a number as an argument that returns that number of horizontal bars
 function drawLine(number){
return str.repeat(number)
}
//drawTopBorder, drawMiddleBorder and drawBottomBorder Functions
//takes a number as an argument that returns that number of horizontal bars with starting character and end character
function drawTopBorder(number){
    return "┏" + drawLine(number) + "┓"
    }

    function drawMiddleBorder(number){
        return "┣" + drawLine(number) + "┫"
        }
        
        function drawBottomBorder(number){
            return "┗" + drawLine(number) + "┛"
            }
//it takes array and surround every element in array by character vertically
            function drawBarsAround(arr) {
                let i = 0;
                for (let element of arr) {
                  i++;
                  string = "┃" + element.padEnd(max, " ") + "┃" ;
                  console.log(string);
                  if(i< arr.length){
                      console.log(drawMiddleBorder(max));
                  }
                }
              }
                //call function to print box around the input array   
              console.log(drawTopBorder(max));
                drawBarsAround(names);
                console.log(drawBottomBorder(max));