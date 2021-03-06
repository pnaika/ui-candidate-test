     // Example unit test function
     function divide( a, b ) {
        //To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
          return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
          var len = values.length, min = Infinity;
          while (len--) {
               if (Number(values[len]) < min) {
                    min = Number(values[len]);
               }
          }
          return min;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
          var newValue = [],
              length1 = values.length,
              found, var1, var2;

          for (var1 = 0; var1 < length1; var1++) {
               found = undefined;
               for (var2 = 0; var2 < newValue.length; var2++) {
                    if (values[var1] === newValue[var2]) {
                         found = true;
                         break;
                    }
               }
               if (!found) {
                    newValue.push(values[var1]);
               }
          }
          return newValue;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
          for ( var x=1; x <= 100; x++){
               if( x % 3 == 0 ){
                    console.log("Fizz")
               }
               if( x % 5 == 0 ){
                    console.log("Buzz")
               }
               if( ( x % 3 == 0 ) && ( x % 5 == 0 ) ){
                    console.log("FizzBuzz")
               }
               if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
                    console.log(x)
               }
          }
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
          var what, len = fruitsToRemove.length, ax;
          while (len > 0 && fruits.length) {
               what = fruitsToRemove[--len];
               while ((ax= fruits.indexOf(what)) !== -1) {
                    fruits.splice(ax, 1);
               }
          }
          console.log(fruits);
          return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
          newArray = array.concat(toPush);
          return newArray;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
          var res
          if(sourceStr != ''){
               res = sourceStr.split(',')
          } else {
               res= [];
          }
          return res;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
          var i, sumValue = 0;
          for (i = 0; i < arguments.length; i++) {
               sumValue += arguments[i];
          }
          return sumValue;

     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
          if( sourceStr.indexOf(' ') >= 0){
               return true;
          }else
               return false;

     }

     // write an example of a javascript closure

     // Id generation:
     function showID () {
          var myID = 999;
          // We are returning an object with some inner functions
          // All the inner functions have access to the outer function's variables
          return {
               getID: function ()  {
                    // This inner function will return the UPDATED myID variable
                    // It will return the current value of myID, even after the setID function changes it
                    return myID;
               },
               setID: function (theNewID)  {
                    // This inner function will change the outer function's variable anytime
                    myID = theNewID;
               }
          }
     }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     var obj = {
          "fistName": "Prashanth",
          "lastName":"Naika",
          "city":"Chicago",
          "state":"IL",
          "zip":60616,
          "phone": {
               "home": "3126985475",
               "work": "3126985476",
               "mobile":"3126985477"
          }
     };

     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');


     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
