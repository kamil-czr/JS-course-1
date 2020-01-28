/*
var myCar = {
    
    maxSpeed: 70, 
    driver: "Kamil", 
    drive: function(speed, time){
        console.log("traveled distance is",speed * time);
    },

    logDriver: function(){
        console.log("Driver name is " + this.driver);
    }
}; 
*/


var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed
    this.driver = driver
    this.drive = function(speed, time){
        console.log("traveled distance is",speed * time);
    };
    this.logDriver = function(){
        console.log("Driver name is " + this.driver);
    };
    this.logMaxSpeed = function(){
        console.log("Max speed is " + this.maxSpeed);
    };

}

var myCar = new Car(70, "Darek");
var myCar2 = new Car(100, "Wojtek");
var myCar3 = new Car(120, "Piotr");
var myCar4 = new Car(90, "Marek");
var myCar5 = new Car(110, "Dawid");

myCar3.logMaxSpeed();
myCar4.drive(30,5);
myCar3.logDriver();
