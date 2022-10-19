let time = (hours, mins) => {
   let sum = Math.floor((hours*3600) + (mins*60));
   return sum;
}
let hr = +prompt ("enter the hour",0);
let min = +prompt ("enter the minutes",0);
alert(`total sec is: ${time(hr,min)}`);