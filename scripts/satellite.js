const satellite=document.querySelector(".satellite");
var pushed=false;
var infinite;
document.querySelector("#launch").addEventListener("click", function(){
    if (pushed){
      document.querySelector("#launch").style.backgroundColor="orange";
        document.querySelector("#launch").style.color="darkslateblue";
        document.querySelector("#launch").innerText="launch a satellite";          
        pushed=false;
        clearInterval(infinite);
        satellite.style.transform="translate(0, 0) rotate(0deg)";
    } else {
        document.querySelector("#launch").style.backgroundColor="rgb(116, 76, 3)";
        document.querySelector("#launch").style.color="white";
        document.querySelector("#launch").innerText="park a satellite";
        pushed=true;
        infinite=setInterval(moveSatellite,10000);
        satellite.style.transform="translate(90vw, 85vh) rotate(180deg)";
    } 
    
});

 function moveSatellite() {
    const rangeW=Math.round(90-satellite.clientWidth*90/window.innerWidth);
    const rangeH=Math.round(85-satellite.clientHeight*85/window.innerHeight);
    let i=false;
    let rX=Math.floor(Math.random()*rangeW);    
    let rY=Math.floor(Math.random()*rangeH);
    //if(()||())
    let rD=Math.floor(Math.random()*360);
    satellite.style.transform="translate("+rX+"vw, "+rY+"vh) rotate("+rD+"deg)";
    console.log("width/height total - "+rangeW+"/ "+rangeH);
    console.log("random x/y/deg - "+rX+" / "+rY+" / "+rD);
 }