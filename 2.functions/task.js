function getArrayParams(...arr) {
	let mass = [...arr];
	let min, max, avg, sum = 0;
	min = Infinity;
	max = -Infinity;
	for (let i = 0; i < mass.length; i++) {
		if (mass[i] < min) {
			min = mass[i];
		}

		if (mass[i] > max) {
			max = mass[i];
		}
		sum += mass[i];
	}

	avg = Number((sum / mass.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {

	if ([...arr].length == 0) return 0;
	else return Math.max(...[...arr]) - Math.min(...[...arr]);
}

function differenceEvenOddWorker(...arr) {
	let sumOdd = 0;
	let sumEven = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEven += arr[i];
		} else sumOdd += arr[i];
	}
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	let counter = 0;
	let sumEven = 0;

	if ([...arr].length == 0) return 0
	else {
		for (let i = 0; i < [...arr].length; i++) {
			if ([...arr][i] % 2 == 0) {
				sumEven += [...arr][i];
				counter++;
			}
		}
		return sumEven / counter;
	}
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