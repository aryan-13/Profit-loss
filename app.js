var inpV = document.querySelector('#profit-inp');
var numV = document.querySelector('#nums');
var currV = document.querySelector('#curr');
var op = document.querySelector('#output-1');

var cont = document.querySelector('.container-1');

var btn = document.querySelector('.btn');

var c = Number(inpV.value);
var d = Number(numV.value);
var e = Number(currV.value);
console.log(c, e, d);
console.log(op);
btn.addEventListener('click', clickhandler);
function clickhandler() {
	var c = Number(inpV.value);
	var d = Number(numV.value);
	var e = Number(currV.value);
	if (c < 0 || d < 0 || e < 0) {
		op.innerHTML = `Values below zero are not allowed ❌`;
		return;
	}
	console.log(c, e, d);
	if (e < c) {
		var nu = ((c * d - e * d) / (c * d)) * 100;
		var n = nu.toFixed(2);
		op.innerHTML = `You made a loss of: ₹${
			c * d - e * d
		} <br> You lost: ${n} % <br> 😕😕`;
		document.body.style.backgroundColor = '#ea7676';
		cont.style.backgroundColor = '#ea7676';
		cont.style.boxShadow = '5px 5px 10px #c76464, -5px -5px 10px #ff8888';
		op.style.backgroundColor = '#ea7676';
		op.style.boxShadow =
			'inset 5px 5px 10px #c76464,inset -5px -5px 10px #ff8888';
	} else {
		var mu = ((e * d - c * d) / (c * d)) * 100;
		var m = mu.toFixed(2);
		op.innerHTML = `You made a profit of: ₹${
			e * d - c * d
		} <br> You gained: ${m} % <br> 💸💸`;
		cont.style.backgroundColor = '#8dea76';
		cont.style.boxShadow = '5px 5px 10px #78c764, -5px -5px 10px #a2ff88';
		document.body.style.backgroundColor = '#8dea76';
		op.style.backgroundColor = '#8dea76';
		op.style.boxShadow =
			'inset 5px 5px 10px #78c764, inset -5px -5px 10px #a2ff88';
	}
}
