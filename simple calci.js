/*var button1 = document.getElementById("button1");
var button2= document.getElementById("button2");

var sum=document.getElementById("sum");
sum.addEventListener("click",function(){
	var a = parseFloat(button1.value);
	var b = parseFloat(button2.value);
	var z = a + b;
	document.getElementById("demo").innerHTML = " The Answer Is: " + z ;
})
var sub=document.getElementById("sub");
sub.addEventListener("click",function(){
	var a = parseFloat(button1.value);
	var b = parseFloat(button2.value);
	var z = a - b;
	document.getElementById("demo").innerHTML = " The Answer Is: " + z ;
})
var mul=document.getElementById("mul");
mul.addEventListener("click",function(){
	var a = parseFloat(button1.value);
	var b = parseFloat(button2.value);
	var z = a * b;
	document.getElementById("demo").innerHTML = " The Answer Is: " + z ;
})
var div=document.getElementById("div");
div.addEventListener("click",function(){
	var a = parseFloat(button1.value);
	var b = parseFloat(button2.value);
	var z = a / b;
	document.getElementById("demo").innerHTML = " The Answer Is: " + z ;
})
var clear=document.getElementById("clear");
clear.addEventListener("click",function(){
	document.getElementById("button1").value = "";
	document.getElementById("button2").value = "";
	document.getElementById("demo").innerHTML = "";
})



/*
let screen1=document.getElementById("button1");
let screen2=document.getElementById("button2");
let =document.getElementById("action");

function display(num){
	screen1.value+=num;
	screen2.value+=num;
	action.value+=num;
}
function container(){
	try{
	screen1.value=eval(screen2.value);
	}
	catch(err){
		alert("This is invalid");
	}
}*/



var button1=document.getElementById("button1");
var button2=document.getElementById("button2");

var sum=document.getElementById("sum");
sum.addEventListener("click",function(){
	var a = parseFloat(button1.value);
	var b = parseFloat(button2.value);
	var c=a+b;
	document.getElementById("demo").innerHTML="The Ans is:"+ c;
})


