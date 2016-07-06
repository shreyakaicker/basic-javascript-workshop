// this is a comment

//Write a function that takes a string and returns the first character of the string.
function stringFirstChar(sentence) {
    return sentence.substring(0,1)
}
stringFirstChar("hello");



//Write a function that takes a string and returns the last character of a string.
function stringLastChar(sentence1) {
    var stringLength = sentence1.length ;
    return sentence1.substring(stringLength,stringLength-1)
}
stringLastChar("hello");



//Write a function that takes a string and a number, and returns the character at the position represented by the number. 
function strAndNum(str1,num1) {
    return str1.charAt(num1);
}
strAndNum("hello",2);



//Write a function that takes two numbers and adds them together.
function addNumbers(numA,numB) {
    return numA + numB ;
}
addNumbers(3,6) ;    
// if we put something other than numbers it gives us a cancatinating string or string and number together



//Write a function that takes two numbers and multiplies them together.
function multiply2Num(numC,numD) {
    return numC * numD ;

}
multiply2Num(2,3)
// if we put something other than a no. it says NaN (not a number)




/*
Write a function that takes two numbers and a string. 
If the string is ‘add’, then return the sum of the numbers. 
If the string is ‘subtract’, return the difference. 
If the string is ‘mult’, return the product. 
If the string is ‘div’, return the ratio. Otherwise return 0.
*/
function enterData(numE,numF,task) {
    
    if(task === "add") {
        return numE + numF ;
    }
    
    else if(task === "subtract") {
        return numE - numF ;
    }
    
    else if(task === "mult") {
        return numE * numF ;
    }
    
    else if(task === "div") {
        return numE / numF ;
    }
    
    else
    return 0;
}

enterData(6,3,"add");



//Write a function that takes a string and a number, and returns the string repeated that many number of times
function string_num(strA,numG) {
    
    var ans10 = "";
    
    for(i = 0 ; i < numG ; i++ ) {
         ans10 = ans10 + strA ;
    
    }
    return ans10 ;
}

string_num("hi",9)





//Write a function that takes a string, and returns the reverse of that string.
function reverseStr(strB) {
    
    strFinal = "" ;
    for (i = strB.length ; i >= 0 ; i--) {
        strFinal = strFinal + strB.charAt(i) ;
        
    }
    
    return strFinal ;
}
reverseStr("shreyakaicker") ;



//Write a function that takes a number and returns the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  }
    
  return n * factorial(n - 1);
}
console.log(factorial(5));

/*
recursion starts from bottom

 5 * factorial(5-1); 5 * 24 = 120
 4 * factorial(4-1); 4 * 6 = 24
 3 * factorial(3-1); 3 * 2 = 6
 2 * factorial(2-1); 2 * 1 = 2
 1 * factorial(1-1); 1 * 1 = 1

*/ 
 
 


//Write a function that takes a phrase as a string, and returns the longest word in that phrase
function longestWord(string1) {
    var str = string1.split(" ");
    var longest = 0;
    var word = 0;
    for (var i = 0; i < str.length ; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

longestWord("My name is ShreyaKaicker");




//Write a function that takes a phrase, and returns the same phrase with every word capitalized
function capitalise(str) {
    
    var newArr = str.split(" ");
    var newArr1 = [];
    
    for(i=0; i < newArr.length; i++) {
     
        var newWord = newArr[i].charAt(0).toUpperCase() + newArr[i].substring(1).toLowerCase();
        newArr1.push(newWord);
    }
    
    return newArr1.join(" ");
}

capitalise("my name is shreya");





//Write a function that takes an array and returns the largest number of the array
function largestNum(enterArray) {
    
    var highest = 0;
    for(var i=0; i<enterArray.length; i++) {
        if(enterArray[i] > highest) {
            highest = enterArray[i];
        }
    }
    
    return highest;
}
largestNum([10,2000,30,40,66]);




//Write a function that takes an array, and returns a filtered array.
function oldArr(arr) {
    
  var arrNew = arr.filter(Boolean) ;
  return arrNew ;
}
oldArr([7, "ate", "", false, 9, NaN, ""]);





//Write a function that takes an array of numbers, and returns the sum of all the numbers in the array
function sumOfArray(myArray) {

    var total = 0;
    for (var i = 0; i < myArray.length; i++) {
        total = total + myArray[i];
    }
    return total
}

sumOfArray([1,2,3,6]) ;




//Write a function that takes two arrays, and returns an array of all elements that are only in one array.
function diff(arr1,arr2) {
    var unique = [];
    for(var i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1){
            unique.push(arr1[i]);
        }
    }
     for(var i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
            unique.push(arr2[i]);
        }
    }
    return unique;
}

diff([1,2,3,4],[2,3,6,7]);