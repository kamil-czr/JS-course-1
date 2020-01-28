/* var myPastDate = new Date(1985, 3, 16, 10, 39, 45);
var myFutureDate = new Date(2020, 0, 28, 1, 16, 39);

console.log(myPastDate);
console.log(myFutureDate); */

var birthday = new Date (1985, 0, 15, 11, 15, 25);
var birthday2 = new Date (1985, 0, 15, 11, 15, 25);

console.log(birthday.getTime());

if(birthday.getTime == birthday2.getTime){
    console.log("birthdays are the same");
} else {
    console.log("birthdays are different");
}