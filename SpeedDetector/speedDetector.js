//Input speed
let speed = prompt("enter speed: ")

//Function that calculates merit point 
 
function speedMessage(driverSpeed){
    // setting the speed limit of 
    let speedLimit = 70 ;
    
    //setting the rate of demerit points
    let oneDemeritPoint =5;

    // Calculating demerit points
    if(driverSpeed>speedLimit){

        //Calculating speed above the limit
        speedDifference = driverSpeed - speedLimit
        //calculating the demerit points
        demeritPoints= speedDifference / oneDemeritPoint
    }
    else {
        demeritPoints= 0
    }

    //output according to speed
    if(demeritPoints>0.9 && demeritPoints<=11){
        message =`Points: ${demeritPoints} `;
    }

    else if(demeritPoints>11){
        message = "Lisence suspended"
    }

    else{
        message= `Ok`
    }

    return message
}

//calling the function
speedMessage(speed)


