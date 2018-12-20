//Inspired on Roll Dice by Jacob Schaefer - https://codepen.io/Pyremell/pen/eZGGXX/

//Get each point from dice
const firstPoint = document.getElementById('first');
const secondPoint = document.getElementById('second');
const thirdPoint = document.getElementById('third');
const fourthPoint = document.getElementById('fourth');
const fifthPoint = document.getElementById('fifth');
const sixthPoint = document.getElementById('sixth');
const seventhPoint = document.getElementById('seventh');
const eighthPoint = document.getElementById('eighth');
const ninthPoint = document.getElementById('ninth');
const points = document.getElementsByClassName('point');

const button = document.getElementById('button');

//Our dice object
let dice = {
	sides: 6,
	getRandom: function () {
		let number = Math.floor(Math.random() * this.sides) + 1;
    	return number;
	},
	showPoint: function (point) {
		point.style.visibility = 'visible';
	},
	printNumber: function (random) {
		if (random == 1) { 
			this.showPoint(fifthPoint);

		} else if (random == 2) {
			this.showPoint(thirdPoint);
			this.showPoint(seventhPoint);

		} else if (random == 3) {
			this.showPoint(thirdPoint);
			this.showPoint(fifthPoint);
			this.showPoint(seventhPoint);

		} else if (random == 4) {
			this.showPoint(firstPoint);
			this.showPoint(thirdPoint);
			this.showPoint(seventhPoint);
			this.showPoint(ninthPoint);

		} else if (random == 5) {
			this.showPoint(firstPoint);
			this.showPoint(thirdPoint);
			this.showPoint(fifthPoint);
			this.showPoint(seventhPoint);
			this.showPoint(ninthPoint);

		} else if (random == 6) {
			this.showPoint(firstPoint);
			this.showPoint(thirdPoint);
			this.showPoint(fourthPoint);
			this.showPoint(sixthPoint);
			this.showPoint(seventhPoint);
			this.showPoint(ninthPoint);
		}
	},
	clear: function () {
		for (let i = 0; i < points.length; i++) {
			points[i].style.visibility = 'hidden';
		}
	}

}

button.onclick = function () {
	let randomNumber = dice.getRandom();
	dice.clear();
	dice.printNumber(randomNumber);
}

