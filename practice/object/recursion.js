// TASK 1 SUM OF ALL GIVEN NUMBERS
// CASE  1: WITH RECURSION
// let sumTo=(n)=>{
//     if (n==0){
//         return 0;
//     }
//     else
//      return n+sumTo(n-1);
// }
// alert(sumTo(4));

// CASE 2 : USING FOR 

// let sumTo=(n)=>{
//     let sum=0;
//     for (let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// alert(sumTo(4));

// USING  ARITHMETIC PROGRESSION

// function sumTo(n){
//     return n * (n+1)/2;

// }
// alert(sumTo(4));

// 


// TASK 2 :CALCULATE FACTORIIAL

// function fact(n){
//     if (n==0){
//         return 1; 
//     }
    
//     else
//     return n * fact(n-1);

// }
// alert(fact(4));

// return (n!=1)? n * fact(n-1) : 1 (alternate condition)

// TASK 3: FIBONACCI SERIES
// CASE 1: WITH RECURSION

// let  fib=(n)=>{
//     if(n<=1){
//         return n;
//     } 
//     else 
//     return fib(n-1)+fib(n-2);
// // return (n<=1 ? n: fib(n-1)+fib(n-2));

// }

// alert(fib(3));

// CASE 2: WITHOUT RECURSION

// let fib=(n)=>{
//     let a=1;
//     let b=1;
//     for ( let i=3;i<=n;i++){
//     let c= a+b;
//     a=b;
//     b=c;

// }
// return b;
// }
// alert(fib(3));

// TASK 3 : OUTPUT A SINGLE-LINKED LIST
// CASE 1 : WITH RECURSION
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

//   function printList(list){
//     alert(list.value);
  
//   if (list.next){
//     printList(list.next);
//   }
//   }
//   printList(list);

// CASE 2 : WITHOUT RECURSION
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
let printList=(list)=>{
    let temp= list;

    while(temp){
        alert(temp.value);
        temp=temp.next;
    }
}
printList(list);