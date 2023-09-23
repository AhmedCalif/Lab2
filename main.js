const getDayOfTheWeek = require("./lab2").getDayOfTheWeek;
const makeCalendar = require("./lab2").makeCalendar;

const readline = require("readline-sync")

const year = readline.question("Enter a year:");
const month = readline.question("Enter a month:");
const date = readline.question("Enter a date:");


getDayOfTheWeek(year, month, date);   
makeCalendar();