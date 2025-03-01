// dekh bhai ye toh constructor function hai thik hai 
function robot (name, batteryLvel){
    this.name = name; // ye toh name ko point kr rha hai using this keyword
    this.batterylevel = batteryLvel;  // similar like the above 
}

// now this is the prototype functio which is used to charge the battery of the robot
robot.prototype.charge = function(){
    // if the battery level is greater than or equal to 80 then it will return 100
    if(this.batterylevel >= 80){
        return this.batterylevel = 100;
    }
    // if the battery level is less than 80 then it will increase the battery level by 20
    else{
        return this.batterylevel += 20;
    }
}

// creating the object of the robot for the accessing the properties and methods
const robot1 = new robot('robo1', 50);

// printing the battery level of the robot
console.log(robot1.batterylevel);
console.log(robot1.charge())