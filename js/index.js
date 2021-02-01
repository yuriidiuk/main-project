const clock = document.querySelector('.clock')
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000)


document.onkeydown = function checkKeycode(event)
{
var keycode;
if(!event) var event = window.event;
if (event.keyCode) keycode = event.keyCode; 
else if(event.which) keycode = event.which; 

	switch(keycode){ 
		case 13: ravno(); break;
		case 46: clear1(); break;
		case 111: semn('/'); break;
		case 106: semn('*'); break;
		case 107: semn('+'); break;
		case 109: semn('-'); break;
		case 96: clic(0); break;
		case 97: clic(1); break;
		case 98: clic(2); break;
		case 99: clic(3); break;
		case 100: clic(4); break;
		case 101: clic(5); break;
		case 102: clic(6); break;
		case 103: clic(7); break;
		case 104: clic(8); break;
		case 105: clic(9); break;
		}
}

var b = 0; 
var k = '';
var znak = false; 

function clear1() { 
	document.getElementById("window_calc").innerHTML = 0;
	b = 0; 
	k = '';
	znak = false;
}

function semn(semn) {
	k = semn;
	znak = false;
	b = parseInt(window_calc.innerHTML);
}

function ravno() {

if(k!=''){		
	switch(k){
		case '/': b = b / parseInt(window_calc.innerHTML);break;
		case '*': b = b * parseInt(window_calc.innerHTML);break;
		case '-': b = b - parseInt(window_calc.innerHTML);break;
		case '+': b = b + parseInt(window_calc.innerHTML);break;
	}
	window_calc.innerHTML = b;
	k = ''; 
}
}

function clic(number) {
	
	var window_calc = document.getElementById("window_calc");

if(window_calc.innerHTML.length < 22){

if(window_calc.innerHTML != 0 && znak == true )
	window_calc.innerHTML += number;
else	
	window_calc.innerHTML = number;

znak = true; 
}
 
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
    
function myF(event) {
  var x = event.location;
  document.getElementById("demo1").innerHTML = "Положення: " + x;
}

function WhichButton(event) {
  alert("Ви натиснули: " + event.button)
}

function myFu(event) {
  var x = event.key;
  document.getElementById("demo2").innerHTML = "Натиснута клавіша: " + x;
}