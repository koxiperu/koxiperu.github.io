//we want a random joke every time we load the page
//vanilla js


document.querySelector("#newJoke").addEventListener("click", function(){
  fetch("https://backend-omega-seven.vercel.app/api/getjoke")
.then((data)=> data.json())
.then(function(res){
    const q=res[0].question;
    const a=res[0].punchline;
    document.querySelector("#answField").style.backgroundColor="";
    document.querySelector("#answField img").src="#";
    document.querySelector("#answField img").style.display="none";
    document.querySelector("#answField").style.display="block";
    document.querySelector("#quest").innerText="- "+q;
    document.querySelector("#answ").innerText="- "+a;
});  
})
