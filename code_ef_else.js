document.write("\n" + "</br>");

var isStudent = false;
var isSmart = false;

if(isStudent && isSmart){
    document.write("You are a smart student");
} else if(isStudent && !isSmart){
    document.write("You are not a smart student");
} else {
    document.write("You are not a student and you are dumb");
}
document.write("<br>");

//>, <, >-, <=, !=, --, String.equals()

if(1>3) {
    document.write("number comparison was true");
}
document.write("<br>");

if("dog" == "dog"){
    document.write("string comparison was true");
}