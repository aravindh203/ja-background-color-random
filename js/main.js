var button=document.getElementById("button");

button.addEventListener("click",function(){
	var a=Math.round(Math.random()*256);
	var b=Math.round(Math.random()*256);
	var c=Math.round(Math.random()*256);
	var color=`rgb(${a},${b},${c})`;

	console.log(a,b,c,color)

	document.body.style.backgroundColor=color;
})
