// let studentsArray = [
//     { name: 'Suraj', year: 2019, ranking: 4 },
//     { name: 'Amit', year: 2019, ranking: 5 },
//     { name: 'Akash', year: 2018, ranking: 4 },
//     { name: 'Dinanath', year: 2019, ranking: 7 },
//     { name: 'Sagar', year: 2017, ranking: 3 },
// ].map(student => (student.ranking > 4 && student.year == 2019) ? student.name : undefined);
// let newArray = [];
// studentsArray = studentsArray.sort();
// for( let i = 0; i < studentsArray.length; i++){
//     if (studentsArray[i] != undefined)
//         newArray.push(studentsArray[i]);
// }
// alert('Highest rank holder are : ${newArray}`);


const studentsArray = [
        { name: 'Suraj', year: 2019, ranking: 4 },
        { name: 'Amit', year: 2019, ranking: 5 },
        { name: 'Akash', year: 2018, ranking: 4 },
        { name: 'Dinanath', year: 2019, ranking: 7 },
        { name: 'Sagar', year: 2017, ranking: 3 },

]

alert(studentsArray
        .filter(student => student.year === 2019 && student.ranking > 4)
        .sort((rank1,rank2) => rank1.ranking - rank2.ranking)
        .map( student => student.name)
);
