const input = document.getElementById("input");
let time = document.getElementById("time");
const btn = document.getElementById("start");
console.log("hello")
input.addEventListener("change", (event) => {
    console.log(event.target.value)
    const searchedField = event.target.value
    const query=searchedField.replace(/\s+/g,"+")
search(query);   
});

const search = (q) =>{
    const googleUrl = `https://www.google.com/search?q=${q}`;
    window.open(googleUrl, '_blank');
    clearInput();
}

const clearInput = () =>{
    input.value =""
}

let timeSec= 0;
btn.addEventListener("click", () => {
   intervalId = setInterval(() => {
  
        if (timeSec === 1500 ){
        const sound = new Audio("assets/alarm.wav");
        sound.play();
        timeSec = 0;
        time.innerHTML = "00";
        clearInterval(intervalId);
      
      }

      timeSec++;
      time.innerHTML = timeSec;
      
    }, 1000);
  });