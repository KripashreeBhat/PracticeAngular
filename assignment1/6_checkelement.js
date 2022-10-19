// 1
let arr =['john','smith','john','robert','gilbert','gilbert','gilbert'];
function element (arr){
const count = {};
for( let i = 0; i < arr.length; i++){
    const ele = arr[i];
    if(count[ele]){
        count[ele] += 1;
    }
    else{
        count[ele] = 1;
    }        
}
return count;
}
function includes (arr,item){
    let counter = 0;
    for(let ele of arr){
        if (ele === item)
         counter++;
        }
        return `${item} : ${counter}`;
    }
       
console.log(element(arr));
console.log(includes(arr,'kripa'));
      
    
    
            
    


    











// function includes (arr,item){
//     for(let ele of arr){
//         
//         if (ele === item)
//         return `element exist`;
//       
//     }
//     return false;
//     }

// let arr1 = [1,2,3,4,5,6];
// alert(includes(arr1,4));

// let arr2 = ['Arjun', 'Ram', 'John', 'Rocky'];
// alert(includes(arr2,"smith"));





// let size = +prompt( 'enter the size of an array');
// let ele = [];
// alert( "enter the elements");
// for(let i = 0; i <= size; i++ )
//    ele[i] = prompt('');
// let key = prompt('enter element to search');
// let include = () => {
//     for ( let i = 0; i < size; i++){
//         if( key === ele[i])
//              return `element exists at index ${i}`;
//         else 
//             return 'element not found';
//        }
//    }  
//    alert(include());
 
