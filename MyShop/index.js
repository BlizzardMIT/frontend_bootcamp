var breakTime = []
var round = 1;

function addBreakTime(){
    if(round%4 == 0){
        breakTime.push(15);
    }
    else{
        breakTime.push(5);
    }
    round++;
    console.log(breakTime)
}