// 1. Write a JavaScript function to check whether an `input` is an array or not.
// یہ جانچنے کے لئے جاوا اسکرپٹ فنکشن لکھیں کہ آیا 'ان پٹ' ایک سرے ہے یا نہیں۔c

// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// Function to check if the input is an array
var is_array = function(input) {
    // Using toString method to get the class of the input and checking if it is "[object Array]"
    if (toString.call(input) === "[object Array]")
      // Return true if the input is an array
      return true;
    // Return false if the input is not an array
    return false;   
  };
  // Testing the function with a string
  console.log(is_array("hello every one"));
  
  // Testing the function with an array
  console.log(is_array([1, 2, 4, 0]));




//   2. Write a JavaScript function to clone an array.
// 2. سرے کو کلون کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

//   Test Data :
//   console.log(array_Clone([1, 2, 4, 0]));
//   console.log(array_Clone([1, 2, [4, 0]]));
//   [1, 2, 4, 0]
//   [1, 2, [4, 0]]

  // Function to get the first n elements of an array
var first = function(array, n) {
    // Check if the input array is null, return undefined if true
    if (array == null)
      return void 0;
  
    // Check if the value of n is null, return the first element of the array if true
    if (n == null)
      return array[0];
  
    // Check if the value of n is negative, return an empty array if true
    if (n < 0)
      return [];
  
    // Use the slice method to get the first n elements of the array
    return array.slice(0, n);
  };
  // Testing the function with various cases
  console.log(first([7, 9, 0, -2]));
  console.log(first([], 3));
  console.log(first([7, 9, 0, -2], 3));
  console.log(first([7, 9, 0, -2], 6));
  console.log(first([7, 9, 0, -2], -3));


//   3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// 3. سرے کا پہلا عنصر حاصل کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔ پیرامیٹر 'این' پاس کرنے سے سرے کے پہلے 'این' عناصر واپس آجائیں گے۔

//   Test Data :
//   console.log(first([7, 9, 0, -2]));
//   console.log(first([],3));
//   console.log(first([7, 9, 0, -2],3));
//   console.log(first([7, 9, 0, -2],6));
//   console.log(first([7, 9, 0, -2],-3));
//   Expected Output :
//   7
//   []
//   [7, 9, 0]
//   [7, 9, 0, -2]
//   []

// Function to get the first n elements of an array
var first = function(array, n) {
    // Check if the input array is null, return undefined if true
    if (array == null)
      return void 0;
  
    // Check if the value of n is null, return the first element of the array if true
    if (n == null)
      return array[0];
  
    // Check if the value of n is negative, return an empty array if true
    if (n < 0)
      return [];
  
    // Use the slice method to get the first n elements of the array
    return array.slice(0, n);
  };
  
  // Testing the function with various cases
  console.log(first([7, 9, 0, -2]));
  console.log(first([], 3));
  console.log(first([7, 9, 0, -2], 3));
  console.log(first([7, 9, 0, -2], 6));
  console.log(first([7, 9, 0, -2], -3));

  
//   4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// 4. سرے کا آخری عنصر حاصل کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔ پیرامیٹر 'این' کو پاس کرنے سے سرے کے آخری 'این' عناصر واپس آجائیں گے۔

//   Test Data :
//   console.log(last([7, 9, 0, -2]));
//   console.log(last([7, 9, 0, -2],3));
//   console.log(last([7, 9, 0, -2],6));
//   Expected Output :
//   -2
//   [9, 0, -2]
//   [7, 9, 0, -2]


// Function to get the last n elements of an array
var last = function(array, n) {
    // Check if the input array is null, return undefined if true
    if (array == null) 
      return void 0;
  
    // Check if the value of n is null, return the last element of the array if true
    if (n == null) 
      return array[array.length - 1];
  
    // Use the slice method to get the last n elements of the array
    // Math.max is used to ensure the starting index is not negative
    return array.slice(Math.max(array.length - n, 0));
  };
  
  // Testing the function with various cases
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2], 3));
  console.log(last([7, 9, 0, -2], 6));



//   5. Write a simple JavaScript program to join all elements of the following array into a string.
// 5. مندرجہ ذیل صف کے تمام عناصر کو ایک تار میں شامل کرنے کے لئے ایک سادہ جاوا اسکرپٹ پروگرام لکھیں۔

//   Sample array : myColor = ["Red", "Green", "White", "Black"];
//   Expected Output :
//   "Red,Green,White,Black"
//   "Red,Green,White,Black"
//   "Red+Green+White+Black"

// Declaration and initialization of an array
myColor = ["Red", "Green", "White", "Black"];

// Using the toString method to convert the array to a string
console.log(myColor.toString());

// Using the default join method to concatenate array elements into a string separated by commas
console.log(myColor.join());

// Using the join method with a custom separator ('+') to concatenate array elements into a string
console.log(myColor.join('+'));



// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8
// 6. ایک جاوا اسکرپٹ پروگرام لکھیں جو ایک نمبر کو ان پٹ کے طور پر قبول کرتا ہے اور ہر برابر نمبر کے درمیان ڈیش (-) داخل کرتا ہے۔ مثال کے طور پر اگر آپ 025468 قبول کرتے ہیں تو آؤٹ پٹ 0-254-6-8 ہونا چاہئے.

// Prompt the user for input and store it in the 'num' variable
var num = window.prompt();

// Convert the number to a string and store it in the 'str' variable
var str = num.toString();

// Initialize an array 'result' with the first character of the string
var result = [str[0]];

// Iterate through the characters of the string starting from index 1
for (var x = 1; x < str.length; x++) {
  // Check if the previous and current characters are both even digits
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    // If both are even, push a '-' and the current character to the 'result' array
    result.push('-', str[x]);
  } else {
    // If not both even, push the current character to the 'result' array
    result.push(str[x]);
  }
}

// Output the joined 'result' array as a string
console.log(result.join(''));


// 7. Write a JavaScript program to sort the items of an array.
// 7. ایک سرے کے آئٹمز کو ترتیب دینے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// Declare and initialize the original array
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// Declare an empty array to store the sorted result
var arr2 = [];

// Initialize variables to track the minimum, maximum, and position in the original array
var min = arr1[0];
var pos;
var max = arr1[0];

// Find the maximum value in the original array
for (i = 0; i < arr1.length; i++) {
    if (max < arr1[i]) max = arr1[i];
}

// Selection sort algorithm: Iterate over the original array
for (var i = 0; i < arr1.length; i++) {
    // Iterate over the original array to find the minimum element
    for (var j = 0; j < arr1.length; j++) {
        // Check if the element is not marked as processed (not equal to "x")
        if (arr1[j] != "x") {
            // Find the minimum element and its position in the original array
            if (min > arr1[j]) {
                min = arr1[j];
                pos = j;
            }
        }
    }
    // Store the minimum element in the sorted array
    arr2[i] = min;

    // Mark the minimum element as processed by replacing it with "x" in the original array
    arr1[pos] = "x";

    // Reset min to the maximum value for the next iteration
    min = max;
}

// Output the sorted array
console.log(arr2);


