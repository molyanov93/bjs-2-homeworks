// Функция  - parseCount
function parseCount(value) {
	if (isNaN(value)) {
		throw new Error("Невалидное значение");
	} else {
		return Number.parseFloat(value);
	}
}

// Функция  - validateCount
function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

// Класс - Triangle
class Triangle {

	constructor(a, b, c) {
		if ((a + b) < c || (b + c) < a || (a + c) < b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		if ((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b) {
			throw new Error("Ошибка! Треугольник не существует");
		} else {
			let perimeter = this.a + this.b + this.c;
			return Number(perimeter);
		}

	};

	get area() {
		if ((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b) {
			throw new Error("Ошибка! Треугольник не существует");
		} else {
			let p = (this.a + this.b + this.c) * 0.5;
			let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
			let sRound = s.toFixed(3);
			return Number(sRound);
		}
	}
};


// Новый класс
function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		console.log(error);
		return {
			get area() {
				return "Ошибка! Треугольник не существует"
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}