let time = 60

class Timer {

    constructor() {

    }

    Timer(){
        setInterval(function countdown(){

            if(time>=1){
                time=time-1
                let Timer = document.getElementById("Time")
                Timer.innerHTML=time
                console.log(time)
            }else if( time == 0) {
                alert("Your time is up")
            }else{
                console.log("ERROR")
            }
                
        }
        , 1000);    
    }
    
}

let startTimer= new Timer();