// 8. Write a JavaScript program to find the most frequent item in an array.
// 8. صف میں سب سے زیادہ کثرت سے آئٹم تلاش کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// Declare and initialize the original array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Initialize variables to track the most frequent item, its frequency, and the current item's frequency
var mf = 1;
var m = 0;
var item;

// Iterate through the array to find the most frequent item
for (var i = 0; i < arr1.length; i++) {
    // Nested loop to compare the current item with others in the array
    for (var j = i; j < arr1.length; j++) {
        // Check if the current item matches with another item in the array
        if (arr1[i] == arr1[j])
            m++;
        // Update the most frequent item and its frequency if the current item's frequency is higher
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    // Reset the current item's frequency for the next iteration
    m = 0;
}

// Output the most frequent item and its frequency
console.log(item + " ( " + mf + " times ) ");


// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// 9. ایک جاوا اسکرپٹ پروگرام لکھیں جو ایک سٹرنگ کو ان پٹ کے طور پر قبول کرتا ہے اور ہر کردار کے معاملے کو تبدیل کرتا ہے۔ مثال کے طور پر اگر آپ 'دی کوئیک براؤن فاکس' ان پٹ کرتے ہیں تو آؤٹ پٹ 'ٹی ایچ ای کیو آئی سی برون ایف او ایکس' ہونا چاہئے۔

// Declare and initialize the input string
var str = 'c';

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


// 10. Write a JavaScript program that prints the elements of the following array.
// 10. ایک جاوا اسکرپٹ پروگرام لکھیں جو مندرجہ ذیل صف کے عناصر کو پرنٹ کرتا ہے۔

// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

// Declare and initialize a sample 2-D array
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// Iterate through each row in the 2-D array
for (var i in a) {
   // Output the current row index
   console.log("row " + i);
   
   // Iterate through each element in the current row
   for (var j in a[i]) {
      // Output the current element value
      console.log(" " + a[i][j]);
   }
}

// 11. Write a JavaScript program to find the sum of squares of a numerical vector.
// 11. عددی ویکٹر کے مربعوں کا مجموعہ تلاش کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Function to calculate the sum of squares of elements in an array
function sum_sq(array) {
    var sum = 0, // Initialize a variable to store the sum of squares
        i = array.length; // Initialize a variable with the length of the array
  
    // Iterate through the array in reverse order
    while (i--)
      // Add the square of the current element to the sum
      sum += Math.pow(array[i], 2);
  
    // Return the calculated sum of squares
    return sum;
  }
  
  // Output the result of the function with a sample array
  console.log(sum_sq([0, 1, 2, 3, 4]));



  // 12. Write a JavaScript program to compute the sum and product of an array of integers.
  // 12. مکمل اعداد کی ایک صف کے مجموعے اور مصنوعات کا حساب لگانے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

  // Declare and initialize an array of numbers
var array = [1, 2, 3, 4, 5, 6];

// Initialize variables for sum (s) and product (p)
var s = 0;
var p = 1;

// Iterate through the array using a for loop
for (var i = 0; i < array.length; i += 1) {
  // Add the current element to the sum
  s += array[i];

  // Multiply the current element to the product
  p *= array[i];
}

// Output the calculated sum and product
console.log('Sum : ' + s + ' Product :  ' + p); 
// Declare and initialize an array of numbers
var array = [1, 2, 3, 4, 5, 6];

// Initialize variables for sum (s) and product (p)
var s = 0;
var p = 1;

// Iterate through the array using a for loop
for (var i = 0; i < array.length; i += 1) {
  // Add the current element to the sum
  s += array[i];

  // Multiply the current element to the product
  p *= array[i];
}

// Output the calculated sum and product
console.log('Sum : ' + s + ' Product :  ' + p); 


// 13. Write a JavaScript program to add items to a blank array and display them.
// 13. اشیاء کو خالی سرے میں شامل کرنے اور انہیں ظاہر کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Sample Screen :
// add elements in an blank array
// (html Code
//   <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
// <title>JS Bin</title>
// <style>
// body {padding-top:50px} 
// </style> 
// </head>
// <body>
// <input type="text" id="text1"></input>
// <input type="button" id="button1" value="Add" onclick="add_element_to_array();"></input>
// <input type="button" id="button2" value="Display" onclick="display_array();"></input>
// <div id="Result"></div> 
// </body>
// </html>
//   )

// Initialize a variable 'x' with 0
var x = 0;

// Initialize an empty array
var array = Array();

// Function to add an element to the array
function add_element_to_array() {
  // Get the value from the input with id "text1" and assign it to the array at index 'x'
  array[x] = document.getElementById("text1").value;
  
  // Display an alert indicating the added element and its index
  alert("Element: " + array[x] + " Added at index " + x);
  
  // Increment the index variable 'x'
  x++;
  
  // Clear the value of the input with id "text1"
  document.getElementById("text1").value = "";
}

// Function to display the elements of the array
function display_array() {
  var e = "<hr/>"; // Initialize a string with a horizontal line

  // Iterate through the array and create a string representation of each element
  for (var y = 0; y < array.length; y++) {
    e += "Element " + y + " = " + array[y] + "<br/>";
  }
  
  // Set the innerHTML of the element with id "Result" to the generated string
  document.getElementById("Result").innerHTML = e;
}


// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// 14. ایک سرے سے نقلی آئٹمز کو ہٹانے کے لئے جاوا اسکرپٹ پروگرام لکھیں (کیس کی حساسیت کو نظر انداز کریں)۔

// Function to remove duplicate elements from an array
function removeDuplicates(num) {
  // Initialize variables: x for iteration, len for array length, out for the result array, obj for object to track unique elements
  var x,
      len = num.length,
      out = [],
      obj = {};

  // Iterate through the input array and add each element to the object with a value of 0
  for (x = 0; x < len; x++) {
    obj[num[x]] = 0;
  }

  // Iterate through the object and push each unique element to the result array
  for (x in obj) {
    out.push(x);
  }

  // Return the array containing unique elements
  return out;
}

// Initialize an array with duplicate elements
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

// Call the removeDuplicates function with the array and store the result
var result = removeDuplicates(Mynum);

// Output the original array and the result array without duplicates
console.log(Mynum);
console.log(result);


// 15. We have the following arrays :
// 15. ہمارے پاس مندرجہ ذیل صفیں ہیں: رنگ = ["نیلا"، "سبز"، "سرخ"، "نارنجی"، "وائلٹ"، "انڈیگو"، "پیلا"؛ او = ["تھ"، "اسٹ"، این ڈی"، آر ڈی"] مندرجہ ذیل طریقے سے رنگوں کو ظاہر کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں: "پہلا انتخاب نیلا ہے." "دوسرا انتخاب سبز ہے." "تیسرا انتخاب سرخ ہے." - - - - - - - - - - - - - نوٹ: ان کی پوزیشن بتانے کے لئے ترتیبی نمبروں کا استعمال کریں۔

// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.

// Declare an array 'color' containing color names
var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// Function to generate ordinal numbers (1st, 2nd, 3rd, etc.)
function Ordinal(n) {
  // Define an array 'o' for suffixes of ordinal numbers
  var o = ["th", "st", "nd", "rd"],
      x = n % 100;
  
  // Return the ordinal number with the appropriate suffix
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

// Loop through each element in the 'color' array
for (n = 0; n < color.length; n++) {
  // Calculate the ordinal number for the current position
  var ordinal = n + 1;

  // Create a string with the ordinal number, color choice, and a period
  var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

  // Output the string to the console
  console.log(output);
}

// 16. Write a JavaScript program to find the leap years in a given range of years.
// 16. سالوں کی دی گئی رینج میں لیپ سالوں کو تلاش کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Function to generate an array of leap years within a specified range
function leap_year_range(st_year, end_year) {
  // Initialize an array 'year_range' to store all years within the range
  var year_range = [];

  // Loop through the years in the specified range and add them to the array
  for (var i = st_year; i <= end_year; i++) {
    year_range.push(i);
  }

  // Initialize a new array 'new_array' to store leap years
  var new_array = [];

  // Use forEach to iterate through each year in 'year_range'
  year_range.forEach(
    function(year) {
      // Call the 'test_LeapYear' function to check if the current year is a leap year
      if (test_LeapYear(year)) {
        // If it is a leap year, add it to 'new_array'
        new_array.push(year);
      }
    }
  );

  // Return the array of leap years
  return new_array;
}

// Function to test if a given year is a leap year
function test_LeapYear(year) {
  // Check if the year is divisible by 4 but not divisible by 100, or if it is divisible by 100 and 400
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    // Return the year if it's a leap year
    return year;
  } else {
    // Return false if it's not a leap year
    return false;
  }
}

// Output the array of leap years in the range 2000 to 2012
console.log(leap_year_range(2000, 2012));


// 17. Write a JavaScript program to shuffle an array.
// 17. سرے کو تبدیل کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffle(arra1) {
  // Initialize variables: ctr is the counter, temp is a temporary variable, index is the random index
  var ctr = arra1.length, temp, index;

  // While there are elements in the array
  while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      
      // Decrease ctr by 1
      ctr--;
      
      // Swap the last element with the randomly picked element
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  
  // Return the shuffled array
  return arra1;
}

