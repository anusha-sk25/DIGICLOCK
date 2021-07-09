const hr= document.getElementById("hr");
const min= document.getElementById("min");
const sec= document.getElementById("sec");
const clock =setInterval(function time() {
    let present=new Date();
    let hour=present.getHours();
    let minutes=present.getMinutes();
    let seconds=present.getSeconds();
if(hour<10){
    hour='0' + hour;

}
if(minutes<10){
    minutes='0' + minutes;

}
if(seconds<10){
    seconds='0' + seconds;

}
   hr.textContent=hour;
   min.textContent=minutes;
 sec.textContent=seconds;

     
 },1000);
