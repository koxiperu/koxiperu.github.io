document.querySelector("#chucky").addEventListener("click", function(){
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
  .then((data)=> data.json())
  .then(function(res){
    console.log(res);
       const q=res.value;
       const im=res.icon_url;
       document.querySelector("#answField").style.display="block";
       document.querySelector("#answField img").style.display="none";
       document.querySelector("#answField").style.backgroundColor="";      
       document.querySelector("#quest").innerText=q;
       document.querySelector("#answ").style.display="none";
  });  
  })