// Original array for testing
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Output the shuffled array
console.log(shuffle(myArray));


// 18. Write a JavaScript program to perform a binary search.
// 18. بائنری تلاش انجام دینے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔ نوٹ: ایک بائنری سرچ یا نصف وقفہ سرچ الگورتھم کلیدی قدر کے ذریعہ ترتیب دی گئی صف کے اندر ایک مخصوص ان پٹ ویلیو کی پوزیشن تلاش کرتا ہے۔ نمونہ ترتیب: وی اے آر آئٹم = [1، 2، 3، 4، 5، 7، 8، 9]؛ متوقع آؤٹ پٹ: console.log (binary_Search (آئٹمز، 1))؛ 0 console.log (binary_Search (آئٹمز، 5))؛ 4

// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4

// Function to perform binary search on a sorted array
function binary_Search(items, value) {
  // Initialize variables for the first, last, and middle indices of the array
  var firstIndex  = 0,
      lastIndex   = items.length - 1,
      middleIndex = Math.floor((lastIndex + firstIndex) / 2);

  // Continue the search while the middle element is not equal to the target value
  // and the first index is less than the last index
  while (items[middleIndex] != value && firstIndex < lastIndex) {
      // Adjust the search range based on whether the target value is less or greater than the middle element
      if (value < items[middleIndex]) {
          lastIndex = middleIndex - 1;
      } else if (value > items[middleIndex]) {
          firstIndex = middleIndex + 1;
      }
      // Recalculate the middle index for the next iteration
      middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  }

  // Return the index of the target value if found, otherwise return -1
  return (items[middleIndex] != value) ? -1 : middleIndex;
}

// Sorted array for testing
var items = [1, 2, 3, 4, 5, 7, 8, 9];

// Perform binary search for the target values 1 and 5
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));


// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// 19. انفرادی اقدار کے ساتھ دو صفیں ہیں. دی گئی ترتیب میں ہر انفرادی انڈیکس کی قدر کے مجموعے کا حساب لگانے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// Function to calculate the sum of corresponding elements from two arrays
function Arrays_sum(array1, array2) {
  // Initialize an empty array to store the sum of corresponding elements
  var result = [];

  // Initialize counters for iterating through the arrays
  var ctr = 0;
  var x = 0;

  // Check if array1 is empty, return an error message if true
  if (array1.length === 0)
    return "array1 is empty";

  // Check if array2 is empty, return an error message if true
  if (array2.length === 0)
    return "array2 is empty";

  // Iterate through arrays until the end of either array is reached
  while (ctr < array1.length && ctr < array2.length) {
    // Calculate the sum of corresponding elements and push it to the result array
    result.push(array1[ctr] + array2[ctr]);
    // Increment the counter
    ctr++;
  }

  // Check if array1 is exhausted
  if (ctr === array1.length) {
    // Append the remaining elements from array2 to the result array
    for (x = ctr; x < array2.length; x++) {
      result.push(array2[x]);
    }
  } else {
    // Append the remaining elements from array1 to the result array
    for (x = ctr; x < array1.length; x++) {
      result.push(array1[x]);
    }
  }

  // Return the resulting array
  return result;
}

// Output the result of the function with sample arrays
console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));


// 20. Write a JavaScript program to find duplicate values in a JavaScript array.
// 20. جاوا اسکرپٹ سرے میں نقلی اقدار تلاش کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Function to find duplicates in an array
function find_duplicate_in_array(arra1) {
  // Object to store the count of each element in the array
  var object = {};
  
  // Array to store the elements with duplicates
  var result = [];

  // Iterate through each element in the array
  arra1.forEach(function (item) {
      // Check if the element is not in the object, initialize its count to 0
      if (!object[item])
          object[item] = 0;
      
      // Increment the count of the current element
      object[item] += 1;
  })

  // Iterate through the properties of the object
  for (var prop in object) {
      // Check if the count of the element is greater than or equal to 2
      if (object[prop] >= 2) {
          // Add the element to the result array
          result.push(prop);
      }
  }

  // Return the array containing duplicate elements
  return result;
}

// Output the result of the function with a sample array
console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));


// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// 21. ایک نیسٹڈ (کسی بھی گہرائی) سرے کو چپٹا کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔ اگر آپ کم گہرائی سے گزرتے ہیں تو ، سرے کو صرف ایک ہی سطح تک چپٹا کردیا جائے گا۔ نمونہ اعداد و شمار:

// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

// Function to flatten a nested array
var flatten = function(a, shallow, r) {
  // If the result array (r) is not provided, initialize it as an empty array
  if (!r) {
      r = [];
  }

  // If shallow is true, use concat.apply to flatten the array
  if (shallow) {
      return r.concat.apply(r, a);
  }

  // Iterate through each element in the array
  for (var i = 0; i < a.length; i++) {
      // Check if the current element is an array
      if (a[i].constructor == Array) {
          // Recursively flatten nested arrays
          flatten(a[i], shallow, r);
      } else {
          // If the current element is not an array, push it to the result array
          r.push(a[i]);
      }
  }

  // Return the flattened array
  return r;
}

// Output the result of the flatten function with a nested array
console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));

// Output the result of the flatten function with a nested array using shallow flattening
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));


// 22. Write a JavaScript program to compute the union of two arrays.
// 22. دو صفوں کے اتحاد کا حساب لگانے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

