//we want a random joke every time we load the page
//vanilla js


document.querySelector("#newJoke").addEventListener("click", function(){
  fetch("https://backend-omega-seven.vercel.app/api/getjoke")
.then((data)=> data.json())
.then(function(res){
    console.log(res);
    const q=res[0].question;
    const a=res[0].punchline;
    console.log(q,a);
    document.querySelector("div").style.display="block";
    document.querySelector("#quest").innerText="- "+q;
    document.querySelector("#answ").innerText="- "+a;
});  
})
