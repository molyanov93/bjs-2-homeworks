"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant;
	discriminant = b * b - 4 * a * c;
	if (discriminant < 0) {
		arr = [];
		return arr;
	} else if (discriminant == 0) {
		arr = [-b / (2 * a)];
		return arr;
	} else {
		arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
		return arr;

	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMonth = percent / 100 / 12;
	let bodyCredit = amount - contribution;
	let paymentMonth = bodyCredit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
	let sumCredit = countMonths * paymentMonth;
	return Number((sumCredit).toFixed(2));
}


