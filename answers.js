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