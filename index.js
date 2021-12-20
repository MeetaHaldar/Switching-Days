let btn =document.getElementById("toggle");
let box =document.getElementById("box");
let day =document.getElementById("day");
let heading =document.getElementById("heading");
let showingDate =document.getElementById("showingDate");




btn.addEventListener("click" , toggleButton)
function toggleButton(e)
{
if(btn.textContent.includes('night'))
{
    day.src="images/night.png";
    btn.textContent="switch to day";
    box.classList.add("night"); 
 heading.textContent="Goodnight !!"
 
}
else{
        day.src="images/day.png";
    btn.textContent="switch to night";
     box.classList.remove("night");
    box.classList.add("day");
     heading.textContent="Goodmorning !!"
}}

var today = new Date();

var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;

showingDate.textContent=dateTime;