// Function to find the union of two arrays
function union(arra1, arra2) {
  // Check if either of the arrays is null, return undefined if true
  if ((arra1 == null) || (arra2 == null))
    return void 0;

  // Initialize an empty object to store unique elements from both arrays
  var obj = {};

  // Iterate through the elements of arra1 in reverse order
  for (var i = arra1.length - 1; i >= 0; --i)
    // Use each element as a key in the object to store unique values
    obj[arra1[i]] = arra1[i];

  // Iterate through the elements of arra2 in reverse order
  for (var i = arra2.length - 1; i >= 0; --i)
    // Use each element as a key in the object to store unique values
    obj[arra2[i]] = arra2[i];

  // Initialize an empty array to store the result (union)
  var res = [];

  // Iterate through the properties of the object
  for (var n in obj) {
    // Check if the property belongs to the object (not inherited)
    if (obj.hasOwnProperty(n))
      // Push the unique value to the result array
      res.push(obj[n]);
  }

  // Return the result array containing the union of the two input arrays
  return res;
}

// Output the result of the union function with sample arrays
console.log(union([1, 2, 3], [100, 2, 1, 10]));


// 23. Write a JavaScript function to find the difference between two arrays.
// 23. دو صفوں کے درمیان فرق تلاش کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

// Function to find the difference of two arrays
function differenceOf2Arrays(array1, array2) {
  // Temporary array to store the differences
  var temp = [];

  // Convert array1 to an array of numbers
  array1 = array1.toString().split(',').map(Number);
  
  // Convert array2 to an array of numbers
  array2 = array2.toString().split(',').map(Number);

  // Iterate through each element in array1
  for (var i in array1) {
    // If the element is not found in array2, add it to the temp array
    if (array2.indexOf(array1[i]) === -1)
      temp.push(array1[i]);
  }

  // Iterate through each element in array2
  for (i in array2) {
    // If the element is not found in array1, add it to the temp array
    if (array1.indexOf(array2[i]) === -1)
      temp.push(array2[i]);
  }

  // Return the temp array sorted in ascending order
  return temp.sort((a, b) => a - b);
}

// Output the result of the differenceOf2Arrays function with sample arrays
console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));


// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// 24. ہٹانے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔ 'صفر'، '0'، '''،'،'، 'غلط'، 'غیر واضح' اور 'این اے این' کی قدریں ایک صف سے ہیں۔

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// Function to filter an array and remove falsy values
function filter_array(test_array) {
  // Initialize index to -1, arr_length to the length of the array (if not provided, default to 0),
  // resIndex to -1, and result as an empty array
  var index = -1,
      arr_length = test_array ? test_array.length : 0,
      resIndex = -1,
      result = [];

  // Iterate through the elements of the test_array using a while loop
  while (++index < arr_length) {
      // Get the current value from the array
      var value = test_array[index];

      // Check if the value is truthy
      if (value) {
          // If truthy, add it to the result array and increment resIndex
          result[++resIndex] = value;
      }
  }

  // Return the filtered result array
  return result;
}

// Output the result of the filter_array function with a sample array
console.log(filter_array([NaN, 0, 15, false, -22, '', undefined, 47, null]));


// 25. Write a JavaScript function to sort the following array of objects by title value.
// 25. عنوان کی قیمت کے لحاظ سے اشیاء کی مندرجہ ذیل صف کو ترتیب دینے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Sample object :

// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];
// Expected result :

// [[object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title:"Mockingjay:The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "Bill Gates",
//   libraryID: 1254,
//   title: "The Road Ahead"
// }, [object Object] {
//   author: "Steve Jobs",
//   libraryID: 4264,
//   title: "Walter Isaacson"
// }]

// Array of book objects in the library
var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

// Function to compare two book objects based on their titles for sorting
function compare_to_sort(x, y) {
 // Check if the title of book x is less than the title of book y
 if (x.title < y.title)
   return -1;
 // Check if the title of book x is greater than the title of book y
 if (x.title > y.title)
   return 1;
 // If titles are equal, return 0
 return 0;
}

// Output the sorted library array based on the compare_to_sort function
console.log(library.sort(compare_to_sort));


// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
// 26. کسی مخصوص ترتیب میں عناصر (دو نمبروں کے اشاریے) کی ایک جوڑی تلاش کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں جس کا مجموعہ ایک مخصوص ہدف نمبر کے برابر ہے۔

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3


// Function to find two indices in the array 'nums' whose elements sum to the 'target_num'
function twoSum(nums, target_num) {
  // Initialize an empty array 'map' to store the difference between 'target_num' and elements in 'nums'
  var map = [];
  // Initialize an empty array 'indexnum' to store the indices of the two numbers
  var indexnum = [];
  
  // Iterate through each element in the 'nums' array
  for (var x = 0; x < nums.length; x++) {
    // Check if the current element's complement exists in the 'map' array
    if (map[nums[x]] != null) {
      // If found, store the indices of the two numbers and break out of the loop
      var index = map[nums[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    } else {
      // If not found, store the index of the current element's complement in the 'map' array
      map[target_num - nums[x]] = x;
    }
  }
  
  // Return the array containing the indices of the two numbers
  return indexnum;
}

// Output the result of the twoSum function with a sample array and target number
console.log(twoSum([10,20,10,40,50,60,70], 50));


// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// 27. ایک صف میں تمام عناصر سے دی گئی پراپرٹی کی قیمت کو بازیافت کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

/// Array of book objects in the library
var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

// Function to extract values of a specified property from objects in an array
function property_value(array, property_key) {
  // Initialize an empty array 'arr'
  var arr = [],
    // Initialize index to -1, arrlen to the length of the array (if not provided, default to 0),
    // array_items to store the current array item
    index = -1,
    arrlen = array.length,
    array_items;

  // Iterate through the elements of the array using a while loop
  while (++index < arrlen) {
    // Get the current array item
    array_items = array[index];

    // Check if the array item has the specified property
    if (array_items.hasOwnProperty(property_key)) {
      // If the property exists, add its value to the 'arr' array
      arr[arr.length] = array_items[property_key];
    }
  }

  // Return the 'arr' array containing values of the specified property
  return arr;
}

// Output the result of the property_value function with the 'title' property
console.log(property_value(library, 'title'));

// Output the result of the property_value function with the 'author' property
console.log(property_value(library, 'author'));


// 28. Write a JavaScript function to find the longest common starting substring in a set of strings.
// تاروں کے ایک سیٹ میں سب سے طویل عام ابتدائی سبسٹرنگ تلاش کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"

// Function to find the longest common starting substring in an array of strings
function longest_common_starting_substring(arr1) {
  // Create a sorted copy of the input array
  var arr = arr1.concat().sort(),
      // Get the first and last strings after sorting
      a1 = arr[0],
      a2 = arr[arr.length - 1],
      // Get the length of the first string
      L = a1.length,
      // Initialize an index variable
      i = 0;

  // Iterate through the characters of the first string until a mismatch is found
  while (i < L && a1.charAt(i) === a2.charAt(i)) {
    i++;
  }

  // Return the longest common starting substring using substring(0, i)
  return a1.substring(0, i);
}

// Output the result of the longest_common_starting_substring function with sample arrays
console.log(longest_common_starting_substring(['go', 'google'])); // Output: 'go'

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); // Output: 'SQL'

console.log(longest_common_starting_substring(['abcd', '1234'])); 



// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
// 29. فراہم کردہ حدود کے اندر قدروں (عددی، ایک حروف کے ساتھ سٹرنگ) کے ساتھ ایک سرے کو بھرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// Function to generate a range of numbers or characters based on start, end, and step
function num_string_range(start, end, step) {
  // Initialize an empty array 'range' to store the generated range
  var range = [];

  // Check for invalid step value or undefined start/end values
  if ((step === 0) || (typeof start === "undefined" || typeof end === "undefined") || (typeof start !== typeof end))
    return false;

  // Adjust the step direction if end is less than start
  if (end < start) {
    step = -step;
  }

  // Check if the start value is a number
  if (typeof start === "number") {
    // Generate a range of numbers
    while (step > 0 ? end >= start : end <= start) {
      range.push(start);
      start += step;
    }
  } 
  // Check if the start value is a string
  else if (typeof start === "string") {
    // Check if both start and end are single characters
    if (start.length !== 1 || end.length !== 1) {
      throw TypeError("Strings with one character are supported.");
    }

    // Convert characters to their ASCII codes
    start = start.charCodeAt(0);
    end = end.charCodeAt(0);

    // Generate a range of characters
    while (step > 0 ? end >= start : end <= start) {
      range.push(String.fromCharCode(start));
      start += step;
    }
  } 
  // Throw an error for unsupported types
  else {
    throw TypeError("Only string and number are supported");
  }

  // Return the generated range
  return range;
}

// Output the result of the num_string_range function with sample inputs
console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5));


// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.
// 30. ایک جاوا اسکرپٹ فنکشن لکھیں جو دو صفوں کو ضم کرتا ہے اور تمام نقلی عناصر کو ہٹا دیتا ہے۔

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

// Function to merge two arrays, removing duplicates and maintaining the order
function merge_array(array1, array2) {
  // Initialize an empty array to store the result
  var result_array = [];
  
  // Concatenate both arrays to form a new array
  var arr = array1.concat(array2);
  
  // Get the length of the new array
  var len = arr.length;
  
  // Initialize an empty object to keep track of unique items
  var assoc = {};

  // Iterate through the array in reverse order
  while (len--) {
      // Get the current item from the array
      var item = arr[len];

      // Check if the item is not already in the result array
      if (!assoc[item]) { 
          // Add the item to the beginning of the result array
          result_array.unshift(item);
          
          // Mark the item as seen in the associative object
          assoc[item] = true;
      }
  }

  // Return the result array with unique items
  return result_array;
}

// Example arrays for testing
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

// Output the result of merging the arrays
console.log(merge_array(array1, array2));


// 31. Write a JavaScript function to remove a specific element from an array.
// 31. سرے سے کسی مخصوص عنصر کو ہٹانے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

// Function to remove an element from an array
function remove_array_element(array, n) {
  // Find the index of the element 'n' in the array
  var index = array.indexOf(n);
  
  // Check if the element exists in the array (index greater than -1)
  if (index > -1) {
    // Remove one element at the found index
    array.splice(index, 1);
  }
  
  // Return the modified array
  return array;
}

// Output the result of removing element '5' from the array [2, 5, 9, 6]
console.log(remove_array_element([2, 5, 9, 6], 5));


// 32. Write a JavaScript function to find an array containing a specific element.
// 32. ایک مخصوص عنصر پر مشتمل صف تلاش کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]

// Function to check if an array contains a specific element
function contains(arr, element) {
  // Iterate through the array
  for (var i = 0; i < arr.length; i++) {
      // Check if the current element is equal to the target element
      if (arr[i] === element) {
          // Return true if the element is found in the array
          return true;
      }
  }
  // Return false if the element is not found in the array
  return false;
}

// Sample array
arr = [2, 5, 9, 6];

// Output the result of checking if the array contains the element '5'
console.log(contains(arr, 5));


// 33. Write a JavaScript script to empty an array while keeping the original.
// 33. اصل کو برقرار رکھتے ہوئے ایک سرے کو خالی کرنے کے لئے جاوا اسکرپٹ اسکرپٹ لکھیں۔

// Declare and initialize an array
var arr = [1, 3, 6, 3, -5];

// Output the contents of the array before modification
console.log(arr);

// Set the length of the array to 0, effectively clearing its contents
arr.length = 0;

// Output the contents of the array after modification
console.log(arr);


// 34. Write a JavaScript function to get the nth largest element from an unsorted array.
// 34. ایک غیر ترتیب شدہ سرے سے پانچواں سب سے بڑا عنصر حاصل کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

// Function to find the nth largest element in an array
function nthlargest(arra, highest) {
  // Initialize variables for array indices, temporary storage, array length, and flags
  var x = 0,
      y = 0,
      z = 0,
      temp = 0,
      tnum = arra.length,
      flag = false,
      result = false;

  // Iterate through the array while x is less than the array length
  while (x < tnum) {
      // Increment y to the next position
      y = x + 1;

      // Check if y is less than the array length
      if (y < tnum) {
          // Iterate through the array from y to the end
          for (z = y; z < tnum; z++) {
              // Check if the element at position x is less than the element at position z
              if (arra[x] < arra[z]) {
                  // Swap the elements at positions x and z
                  temp = arra[z];
                  arra[z] = arra[x];
                  arra[x] = temp;
                  flag = true; // Set flag to true to indicate a swap
              } else {
                  continue; // Continue to the next iteration if no swap is needed
              }
          }
      }

      // Check if a swap occurred
      if (flag) {
          flag = false; // Reset the flag
      } else {
          x++; // Move to the next position if no swap occurred

          // Check if x is equal to the desired highest position
          if (x === highest) {
              result = true; // Set result flag to true if x matches the desired position
          }
      }

      // Check if the result flag is set
      if (result) {
          break; // Break out of the loop if the result is found
      }
  }

  // Return the nth largest element from the array
  return arra[highest - 1];
}

// Output the result of the nthlargest function with a sample array and position
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));


// 35. Write a JavaScript function to get random items from an array.
// 35. سرے سے بے ترتیب آئٹمز حاصل کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Function to return a random item from an array
function random_item(items) {
  // Use Math.random() to generate a random number between 0 and 1,
  // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
  return items[Math.floor(Math.random() * items.length)];
}

// Declare and initialize an array of items
var items = [254, 45, 212, 365, 2543];

// Output the result of the random_item function with the array of items
console.log(random_item(items));


// 36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.
// 36. پہلے سے بھری ہوئی عددی قدر کی ترتیب کے ساتھ عناصر کی ایک مخصوص تعداد بنانے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]

// Function to create a new array with 'n' elements, each initialized to the specified 'val'
function array_filled(n, val) {
  // Use Array.apply to create an array-like object with 'n' undefined elements
  // and then use map to fill each element with the specified 'val'
  return Array.apply(null, Array(n)).map(Number.prototype.valueOf, val);
}

// Output the result of array_filled with 'n=6' and 'val=0'
console.log(array_filled(6, 0));

