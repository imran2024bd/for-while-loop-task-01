//*********************************************************** */

// ----for ---Loop _ Incremental
// number of 1 to 5 by for loop

// for (let num = 0; num <= 5; num++) {
//     console.log(num);
    
// }


//*********************************************************** */
// number of 1 to 10 by for loop

// for ( let i = 1; i <=10 ; i++){
//     console.log(i);
// }


//*********************************************************** */

// for even number  print

// for ( let i = 0 ; i<= 10 ; i = i + 2){
//     console.log(i);
// }

//*********************************************************** */


// for even odd number  print

// for ( let i = 0 ; i<= 10 ; i = i + 1){
//     console.log(i);
// }

// for  odd number  print

// for ( let i = 1 ; i <= 10 ; i = i + 2){
//     console.log(i);
// }

//*********************************************************** */

// for (let i = 0; i < 5; i++) {
//     console.log('print next-');
    
// }

//*********************************************************** */

// summation of 11 to 20 number by for loop
// let sum = 0;
// for (let i = 11; i <= 20; i++) {
//     sum = sum + i;
//     // console.log(i, sum);
    
// }

// console.log(sum);


//*********************************************************** */

// summation of 1 to 100 number by for loop
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
//     // sum = (n(n+1))/2
// }
// console.log('summation of 1 to 100 number :' , sum);


//*********************************************************** */

// summation of 1 to 10 _odd_number by for loop

// let sum = 0;
// for (let i = 1; i <= 10; i = i + 2 ) {
//     sum = sum + i;
    
// }
// console.log('summation of 1 to 10 _odd_number:' , sum);

//*********************************************************** */

// summation of 1 to 10 _even_number by for loop

// let sum = 0;
// for (let i = 0; i <= 10; i = i + 2 ) {
//     sum = sum + i;
    
// }
// console.log('summation of 1 to 10 _even_number:' , sum);

//*********************************************************** */


// summation of 200 to 250 number by for loop
// let sum = 0;
// for (let i = 200; i <= 250; i++) {
//     sum = sum + i;
//     // sum = (n(n+1))/2
// }
// console.log('summation of 200 to 250 number :' , sum);


//*********************************************************** */

// decremental by for loop
//  for (let i = 10; i >= 0; i--) {
//     console.log(i);
    
//  }


//*********************************************************** */


//  decremental 20 to 11 by for loop

// for (let i = 20; i >= 11 ; i--) {
//    console.log(i);
  
// }


//*********************************************************** */

// Different ways to use loop

// for odd number by using % ( modulus)
// for (let i = 0; i < 20; i++) {
//    if (i%2 ===1) {
//       console.log(i);
//    }
//   }


// alternative
// for (let i = 0; i < 20; i++) {
//    if (i%2 !==0 ) {
//       console.log(i);
//    }
   
// }


//*********************************************************** */

// Give me The list numbers between 1  to 30 divisible by 5

// for (let i = 1; i <= 30; i++) {
//    if ( i % 5 === 0) {
//       console.log(i);
//    }
   
// }


//*********************************************************** */

// Give me The list numbers between 1  to 30 divisible by 3

// for (let i = 1; i <= 30; i++) {
//    if ( i % 3 === 0 ) {
//       console.log(i);
//    }
   
// }


/*********************************************************** */

// Give me The list numbers between 1  to 30 divisible by 3 or 5
// for (let i = 1; i <= 30; i++) {
//    if ( i % 3 === 0 || i % 5 ===0) {
//       console.log(i);
//    }
   
// }
/*********************************************************** */

// Give me The list numbers between 1  to 30 divisible by 3 and 5
// for (let i = 1; i <= 30; i++) {
//    if ( i % 3 === 0 && i % 5 ===0) {
//       console.log(i);
//    }
   
// }


/*********************************************************** */

// Give me The list numbers between 1  to 100 divisible by 3 and 5
// for (let i = 1; i <= 100; i++) {
//    if ( i % 3 === 0 && i % 5 ===0) {
//       console.log(i);
//    }
// }




// Give me The sum of numbers between 1  to 30 that are divisible by 3  .
// let total = 0;
// for (let i = 1; i <= 30; i++) {
//    if ( i % 3 === 0 ) {
//       console.log(i);
//       total = total + i;
//    }
   
// }
// console.log('The sum of numbers:' , total);


/*********************************************************** */


// When To Use A Break And Continue

for (let i = 0; i < 150; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
    
}
console.log('here loops end');