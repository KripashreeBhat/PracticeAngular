let checkSpeed = (speed) => {
    if (speed<=70) {
        return ("Good safe Driving");
    }
    else {
        let penalty = Math.floor((speed-70)/5);
        if(penalty  < 10){
            return ('Speed limit crossed by penalty points:' +penalty);
        }
        else {
            return ("License suspended");
        }
        
    }
    
}
let speed= +prompt("enter the speed limit: ", 0);
console.log(checkSpeed(speed));
