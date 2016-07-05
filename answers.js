// this is a comment

function stringFirstChar(sentence) {
    return sentence.substring(0,1)
}
stringFirstChar("hello");




function stringLastChar(sentence1) {
    var stringLength = sentence1.length ;
    return sentence1.substring(stringLength,stringLength-1)
}
stringLastChar("hello");




function strAndNum(str1,num1) {
    return str1.charAt(num1);
}
strAndNum("hello",2);



function addNumbers(numA,numB) {
    return numA + numB ;
}
addNumbers(3,6) ;    
// if we put something other than numbers it gives us a cancatinating string or string and number together


function multiply2Num(numC,numD) {
    return numC * numD ;

}
multiply2Num(2,3)
// if we put something other than a no. it says NaN (not a number)


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




function string_num(strA,numG) {
    
    var ans10 = "";
    
    for(i = 0 ; i < numG ; i++ ) {
         ans10 = ans10 + strA ;
    
    }
    return ans10 ;
}

string_num("hi",9)




function reverseStr(strB) {
    
    strFinal = "" ;
    for (i = strB.length ; i >= 0 ; i--) {
        strFinal = strFinal + strB.charAt(i) ;
        
    }
    
    return strFinal ;
}
reverseStr("shreyakaicker") ;



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
 
 

function longestWord(string1) {
    var str = string1.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length ; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

longestWord("My name is ShreyaKaicker");







