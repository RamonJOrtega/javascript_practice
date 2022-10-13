document.write("\n" + "</br>");

var index = 1;
while(index <= 5){
    document.write(index + "</br>");
    index ++;
}

var index = 1;
do {
    document.write(index);
    index ++;
}while(index <= 5);

document.write("\n" + "</br>");

var luckyNums = [4, 8, 15, 16, 123, 42];
luckyNums.forEach(function(luckyNums){
    document.write(luckyNums + "</br>");
});