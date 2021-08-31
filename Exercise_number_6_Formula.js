// list of Formula 1 champions since the year 2000
const formula1Champions = [
	"Schumacher",
	"Schumacher",
	"Schumacher",
	"Schumacher",
	"Schumacher",
	"Alonso",
	"Alonso",
	"Räikkönen",
	"Hamilton",
	"Button",
	"Vettel",
	"Vettel",
	"Vettel",
	"Vettel",
	"Hamilton",
	"Hamilton",
	"Rosberg",
	"Hamilton",
	"Hamilton",
	"Hamilton",
	"Hamilton",
];
let winners = {};

function countWin(driver) {
	if (winners.hasOwnProperty(driver)) {
		winners[driver] += 1;
	} else winners[driver] === 1; // check if winner has a property of "driver" if yes add 1 if not  1
}

formula1Champions.forEach(countWin);
console.log(winners);