// Output the result of array_filled with 'n=4' and 'val=11'
console.log(array_filled(4, 11));


// 37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array.
// 37. پہلے سے بھری ہوئی سٹرنگ ویلیو سرے کے ساتھ عناصر کی مخصوص تعداد بنانے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
// console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]

// Function to create a new array with 'n' elements, each initialized to the specified 'val'
function array_filled(n, val) {
  // Use Array.apply to create an array-like object with 'n' undefined elements
  // and then use map to fill each element with the specified 'val' converted to a string
  return Array.apply(null, Array(n)).map(String.prototype.valueOf, val);
}

// Output the result of array_filled with 'n=3' and 'val='default value''
console.log(array_filled(3, 'default value'));

// Output the result of array_filled with 'n=4' and 'val='password''
console.log(array_filled(4, 'password'));


// 38. Write a JavaScript function to move an array element from one position to another.
// 38. ایک سرے عنصر کو ایک پوزیشن سے دوسری پوزیشن میں منتقل کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]

// Function to move an element within an array from the 'old_index' to the 'new_index'
function move(arr, old_index, new_index) {
  // Adjust negative indices to the equivalent positive indices
  while (old_index < 0) {
      old_index += arr.length;
  }
  while (new_index < 0) {
      new_index += arr.length;
  }

  // If 'new_index' is beyond the array length, extend the array with undefined elements
  if (new_index >= arr.length) {
      var k = new_index - arr.length;
      while ((k--) + 1) {
          arr.push(undefined);
      }
  }

  // Remove the element at 'old_index' and insert it at 'new_index'
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);

  // Return the modified array
  return arr;
}

// Output the result of moving the element at index 0 to index 2
console.log(move([10, 20, 30, 40, 50], 0, 2));

// Output the result of moving the last element to the second-to-last position
console.log(move([10, 20, 30, 40, 50], -1, -2));


// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array.
// 39. ایک سرے سے جھوٹی ، صفر ، 0 اور خالی اقدار کو فلٹر کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

// Function to filter array values based on eligibility criteria
function filter_array_values(arr) {
  // Use the filter function with the custom eligibility check provided by 'isEligible'
  arr = arr.filter(isEligible);
  // Return the filtered array
  return arr;
}

// Function to check the eligibility of a value
function isEligible(value) {
  // Check if the value is not equal to false, null, 0, or an empty string
  if (value !== false || value !== null || value !== 0 || value !== "") {
    // If eligible, return the value
    return value;
  }
}

// Output the result of filtering the array with the custom eligibility check
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


// 40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.
// 40. ایک جاوا اسکرپٹ فنکشن لکھیں تاکہ مکمل عدد نمبروں کی ایک صف تیار کی جاسکے ، جس میں ابتدائی پوزیشن سے ایک مخصوص لمبائی کا اضافہ کیا جائے۔

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]

// Function to generate an array of numbers in a specified range
function array_range(start, len) 
{
  // Create a new array with the specified length
  var arr = new Array(len);

  // Iterate through the array, filling it with values incremented from 'start'
  for (var i = 0; i < len; i++, start++) 
  {
    arr[i] = start;
  }

  // Return the generated array
  return arr;
}

// Output the result of generating an array with a starting value of 1 and a length of 4
console.log(array_range(1, 4));

// Output the result of generating an array with a starting value of -6 and a length of 4
console.log(array_range(-6, 4));


// 41. Write a JavaScript function to generate an array between two integers of 1 step length.
// 41. 1 قدم کی لمبائی کے دو مکمل اعداد کے درمیان ایک ترتیب پیدا کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// Function to generate an array of numbers between two values (inclusive)
function rangeBetween(start, end) 
{
  if (start > end) {
    // If start is greater than end, create a new array and fill it in reverse order
    const arr = Array.from({ length: start - end + 1 }, (_, index) => start - index);
    return arr;
  } else {
    // If start is less than or equal to end, create a new array and fill it in ascending order
    const arr = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    return arr;
  }
}

// Output the result of generating an array between 4 and 7 (inclusive)
console.log(rangeBetween(4, 7));

// Output the result of generating an array between -4 and 7 (inclusive)
console.log(rangeBetween(-4, 7));


// 42. Write a JavaScript function to find unique elements in two arrays.
// 42. دو صفوں میں منفرد عناصر تلاش کرنے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

// Function to find the difference between two arrays
function difference(arr1, arr2) {
  // Flatten the input arrays using the 'flatten' function
  var a1 = flatten(arr1, true);
  var a2 = flatten(arr2, true);

  var a = [], diff = [];
  
  // Initialize a dictionary 'a' with values from 'a1' and set them to false
  for (var i = 0; i < a1.length; i++)
    a[a1[i]] = false;
  
  // Iterate through 'a2' and update the dictionary values
  for (i = 0; i < a2.length; i++)
    if (a[a2[i]] === true) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }

  // Extract keys from the dictionary 'a' and push them to the 'diff' array
  for (var k in a)
    diff.push(k);
  
  // Return the array containing the differences
  return diff;
}

// Function to flatten an array (recursive)
var flatten = function(a, shallow, r) {
  // If 'r' is not provided, initialize it as an empty array
  if (!r) {
    r = [];
  }
  
  // Check if shallow flattening is requested
  if (shallow) {
    // Use 'concat' to flatten the array
    return r.concat.apply(r, a);
  }

  // Iterate through the array and recursively flatten nested arrays
  for (var i = 0; i < a.length; i++) {
    if (a[i].constructor == Array) {
      flatten(a[i], shallow, r);
    } else {
      r.push(a[i]);
    }
  }

  // Return the flattened array
  return r;
};

// Output the result of the 'difference' function with sample arrays
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));


// 43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.
// 43. زپ کے ذریعہ تیار کردہ سرے میں عناصر کو ان گروپ کرتے ہوئے ، صفوں کی ایک صف بنانے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// unzip([['a', 1, true], ['b', 2, false]])
// unzip([['a', 1, true], ['b', 2]])
// Expected Output:
// [["a","b"],[1,2],[true,false]]
// [["a","b"],[1,2],[true]]

// Source: https://bit.ly/3hEZdCl
// Function to unzip an array of arrays
const unzip = arr =>
  // Reduce the array, merging elements by index
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    // Initialize an array with empty arrays, one for each index
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );

// Output the result of unzipping the given arrays
console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]]));


// 44. Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.
// 44. مخصوص کلید کا استعمال کرتے ہوئے اور اسے ہر قدر سے خارج کرتے ہوئے ، سرے سے آبجیکٹ بنانے کے لئے جاوا اسکرپٹ فنکشن لکھیں۔

// Test Data :
// indexOn([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ], x => x.id)
// Expected Output:
// {"undefined":{"id":20,"name":"orange"}}

// Source: https://bit.ly/3hEZdCl
// Function to create an object indexed by a specified key
const indexOn = (arr, key) =>
  // Reduce the array to an object, using the specified key as the index
  arr.reduce((obj, v) => {
    // Destructure the input object, extracting the specified key and the remaining data
    const { [key]: id, ...data } = v;
    // Add the key-value pair to the object, using the specified key as the index
    obj[id] = data;
    // Return the updated object
    return obj;
  }, {});

