const ics = require('ics');
const { writeFileSync } = require('fs');
let moment = require("moment");
const readline = require('readline');

console.log("HELLO WORLD");

const event = {
  start: [2021, 08, 31, 6, 30],
  duration: { hours: 1, minutes: 30 },
  title: 'Bolder Boulder',
  description: 'Annual 10-kilometer run in Boulder, Colorado',
  location: 'Folsom Field, University of Colorado (finish line)',
  categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
  calName: 'Sport'
}
// 0: JOUR DE LA SEMAINE [L, MA, ME, J, V, S, D]
var commandArgs = process.argv.slice(2);

function getStart(date) {
  var returnValue = '';
  var today = new Date();
  console.log(moment().endOf('week').fromNow()); 
  switch (date[0]) {
    case 'L':
        break;
    case 'MA':
        break;
    case 'ME':
        break;
    case 'J':
        break;
    case 'V':
    break;
    case 'S':
            break;
    case 'S':
            break;
    default:
        console.log('Sorry, that is not something I know how to do.');
    }
}



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quelles jours d'entrainement ? [L, M, M, J, V, S, D]", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});

function createEvent() {
  ics.createEvent(event, (error, value) => {
    if (error) {
      console.log(error)
      return
    }
    console.log(value)
    writeFileSync(`${__dirname}/generated_ics/event.ics`, value)
  })
}

