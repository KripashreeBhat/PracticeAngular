// print sum for sum(A)(B);

// function sum(a){
//      return function(b){
//         return a + b;
//      }
// }
// alert(sum(12)(21));

// filter through function

// in between

// function inBetween(a,b){
//     return function(x){
//         return x>=a && x<=b;
//     }
// };
    
//     let arr = [1, 2, 3, 4, 5, 6, 7];
//     alert( arr.filter(inBetween(3, 6)) );

// in array

function inArray(arr){
    return function(x){
        return arr.includes(x);
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
 alert( arr.filter(inArray([1,2,3])));