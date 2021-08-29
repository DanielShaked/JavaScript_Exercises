function sumy(num) {
	let firstDigit = Math.floor(num / 100);
	let secondDigit = Math.floor(num / 10) % 10;
	let thirdDigit = num % 10;
	return firstDigit + secondDigit + thirdDigit;
}

console.log(sumy(666));
console.log(sumy(123));
console.log(sumy(572));
console.log(sumy(422));
