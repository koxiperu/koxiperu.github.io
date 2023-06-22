const satellite=document.querySelector(".satellite");
var pushed=false;
var infinite;
var rX=0;
var rY=0;
var rx0=0;
var ry0=0;
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
        moveSatellite();
        infinite=setInterval(moveSatellite,10000);
        let d=135+Math.atan2(90,50)*180/Math.PI;
        console.log("degree - "+d);
    } 
    
});

 function moveSatellite() {
    const rangeW=Math.round(90-satellite.clientWidth*90/window.innerWidth);
    const rangeH=Math.round(85-satellite.clientHeight*85/window.innerHeight);
    let i=false;
    rx0=rX;
    ry0=rY;
    console.log("last - "+rx0+"/ "+ry0);
    let rD=Math.floor(Math.random()*360);
    satellite.style.transform="translate("+rx0+"vw, "+ry0+"vh) rotate("+rD+"deg)";
     rX=Math.floor(Math.random()*rangeW);    
     rY=Math.floor(Math.random()*rangeH);
     while(i==false) {
         if((rX>25)&&(rX<75)&&(rY>25)&&(rY<75)){
             if((rX>25)&&(rX<75)){
                 rX=Math.floor(Math.random()*rangeW);
             }else{
                 rY=Math.floor(Math.random()*rangeH);
             }
     } else {
         i=true;
     };
     };
    
    
    satellite.style.transform="translate("+rX+"vw, "+rY+"vh) rotate("+rD+"deg)";
    
    console.log("random x/y/deg - "+rX+" / "+rY+" / "+rD);
 }