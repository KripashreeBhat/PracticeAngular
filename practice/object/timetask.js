// TASK1 TO CREATE A DATE
// let date = new Date(2012,01,20,3,12);
// alert(date);

// TASK 2 : TO SHOW A WEEKDAY

// function getWeekDay(date){
//     let days =['SU','MO','TU','WE','THU','FR','SA'];
//     return days[date.getDay()];


// }
// let date=new Date(2014,0,5);
// alert(getWeekDay(date));

// TASK 3:EUROPEAN WEEKDAY

// function getLocalDay(date){
//     day= date.getDay();
//     if(day==0){
//         day=7;
//     }
// return day;
// }

// let date = new Date(2012,0,3);
// alert(getLocalDay(date));


// TASK 4: WHICH DAY OF MONTH WAS MANY DAYS AGO

// let getDateAgo=(date, days)=>{
//     date.setDate(date.getDate()-days);
//     return date.getDate();

// }
// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// TASK 5 : LAST DAY OF MONTH

// let getLastDayOfMonth=(year,month)=>{
//     let date= new Date(year, month+1, 0);
//     return date.getDate();
// }
// alert(getLastDayOfMonth(2012, 1));

// TASK 6: HOW MANY SECONDS HAVE PASSED TODAY
// CASE  1
// let getSecondsToday=()=>{

// let d=new Date();
// return d.getHours()*3600+d.getMinutes()*60+d.getSeconds();

// }
// alert(getSecondsToday());

// CASE 2
// let getSecondsToday=()=>{
//     let now=new Date();

//     let today=new Date (now.getFullYear(),now.getMonth(),now.getDate());

//     let diff =now-today;
//     return Math.round(diff/1000);


// }
// alert(getSecondsToday());

// TASK 7 HOW MANY SECONDS TOMORROW

// let getSecondsTomorrow=()=>{
//     let date =new Date();

//     let tomorrow= new Date(date.getFullYear(),date.getMonth(),date.getDate()+1);

//     let diff= tomorrow-date;
//     return Math.round(diff/1000);


// }
// alert(getSecondsTomorrow());


// TASK 8 FORMAT THE RELATIVE DATA

let formatDate=(date)=>{

    let dayOfMonth= date.getDate();
    let month=date.getMonth()+1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes= date.getMinutes();
    let diffMs= new Date() - date;
    let diffSec = Math.round(diffMs/1000);
    let diffMin= diffSec/60;
    diffHour = diffMin/60;


    year = year.toString().slice(-2);
    month =month < 10? '0' +month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' +dayOfMonth :dayOfMonth;
    hour = hour < 10 ? '0' + hour :hour;
    minutes =minutes < 10 ? '0' + minutes : minutes;


    if(diffSec < 1){
        return 'right now';

    }
    else if(diffMin<1) {
        return `${diffSec} sec.ago`;

    }
    else if (diffHour < 1) {
        return `${diffMin} min. ago`
      } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
      }
    }
    alert( formatDate(new Date(new Date - 1)) ); // "right now"

    alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
    
    alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"





