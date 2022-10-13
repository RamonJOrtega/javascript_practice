document.write("\n" + "</br>");

//var x = y + 0;

try{
    var x=y+9;
    //throw something went wrong
} catch(err){
    document.write(err)
}finally{
    //this code alwaysgets executed
}