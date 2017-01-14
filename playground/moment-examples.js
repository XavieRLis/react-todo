const moment = require("moment");

console.log(moment().format());

let now = moment();

console.log('Current timestamp: ', now.unix());

let timestamp = 1484250728;

let currentMoment = moment.unix(timestamp);

console.log(currentMoment.format('L'));

// January 3rd, 2016 @ 12:13 AM
console.log(currentMoment.format('MMMM Do, Y @ h:mm A'));