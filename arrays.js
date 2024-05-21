// <!-- alert ko tub use kertai hai jub koi user taik kaam karin y galt kaam kerin -->
//         1. Write a JavaScript function to check whether an `input` is an array or not.
// یہ جانچنے کے لئے جاوا اسکرپٹ فنکشن لکھیں کہ آیا 'ان پٹ' ایک سرے ہے یا نہیں۔c

// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true)

// let array1=function(input){
//     if(toString.call(input)==="[object Array]"){
//         return(true)
//     }
//     else{
//         return(false)
//     }
// }
// console.log(array1([1, 2, 4, 0]))
// console.log(array1("ghfgh"))

// 2. Write a JavaScript function to clone an array.
// 2. سرے کو کلون کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

//( y aik logical function use kya gya hai )

// clon array k aik function hai jis main array kai all method use kertai hai

// let array_Clone=function(array1){
// return(array1.slice(0))
// }
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));



// (// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// 3. سرے کا پہلا عنصر حاصل کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔ پیرامیٹر 'این' پاس کرنے سے سرے کے پہلے 'این' عناصر واپس آجائیں گے۔

// // Test Data :
// // console.log(first([7, 9, 0, -2]));
// // console.log(first([],3));
// // console.log(first([7, 9, 0, -2],3));
// // console.log(first([7, 9, 0, -2],6));
// // console.log(first([7, 9, 0, -2],-3));
// // Expected Output :
// // 7
// // []
// // [7, 9, 0]
// // [7, 9, 0, -2]
// // [])

//  function first(array, n) {
//             let newArray = [];
//             if (n === undefined){  // mtlb ager array ki length di huwi hai lakin array ki value nhi hai tu 
//                                 return array[0];
//             }

//         if (array.length === 0) {  // ager array ki length aur value same ho tu
//             return [];
//         }

//         if(n < 0) {  // mtlb ager array ki length sa value kum di huwi hai tu 
//             return [];
//         }

//         if (array.length <= n) {  // // mtlb ager array ki length sa value zyad di huwi hu tu
//             return array;
//         }
//            else{ for (let i = 0; i < n; i++) {
//                 newArray.push(array[i]);
//             }

//             return newArray;
//         }
//         }
//         console.log(first([7, 9, 0, -2]));       // Output: 7
//         console.log(first([], 3));               // Output: []
//         console.log(first([7, 9, 0, -2], 3));    // Output: [7, 9, 0]
//         console.log(first([7, 9, 0, -2], 6));    // Output: [7, 9, 0, -2]
//         console.log(first([7, 9, 0, -2], -3));   // Output: []



// (4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// 4. سرے کا آخری عنصر حاصل کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔ پیرامیٹر 'این' کو پاس کرنے سے سرے کے آخری 'این' عناصر واپس آجائیں گے۔

// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2])

//     function last(array, n) {
//     let newArray = [];
//     if (n === undefined) {  // mtlb ager array ki length di huwi hai lakin array ki value nhi hai tu 
//         return array[3];
//     }



//     if (array.length <= n) {  // // mtlb ager array ki length sa value zyad di huwi hu tu
//         return array;
//     }
//     return array.slice(-n)
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));


// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// 5. مندرجہ ذیل صف کے تمام عناصر کو ایک تار میں شامل کرنے کے لئے ایک سادہ جاوا اسکرپٹ پروگرام لکھیں۔

// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// let num = ["red", "green", "white", "black"];
// let c = num.toString('');
// let c1 = num.toString('');
// let c2 = num.join('+');
// console.log(c);
// console.log(c1);
// console.log(c2);

// console.log(num.toString(''))


// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
// 6. ایک جاوا اسکرپٹ پروگرام لکھیں جو ایک نمبر کو ان پٹ کے طور پر قبول کرتا ہے اور ہر برابر نمبر کے درمیان ڈیش (-) داخل کرتا ہے۔ مثال کے طور پر اگر آپ 025468 قبول کرتے ہیں تو آؤٹ پٹ 0-254-6-8 ہونا چاہئے.

//  let a=[0,254,6,8];
//  console.log(a.join("-")) 

// let a1=prompt();  
// // ager ap prompt use nhi kernh chatai tu ap prompt ki jagh per number use ker sktai hai
// // let a1=[245667782]
// let b1=a1.toString();
// let b=[b1[0]];
// for(let i=1; i<b1.length; i++ ){
//     if(b1[i-1]%2===0 && b1[i]%2===0){
//          b.push("-" ,b1[0])
//     }
//     else{
//      b.push(b1[i])
//     }
// }
// console.log(b.join(""))


// 7. Write a JavaScript program to sort the items of an array.
// 7. ایک سرے کے آئٹمز کو ترتیب دینے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// let a =[-3,8,7,6,5,-4,3,2,1]
// function compare(a, b) {
//     return a - b;
// }
// let a1=a.sort(compare)
// console.log(a1)



// 8. Write a JavaScript program to find the most frequent item in an array.
// 8. صف میں سب سے زیادہ کثرت سے آئٹم تلاش کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// let arr1 = [3, 'a', 'a', 'a', 2,3, 'a', 3, 'a', 2, 4, 9, 3]
// let c1 = 1;
// let b = 0;
// let item;
// for (let i = 0; i < arr1.length; i++) {
//     for (let a = i; a < arr1.length; a++) {
//         if (arr1[i] == arr1[a])
//             b++;
//         if (c1 < b){
//             c1 = b;
//         item = arr1[i];
//         }
//     }
//     b = 0;
// }
// console.log(item + " ( " + c1 + " times ) ");


// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// 9. ایک جاوا اسکرپٹ پروگرام لکھیں جو ایک سٹرنگ کو ان پٹ کے طور پر قبول کرتا ہے اور ہر کردار کے معاملے کو تبدیل کرتا ہے۔ مثال کے طور پر اگر آپ 'دی کوئیک براؤن فاکس' ان پٹ کرتے ہیں تو آؤٹ پٹ 'ٹی ایچ ای کیو آئی سی برون ایف او ایکس' ہونا چاہئے۔


// Declare and initialize the input string
var str = 'The Quick Brown Fox';

// Define constants for uppercase and lowercase letters
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// Initialize an array to store the result
var result = [];

// Iterate through each character in the input string
for (var x = 0; x < str.length; x++) {
  // Check if the current character is an uppercase letter
  if (UPPER.indexOf(str[x]) !== -1) {
    // Convert the uppercase letter to lowercase and add it to the result array
    result.push(str[x].toLowerCase());
  }
  // Check if the current character is a lowercase letter
  else if (LOWER.indexOf(str[x]) !== -1) {
    // Convert the lowercase letter to uppercase and add it to the result array
    result.push(str[x].toUpperCase());
  }
  // If the current character is neither uppercase nor lowercase, add it to the result array as is
  else {
    result.push(str[x]);
  }
}

// Output the joined result array as a string
console.log(result.join(''));