// Output the result of indexing the array of objects by the 'id' property
console.log(indexOn([
  { id: 10, name: 'apple' },
  { id: 20, name: 'orange' }
], x => x.id));


// 45. Write a JavaScript program to find all the unique values in a set of numbers.
// نمبروں کے ایک سیٹ میں تمام منفرد اقدار کو تلاش کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Test Data :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

// Function to return an array with unique elements using the Set data structure
const unique_Elements = arr => [...new Set(arr)];

// Output the result of applying unique_Elements to an array with duplicate elements
console.log(unique_Elements([1, 2, 2, 3, 4, 4, 5]));

// Output the result of applying unique_Elements to an array without duplicate elements
console.log(unique_Elements([1, 2, 3, 4, 5]));

// Output the result of applying unique_Elements to an array with negative and duplicate elements
console.log(unique_Elements([1, -2, -2, 3, 4, -5, -6, -5]));


// 46. Write a JavaScript program to generate all permutations of an array's elements (including duplicates).
// 46. ایک سرے کے عناصر (بشمول نقل) کی تمام ترتیبات پیدا کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Test Data :
// [1, 33, 5]
// [1, 3, 5, 7]
// [2, 4]
// Expected Output:
// [[1,33,5],[1,5,33],[33,1,5],[33,5,1],[5,1,33],[5,33,1]]
// [[1,3,5,7],[1,3,7,5],[1,5,3,7],[1,5,7,3],[1,7,3,5],[1,7,5,3],[3,1,5,7],[3,1,7,5],[3,5,1,7],[3,5,7,1],[3,7,1,5],[3,7,5,1],[5,1,3,7],[5,1,7,3],[5,3,1,7],[5,3,7,1],[5,7,1,3],[5,7,3,1],[7,1,3,5],[7,1,5,3],[7,3,1,5],[7,3,5,1],[7,5,1,3],[7,5,3,1]]
// [[2,4],[4,2]]

// Source: https://bit.ly/3hEZdCl
// Function to generate permutations of an array
const permutations = arr => {
  // Base case: if the array has 0 or 1 element, return the array
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;

  // Recursive case: generate permutations using reduce and recursion
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

// Output the result of generating permutations for different arrays
console.log(permutations([1, 33, 5]));
console.log(permutations([1, 3, 5, 7]));
console.log(permutations([2, 4]));


// 47. Write a JavaScript program to remove all false values from an object or array.
// 47. کسی شے یا سرے سے تمام غلط اقدار کو ہٹانے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔

// Test Data :
// const obj = {
// a: null,
// b: false,
// c: true,
// d: 0,
// e: 1,
// f: '',
// g: 'a',
// h: [null, false, '', true, 1, 'a'],
// i: { j: 0, k: false, l: 'a' }
// Expected Output:
// {"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}

// Source: https://bit.ly/3hEZdCl
// Function to compact an object by removing falsy values (null, false, 0, '', undefined)
const compactObject = val => {
  // Use ternary operator to filter out falsy values for arrays, otherwise use the provided value
  const data = Array.isArray(val) ? val.filter(Boolean) : val;

  // Reduce the object to a compacted version, removing falsy values recursively
  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key];
      
      // Check if the value is truthy before including it in the result
      if (Boolean(value))
        // Recursively compact object values, if applicable
        acc[key] = typeof value === 'object' ? compactObject(value) : value;

      return acc;
    },
    // Initialize the result as an empty array for arrays, otherwise an empty object
    Array.isArray(val) ? [] : {}
  );
};

// Sample object with various values including falsy ones
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: '',
  g: 'a',
  h: [null, false, '', true, 1, 'a'],
  i: { j: 0, k: false, l: 'a' }
};

// Output the result of compacting the object
console.log(compactObject(obj));

// 48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.
// 48. ایک جاوا اسکرپٹ پروگرام لکھیں جو مکمل اعداد کی ایک صف لیتا ہے اور اگر ہر نمبر پرائم نہیں ہے تو غلط واپس آتا ہے۔ بصورت دیگر، سچ واپس آ جاؤ.
// ٹیسٹ کے اعداد و شمار: ([2,3,5,7]) - > سچ ہے ([2,3,5,7,8]) - > غلط متوقع آؤٹ پٹ: مکمل اعداد کی اصل فہرست: 2,3,5,7 مذکورہ سرے کی جانچ پڑتال میں ہر نمبر پرائم ہے یا نہیں! سچ مکمل اعداد کی اصل فہرست: 2,3,5,7,8 مذکورہ سرے کی جانچ پڑتال میں ہر نمبر پرائم ہے یا نہیں! جھوٹ
// Test Data :
// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false
// Expected Output:
// Original array of integers: 2,3,5,7
// In the said array check every numbers are prime or not! true
// Original array of integers: 2,3,5,7,8
// In the said array check every numbers are prime or not! false

// Function to check if all numbers in an array are prime
function test(arr_nums) {
  // Iterate through each number in the array
  for (n of arr_nums) {
    // Check if the number is equal to 1 or greater than 2 and divisible by 2
    if (n == 1 || (n > 2 && n % 2 == 0)) 
      // Return false if the condition is met for any number
      return false;
  }
  // Return true if none of the numbers meet the specified condition
  return true;
}

// Test the function with an array of prime numbers
nums = [2, 3, 5, 7];
console.log("Original array of integers: " + nums);
console.log("In the said array, check if every number is prime or not: " + test(nums));

// Test the function with an array containing a non-prime number (8)
nums = [2, 3, 5, 7, 8];
console.log("Original array of integers: " + nums);
console.log("In the said array, check if every number is prime or not: " + test(nums));



// 49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.
// 49. ایک جاوا اسکرپٹ پروگرام لکھیں جو نمبروں کی ایک صف لیتا ہے اور تیسرا سب سے چھوٹا نمبر واپس کرتا ہے۔
// ٹیسٹ کے اعداد و شمار: (2,3,5,7,1) -> 3 (2,3,0,5,7,8,-2,-4) -> 0 متوقع آؤٹ پٹ: نمبروں کی اصل فہرست: 2,3,5,7,1 نمبروں کی مذکورہ فہرست کی تیسری سب سے چھوٹی تعداد: 3 نمبروں کی اصل فہرست: 2,3,0,5,7,8,-2,-4 نمبروں کی مذکورہ فہرست کی تیسری سب سے چھوٹی تعداد: 0

// Test Data :
// (2,3,5,7,1) -> 3
// (2,3,0,5,7,8,-2,-4) -> 0
// Expected Output:
// Original array of numbers: 2,3,5,7,1
// Third smallest number of the said array of numbers: 3
// Original array of numbers: 2,3,0,5,7,8,-2,-4
// Third smallest number of the said array of numbers: 0

// Function to find the third smallest number in an array
function test(arr_nums) {
  // Sort the array in descending order using the compare function (y - x)
  // and return the third element (index 2) from the sorted array
  return arr_nums.sort((x, y) => y - x)[arr_nums.length - 3];
}

// Test the function with an array of numbers
nums = [2, 3, 5, 7, 1];
console.log("Original array of numbers: " + nums);
console.log("Third smallest number of the said array of numbers: " + test(nums));

