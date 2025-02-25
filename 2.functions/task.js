function getArrayParams(...arr) {
	let mass = [...arr];
	let min, max, sum, avg;
	min = +Infinity;
	max = -Infinity;
	sum = 0;
	if (mass.length > 0) {
		for (let i = 0; i < mass.length; i++) {
			if (mass[i] < min) {
				min = mass[i];
			}

			if (mass[i] > max) {
				max = mass[i];
			}
			sum += mass[i];
			avg = sum / mass.length;
			avg = Number(avg.toFixed(2));
		}
	} else {
		min = mass[i];
		max = mass[i];
		avg = mass[i];
	}

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	mass = [...arr];
	sum = 0;

	for (let i = 0; i < mass.length; i++) {
		sum += mass[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	mass = [...arr];

	if (mass.length > 0) {
		return Math.max(...mass) - Math.min(...mass);
	} else return 0;
}

function differenceEvenOddWorker(...arr) {
	mass = [...arr];
	let sumOdd = 0;
	let sumEven = 0; // Четные
	if (mass.length == 1) {
		sumEven = 0;
	} else {
		for (let i = 0; i < mass.length; i++) {
			if (mass[i] % 2 == 0) {
				sumEven += mass[i];
			} else sumOdd += mass[i];
		}
		return (sumEven - sumOdd);
	}
}

function averageEvenElementsWorker(...arr) {
	mass = [...arr];
	let average;
	let counter = 0;
	let sumEven = 0; // Четные
	let sumOdd = 0;
	if (mass.length == 0) {
		average = 0;
	} else {
		for (let i = 0; i < mass.length; i++) {
			if (mass[i] % 2 == 0) {
				sumEven += mass[i];
				counter++;
			} else sumOdd += mass[i];
		}
		average = sumEven / counter;
	}

	return average;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let arrFunc = func(...arrOfArr[i]);
		if (arrFunc > maxWorkerResult) {
			maxWorkerResult = arrFunc;
		}
	}
	return maxWorkerResult;
}


const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
