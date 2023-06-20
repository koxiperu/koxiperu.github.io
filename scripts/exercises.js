const url = 'https://exercisedb.p.rapidapi.com/exercises';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde7b84a4cmsh6669c43fa94e00ep172d16jsn999b13f2c21a',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
document.querySelector("#newExercise").addEventListener("click", function(){
 fetch("https://exercisedb.p.rapidapi.com/exercises",options)
 .then((data)=> data.json())
 .then(function(res){
    const a=Math.floor(Math.random()*1320);
    const obj=res[a]; 
    const objUrl=obj.gifUrl;   
    document.querySelector("#answField").style.display="block";
    document.querySelector("#answField img").style.display="block";
    document.querySelector("#answField").style.backgroundColor="white";
    document.querySelector("#quest").innerText=obj.name;
    document.querySelector("#answ").innerText="("+obj.bodyPart+")";
    document.querySelector("#answField img").src=objUrl;
     });
});