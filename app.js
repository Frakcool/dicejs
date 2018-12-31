//Inspired on Roll Dice by Jacob Schaefer - https://codepen.io/Pyremell/pen/eZGGXX/

let pointsMap = new Map()
pointsMap.set(1, 'first')
pointsMap.set(3, 'third')
pointsMap.set(4, 'fourth')
pointsMap.set(5, 'fifth')
pointsMap.set(6, 'sixth')
pointsMap.set(7, 'seventh')
pointsMap.set(9, 'ninth')

const points = document.getElementsByClassName('point');

const button = document.getElementById('button');

//Our dice object
let dice = {
	numberOfSides: 6,
	sides: [{
		//Empty object to prevent "undefined", not sure why it happens only for the first element in array.
	}, {
		id: 1,
		points: [5]
	}, {
		id: 2,
		points: [3, 7]
	}, {
		id: 3,
		points: [3, 5, 7]
	}, {
		id: 4,
		points: [1, 3, 7, 9]
	}, {
		id: 5,
		points: [1, 3, 5, 7, 9]
	}, {
		id: 6,
		points: [1, 3, 4, 6, 7, 9]
	}],
	getRandom() {
		let number = Math.floor(Math.random() * this.numberOfSides) + 1;
    	return number;
	},
	showPoints(side) {
		side.points.forEach(function(point) {
			let pointToDraw = document.getElementById(pointsMap.get(point))
			pointToDraw.style.visibility = 'visible'
		})
	},
	printNumber(random) {
		console.log(random)
		for (let i = 1; i <= this.sides.length; i++) {
			let id = this.sides[i].id
			if (random == id) {
				this.showPoints(this.sides[i])
				break;
			}
		}
	},
	clear() {
		for (let i = 0; i < points.length; i++) {
			points[i].style.visibility = 'hidden';
		}
	}
}

button.onclick = () => {
	let randomNumber = dice.getRandom();
	dice.clear();
	dice.printNumber(randomNumber);
}

