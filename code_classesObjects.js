document.write("\n" + "</br>");

class Book{
    constructor(title, auther){
        this.title = title;
        this.auther =auther;

    }

    readBook(){
        document.write("Reading" + this.title + " by " + this.auther + "<br>");

    }
}
    var book1 = new Book("Harry Potter", "JK, Rowlling");

    document.write(book1.title +"<br>");
    book1.readBook();
