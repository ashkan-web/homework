//add array from user 
const Names=[];
let  Namelen=[];
let max=0;
let str="━";
for (i = 2; i < process.argv.length; i++) {
  Names.push(process.argv[i]);
}
//find maximum length of word 
for (let i=0;i < Names.length;i++){
    Namelen.push(Names[i].length);
    if(Namelen[i] > max){
        max = Namelen[i];   
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
