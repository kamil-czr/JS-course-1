var myArray = [];

myArray[0] = 25;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Kamil";
myCar.drive = function(){
    console.log("now driving first time");
};

myCar.drive();

var myCar2 = {
    
    maxSpeed: 70, 
    driver: "Kamil", 
    drive: function(speed, time){
        console.log("traveled distance is",speed * time);
    }
};

console.log("Max speed is", myCar2.maxSpeed);
myCar2.drive(50, 3);