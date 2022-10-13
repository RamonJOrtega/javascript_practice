document.write("\n" + "</br>");

class Book{
    constructor(title, auther){
        this.title = title;
        this.auther =auther;

    }

 get title(){
    document.write("<p>getting</p>");
    return this._title;
 }

 set title(title){
    document.write("<p>setting</p>");
    return this._title = title;
 }

 readbook(){
    document.write("Reading " + this.title + " by " + this.auther + "<br>");
 }
}

 var book1 = new Book("Harry Potter", "JK Rowling");

 document.write(book1.title + "<br>");
 book1.readbook();

 //best explanation is at https://www.youtube.com/watch?v=TLlGhogq56Y time stamp 41:24.
 // when book1.title is execututed, constructor runs get and settitle.
 // then, when book1.readbook runs, it activates the getter activated by this.title, 
 // which puts "harry potter"and "getting" on the htmlpage.
 // finally, the "reading harry poter by jk rawling is executed" from the book1.readbook.
 //CRAZY.
 // get and set notactualy run until object is initiated