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