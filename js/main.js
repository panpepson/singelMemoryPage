//Dom Elemnts
const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	name = document.getElementById('name'),
	focus = document.getElementById('focus'),
	stempel = document.getElementById('stempel');

const showAmPm = true;

// show time
showTime = () => {
	//let today = new Date(2019, 06, 10, 20, 33, 30),
	let today = new Date(), hour = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();
	// set AM or PM
	const amPm = hour >= 12 ? 'PM' : 'AM';
	// 12hr format
	hour = hour % 12 || 12;
	//Wyjscie
	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
	setTimeout(showTime, 1000);
}

stem = () => {
	let today = new Date(), dzien = today.getDate(), rok = today.getFullYear(), miesiac = today.getMonth() + 1;
	stempel.innerHTML = `${dzien}/${miesiac}/${rok}`;
}


function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function steBgGreet() {
	let today = new Date(), hour = today.getHours();
	if (hour < 4) {
		// Rano
		document.body.style.background = "url(/img/noc2.jpg)";
		greeting.textContent = "Dobrej nocy";
		document.body.style.backgroundSize = "100% 100%";
	} else if (hour < 12) {
		//Podwieczorek
		document.body.style.background = "url(/img/poranek.jpg)";
		greeting.textContent = "dzień dobry";
		document.body.style.backgroundSize = "100% 100%";
	} else if (hour < 20) {
		//Wieczor
		document.body.style.background = "url(/img/popoludnie.jpg)";
		greeting.textContent = "Dobry Wieczór";
		document.body.style.backgroundSize = "100% 100%";
	} else {
		//Wieczor
		document.body.style.background = "url(/img/wieczor.jpg)";
		greeting.textContent = "Dobry Wieczór";
		document.body.style.backgroundSize = "100% 100%";
	}
}

function getName() {
	if (localStorage.getItem('name') == null) {
		name.textContent = '[Wpisz ime]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}

function setName(e) {
	if (e.type === 'keypress') {
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}

	} else {
		localStorage.setItem('name', e.target.innerText);
	}
}


function getFocus() {
	if (localStorage.getItem('focus') == null) {
		focus.textContent = '[pisz ... ]';
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
}


function setFocus(e) {
	if (e.type === 'keypress') {
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('focus', e.target.innerText);
			fous.blur();
		}

	} else {
		localStorage.setItem('focus', e.target.innerText);
	}
}

//const animal = [kot, pies, wrona]
//colsole.log(animal);

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Runer
stem();
showTime();
steBgGreet();
getName();
getFocus();
