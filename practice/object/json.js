// TASK 1 : TURN THE OBJECT INTO JSON AND BACK
// let user ={
//     name:"john smith",
//     age: 35
// };

// let usr =JSON.parse(JSON.stringify(user));
// alert(usr);

// TASK 2 : EXCLUDE BACKREFRENCES

// let room ={
//     number:23

// };

// let meetup={
//     title : "conference",
//     occupiedBy:[{name:"john"},{name:"amar"}],
//     place : room
// };

// room.oocupiedBy = meetup;
// meetup.self= meetup;

// alert(JSON.stringify(meetup,function(key,value){
//    return (key != "" && value ==meetup )?undefined :value; 

// }));
