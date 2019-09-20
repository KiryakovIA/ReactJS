console.log('Task 1');

function loop(times = 0, callback = null) {
	if (callback == null)
		return;
	for (let i = 0; i < times; i++) {
		callback(i);
	}
}

loop(10, (time) => {
	console.log(time);
})

console.log('Task 2');

function calculateArea(width, height) {
	return {
		area: width * height,
		figure: 'Прямоугольник',
		input: [width, height]
	};
}

console.log(calculateArea(20, 30));

console.log('Task 3');

class Human {
	constructor(name, age, dateOfBirth) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}

	displayInfo() {
		return `name: ${this.name}, age: ${this.age}, dateOfBirth: ${this.dateOfBirth}`;
	}
}

class Employee extends Human {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth);
		this.salary = salary;
		this.department = department;
	}

	displayInfo() {
		return super.displayInfo() + `, salary: ${this.salary}, department: ${this.department}`;
	}
}

class Developer extends Employee {
	constructor(name, age, dateOfBirth, salary, department, manager) {
		super(name, age, dateOfBirth, salary, department);
		this.manager = manager;
		manager.addDeveloper(this);
	}
}

class Manager extends Employee {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
		this.developers = [];
	}

	addDeveloper(developer) {
		this.developers.push(developer);
	}

	deleteDeveloper(developer) {
		const index = this.developers.indexOf(developer);
		if (index !== -1) this.developers.slice(index, 1);
	}
}

const manager = new Manager('Игорь', 33, '22.04.1985', 100000, 'СКБ');
const developer1 = new Developer('Андрей', 35, '20.05.1980', 50000, 'СКБ', manager);
const developer2 = new Developer('Виктор', 40, '28.10.1970', 60000, 'СКБ', manager);

console.log(manager.displayInfo());
console.log(developer1.displayInfo());
console.log(developer2.displayInfo());

console.log('Task 4');

function getXhr() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

const promises = [];
for (let i = 1; i <= 10; i++) {
	url = `https://jsonplaceholder.typicode.com/users/${i}`;
	promises.push(new Promise((resolve, reject) => {
		const xhr = getXhr();
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;

			if (xhr.status === 200) {
				resolve(xhr.responseText);
			} else {
				reject("Request error");
			}
		};

		xhr.open('GET', url, true);
		xhr.send();
	}));
}

Promise.all(promises).then(result => {
	console.log(result);
}).catch(error => {
	
});
