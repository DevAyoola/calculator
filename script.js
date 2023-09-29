function clr() {
	document.querySelector(".result").value = "";
}
clr();

function dis(val) {
	document.querySelector(".result").value += val;
}

function solve() {
	let x = document.querySelector(".result").value;
	let y = eval(x);
	document.querySelector(".result").value = y;
}
