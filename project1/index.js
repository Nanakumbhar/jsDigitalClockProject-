



function getTime(){
    let time = new Date();
    let HH = time.getHours();
    let MM = time.getMinutes();
    let SS = time.getSeconds();
    let period = document.getElementById("period");

if(HH > 11 ){
    period.innerHTML = "PM"
}
else{
    period.innerHTML ="AM"
}

    let msg1 = document.getElementById("msg1")
let msg2 = document.getElementById("msg2")
let image = document.getElementById("img")


if(05 <= HH || HH <= 12 && period =="AM"){
    msg1.innerText = "GOOD MORNING!! WAKE UP !"
    msg2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
    image.src ="./breakfastimage.png"
}

if(12 <=HH || HH <=17 &&  period=="PM"){
    msg1.innerText = "GOOD AFTERNOON!! TAKE SOME SLEEP"
    msg2.innerText = "LET'S HAVE SOME LUNCH !!"
    image.src = "./lunch image.png"
}


if(17 <= HH || HH <= 19 && period=="PM"){
    msg1.innerText = "GOOD EVENING !!"
    msg2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    image.src = "./tea image.png"
}
if(19 <= HH || HH <= 12 && period=="PM"){
    msg1.innerText = "GOOD NIGHT !!"
    msg2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
    image.src = "./goodnight image.png"
}

if(24 <= HH || HH <= 05 && period=="AM"){
    msg1.innerText = "GOOD NIGHT !!"
    msg2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
    image.src = "./goodnight image.png"
}

  

     if (HH > 12){
      HH = HH - 12;
 
   }
  
  if (HH < 10){
      HH = "0" + HH 
  }

  if (MM < 10){
      MM = "0" + MM 
  }

  if ( SS < 10){
      SS = "0" + SS 
  }
  document.getElementById("HH").innerText = HH +" Hours";
  document.getElementById("MM").innerText = MM + " Min" ;
  document.getElementById("SS").innerText = SS +" Sec";
    // setTimeout(getTime ,1000)
};
setInterval (getTime, 1000);

getTime()



function execute(){
  let drop1 = document.getElementsByClassName("select")[0]
  let output1 = drop1.options[drop1.selectedIndex].innerText
  document.getElementById("Alarm1").innerText = output1
 

  let drop2 = document.getElementsByClassName("select")[1]
  let output2 = drop2.options[drop2.selectedIndex].innerText
  document.getElementById("Alarm2").innerText = output2 

  let drop3 = document.getElementsByClassName("select")[2]
  let output3 = drop3.options[drop3.selectedIndex].innerText
  document.getElementById("Alarm3").innerText = output3 

  let drop4 = document.getElementsByClassName("select")[3]
  let output4 = drop4.options[drop4.selectedIndex].innerText
  document.getElementById("Alarm4").innerText = output4 
}
 
