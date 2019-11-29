let str="━";
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