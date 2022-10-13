document.write("\n" + "</br>");

class Chef{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    makeChicken(){
        document.write("THE CHEF MAKES CHICKEN <br>");
    }
    makeSalad(){
        document.write("THE CHEF MAKES salad <br>");
    }
    makeSpecialDish(){
        document.write("THE CHEF MAKES a special dish <br>");
    }
}

class ItallianChef extends Chef{
    constructor(name, age, countryOfOrigin){
        super(name, age);
        this.countryOfOrigin = countryOfOrigin;
    }
    makePasta(){
        document.write("THE CHEF MAKES pasta <br>");
    }
    //overridden

    makeSpecialDish(){
        document.write("THE CHEF MAKES a chen parm <br>");
    }

}

var myChef = new Chef("Gordon Ramsay", 50);
myChef.makeSpecialDish();

var myItalianChef = new ItallianChef("Massimo Bottura", 55, "Italy");
myItalianChef.makeSpecialDish();
document.write(myItalianChef.age);