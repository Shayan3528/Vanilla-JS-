const timeOut = document.getElementById("timeout");
const interval = document.getElementById("interval");

let timeoutInstance ;
let intervalInstance ;


function startTimeout() {
    timeoutInstance = setTimeout(() => {
    timeOut.innerHTML = "3 second Over";
  }, 3000);
}


function stopTimeout(){
    clearTimeout(timeoutInstance);
}

function startInterval(){
    intervalInstance = setInterval(()=>{
        interval.innerHTML = new Date().toLocaleTimeString();
    },1000);

}

function stopInterval(){
 clearInterval(intervalInstance);
}