// Test the function with another array of numbers
nums = [2, 3, 0, 5, 7, 8, -2, -4];
console.log("Original array of numbers: " + nums);
console.log("Third smallest number of the said array of numbers: " + test(nums));


// 50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
// 50. ایک جاوا اسکرپٹ پروگرام لکھیں جو مخلوط ڈیٹا کی قسم کے ساتھ ایک سرے لیتا ہے اور تمام نمبروں کے مجموعے کا حساب لگاتا ہے۔
// ([2، "11"، 3، "اے 2"، جھوٹ، 5، 7، 1]) - > 18 ([2، 3، 0، 5، 7، 8، سچ، جھوٹ]) - > 25 متوقع آؤٹ پٹ: اصل ترتیب: 2,11,3,a2,غلط,5,7,1 مذکورہ صف کے تمام نمبروں کا خلاصہ: 18 اصل صف: 2,3,0,5,7,8,سچ,غلط مذکورہ صف کے تمام نمبروں کا خلاصہ: 25

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
// Original array: 2,3,0,5,7,8,true,false
// Sum all numbers of the said array: 25

// Function to calculate the sum of all numbers in a mixed array
function test(arr_mix) {
  // Initialize a variable 'total' to store the sum
  var total = 0;

  // Iterate through the elements of the array
  for (var i = 0; i <= arr_mix.length; i++) {
    // Check if the current element is a number
    if (typeof arr_mix[i] === "number")
      // Add the number to the 'total'
      total = total + arr_mix[i];
  }

  // Return the calculated total
  return total;
}

// Test the function with an array containing mixed data types
arr_mix = [2, "11", 3, "a2", false, 5, 7, 1];
console.log("Original array: " + arr_mix);
console.log("Sum all numbers of the said array: " + test(arr_mix));

// Test the function with another array containing mixed data types
arr_mix = [2, 3, 0, 5, 7, 8, true, false];
console.log("Original array: " + arr_mix);
console.log("Sum all numbers of the said array: " + test(arr_mix));


// 51. Write a JavaScript program to check if an array is a factor chain or not.
// 51. جاوا اسکرپٹ پروگرام لکھیں یہ چیک کرنے کے لئے کہ آیا ایک سرے ایک عنصر زنجیر ہے یا نہیں۔ ایک عنصر زنجیر ایک صف ہے جس میں پچھلا عنصر اگلے لگاتار عنصر کا عنصر ہے۔ مندرجہ ذیل ایک عنصر کی زنجیر ہے:
// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false
// Expected Output:
// اصل ترتیب: چیک کریں کہ مذکورہ ترتیب ایک عنصر زنجیر ہے یا نہیں؟ سچ اصل ترتیب: چیک کریں کہ مذکورہ ترتیب ایک عنصر زنجیر ہے یا نہیں؟ سچ اصل ترتیب: چیک کریں کہ مذکورہ ترتیب ایک عنصر زنجیر ہے یا نہیں؟ جھوٹ

// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false
// Expected Output:
// Original array:
// Check the said array is a factor chain or not?
// true
// Original array:
// Check the said array is a factor chain or not?
// true
// Original array:
// Check the said array is a factor chain or not?
// false

// Function to check if an array forms a factor chain
function test(nums) { 
  // Iterate through the array elements up to the second-to-last element
  for (var i = 0; i < nums.length - 1; i++) 
  {
    // Check if the next element is not a factor of the current element
    if (nums[i + 1] % nums[i] != 0) {
      // If not, the array does not form a factor chain
      return false;            
    }
  }
  
  // If the loop completes without returning, the array forms a factor chain
  return true;
}

// Test the function with an array that forms a factor chain
nums = [2, 4, 8, 16, 32];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));

// Test the function with another array that forms a factor chain
nums = [2, 4, 16, 32, 64];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));

// Test the function with an array that does not form a factor chain
nums = [2, 4, 16, 32, 68];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));


// 52. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.
// 52. ان تمام اشاریوں کو حاصل کرنے کے لئے جاوا اسکرپٹ پروگرام لکھیں جہاں این اے این نمبروں اور این اے این کی دی گئی صف میں پایا جاتا ہے۔ ٹیسٹ کے اعداد و شمار: ([2، این اے این، 8، 16، 32]) -> [1] ([2، 4، این اے این، 16، 32، این اے این]) - > [2،5] ([2، 4، 16، 32]) ->[] متوقع آؤٹ پٹ: اصل ترتیب: 2,NaN,8,16,32 مذکورہ فہرست کے این اے این کے تمام اشاریوں کو تلاش کریں: 1 اصل ترتیب: 2,4,NaN,16,32,NaN مذکورہ فہرست کے این اے این کے تمام اشاریے تلاش کریں: 2,5 اصل صف: 2,4,16,32 مذکورہ فہرست کے این اے این کے تمام اشاریہ تلاش کریں:


// Test Data :
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]
// Expected Output:
// Original array: 2,NaN,8,16,32
// Find all indexes of NaN of the said array: 1
// Original array: 2,4,NaN,16,32,NaN
// Find all indexes of NaN of the said array: 2,5
// Original array: 2,4,16,32
// Find all indexes of NaN of the said array:

// Function to find all indexes of NaN in an array
function test(arr_nums){
  // Use map to create an array of indexes where NaN is found, otherwise return false
  return arr_nums.map(function(el, i){
      if(isNaN(el)) 
        return i;
      return false;
  })
  // Use filter to remove falsy values (non-NaN elements)
  .filter(function(el){
      return el;
  });
}

// Test the function with an array containing NaN at multiple indexes
arr_nums = [2, NaN, 8, 16, 32];
console.log("Original array: "+arr_nums);
result = test(arr_nums);
console.log("Find all indexes of NaN in the said array: "+result);

// Test the function with another array containing NaN at multiple indexes
arr_nums = [2, 4, NaN, 16, 32, NaN];
console.log("Original array: "+arr_nums);
result = test(arr_nums);
console.log("Find all indexes of NaN in the said array: "+result);

// Test the function with an array without NaN
arr_nums = [2, 4, 16, 32];
console.log("Original array: "+arr_nums);
result = test(arr_nums);
console.log("Find all indexes of NaN in the said array: "+result);


// 53. Write a JavaScript program to count the number of arrays inside a given array.
// 53. دی گئی صف کے اندر صفوں کی تعداد گننے کے لئے جاوا اسکرپٹ پروگرام لکھیں۔ ٹیسٹ کے اعداد و شمار: ([2,8,[6]، 3,3,5,3,4,[5,4]) -> 2 ([2,8,[6,3,[4]،5،[3,4,[5,4]]) -> 3 متوقع آؤٹ پٹ: مذکورہ صف کے اندر صفوں کی تعداد: 2 مذکورہ صف کے اندر صفوں کی تعداد: 3


// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3

// Function to count the number of arrays inside an array
function test(arr_nums){
  // Use filter to create an array containing only the arrays from the input array
  return arr_nums.filter(n => Array.isArray(n)).length;
}10

// Test the function with an array containing nested arrays
arr_nums = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
console.log("Number of arrays inside the said array: " + test(arr_nums));

// Test the function with another array containing nested arrays
arr_nums = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];
console.log("Number of arrays inside the said array: " + test(arr_nums));
