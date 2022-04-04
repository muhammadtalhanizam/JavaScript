//////  Chap# 1 (ALERT)  //////

//* Question # 1 & 2 *//

// alert("Error! Please Enter a valid Password.");


//* Question # 3 *//

// alert("Welcome to JS Land...\n Happy Coding!" );


//* Question # 4 *//

// alert("Welcome to JS Land...");


//* Question # 5 *//

// alert("Happy Coding! \n Prevent this page from creating additional dialogs.");


//* Question # 6 *//

// console.log("Hello... I can run JS through my web browser's console");




//////  Chap# 2 (VARIABLES FOR STRINGS)  //////

//* Question # 1 *//

// var username;


//* Question # 2 *//

// var myName = "Talha Nizam";


//* Question # 3 *//

// var message = "Hello World";
// alert(message);


//* Question # 4 *//

// var myName = "Talha Nizam";
// var age = 20 + " years old";
// var certification = "Certified Web and Mobile Application Development";
// alert(myName);
// alert(age);
// alert(certification);


//* Question # 5 *//

// var pizza = "PIZZA\n" + "PIZZ\n" + "PIZ\n" + "PI\n" + "P" ;
// alert(pizza);


//* Question # 6 *//

// var email = "hafiztalhanizam36@gmail.com";
// alert("My email address is " + email);


//* Question # 7 *//

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);


//* Question # 8 *//

// document.write("Yah! I can write HTML content through JavaScript.");


//* Question # 9 *//

// var style = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(style);



//////  Chap# 3 (VARIABLES FOR NUMBERS)  //////

//* Question # 1 *//

// var age = 20;
// alert("I am " + age + " years old" );


//* Question # 2 *//

// var N = 14;
// alert("You have visited this site " + N + " times");


//* Question # 3 *//

// var birthYear = 2001;
// document.write("My birth year is " + birthYear + "\n Data type of my declared variable is number");


//* Question # 4 *//

// var visitorName = "John Doe";
// var quantity = 5;
// var productTitle = "T-shirt";
// document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");



//////  Chap# 4 (VARIABLE NAMES: LEGAL & ILLEGAL)  //////

//* Question # 1 *//

// var var1="1st Variable", var2="2nd Variable.", var3= "3rd Variable.";


//* Question # 2 *//

// var $1var, _var1, Var1, var1, VAR1;
// var 1var, -var1, .var1, %var1, ^var1;


//* Question # 3 *//

// document.write("Rules for naming JS variables <br> <br>Variable names can only contain numbers, $ and _. For example $my_1stVariable. <br>Variables must begin with a letter, $ or For example $name, _name or name. <br>Variable names are case sensitive. <br>Variable names should not be JS keywords.");

     

//////  Chap# 5 (MATH EXPRESSIONS)  //////

//* Question # 1 & 2 *//
  
// var num1 = 3;
// var num2 = 5;

// sum = num1 + num2;
// document.write("Sum of " +num1+ " and " +num2+ " is " +sum +"<br>");


// difference = num2 - num1;
// document.write("Diffrence of " +num2+ " and " +num1+ " is " +difference +"<br>");


// product = num1 * num2;
// document.write("Product of " +num1+ " and " +num2+ " is " +product +"<br>");


// quotient = num2 / num1;
// document.write("Quotient of " +num2+ " and " +num1+ " is " +quotient +"<br>");


// modulus = num2 % num1;
// document.write("Modulus of " +num2+ " and " +num1+ " is " +modulus+"<br>");


//* Question # 3 *//

// var value = 5;
// document.write("<br> Initial Value: " +value);

// value++;
// document.write("<br> Value after increment is: " +value);

// value = value+7;
// document.write("<br> Value after addition is: " +value);

// value--;
// document.write("<br> Value after increment is: " +value);

// value = value%3;
// document.write("<br> The remainder is : " +value);


//* Question # 4 *//

// var ticketPrice = 600;
// var totalcost = ticketPrice*5;
// document.write("Total cost to buy 5 tickets to a movie is " +totalcost+"PKR");


//* Question # 5 *//

// var table = 4;
// var num1 = table*1,
//     num2 = table*2,
//     num3 = table*3,
//     num4 = table*4,
//     num5 = table*5,
//     num6 = table*6,
//     num7 = table*7,
//     num8 = table*8,
//     num9 = table*9,
//     num10 = table*10;

// document.write("Table of 4 <br>"
                    
//                     +table+ "x 1 =" +num1+ "<br>"
//                     +table+ "x 2 =" +num2+ "<br>"
//                     +table+ "x 3 =" +num3+ "<br>"
//                     +table+ "x 4 =" +num4+ "<br>"
//                     +table+ "x 5 =" +num5+ "<br>"
//                     +table+ "x 6 =" +num6+ "<br>"
//                     +table+ "x 7 =" +num7+ "<br>"
//                     +table+ "x 8 =" +num8+ "<br>"
//                     +table+ "x 9 =" +num9+ "<br>"
//                     +table+ "x 10 =" +num10+ "<br>"
//                     );
                    


//* Question # 6 *//

// var C = 25;
// var CToF = (C * 9/5) +32;

// document.write(C+"°C is "+CToF +"°F <br>");


// var F = 70;
// var FToC = (F - 32) *5/9;

// document.write(F+"°F is "+FToC +"°C");



//* Question # 7 *//

// var pItem1= 650,
//     qItem1= 3,
//     pItem2= 100,
//     qItem2= 7,
//     shipCharges = 100;

// var totalCost = (pItem1 * qItem1) + (pItem2 * qItem2) + shipCharges;
// document.write("<h1> Shopping Cart </h1>")
// document.write(
//     "<br> Price of item 1 is "+ pItem1+
//     "<br> Quantity of item 1 is "+ qItem1+
//     "<br> Price of item 2 is "+ pItem2+
//     "<br> Quantity of item 2 is "+ qItem2+
//     "<br> Shipping Charges is "+ shipCharges+
//     "<br> Total Cost of Your Order is: "+totalCost);


//* Question # 8 *//

// var obtmarks= 804,
//     totalmarks= 980,
//     percentage = (obtmarks/totalmarks)*100;

// document.write("<h1> Marks Sheet </h1>")

// document.write("Total Marks: "+ obtmarks);
// document.write("<br> Marks Obtained: "+ totalmarks);
// document.write("<br> Percentage: " +percentage + "%");


//* Question # 9 *//

// var dollar = 104.80,
//     riyal = 28,
//     totalPKR = (10*dollar)+(25*riyal);

// document.write("<h1> Currency in PKR </h1>")

// document.write("Total Currency in PKR: " +totalPKR);



//* Question # 10 *//

// var result = ((1+5)*10)/2;
// document.write(result);


//* Question # 11 *//

// var cYear= 2016,
//     bYear=1992,
//     age = cYear-bYear;

// document.write("<h1> Age Calculator </h1>")

// document.write("<br> Current Year: " +cYear);
// document.write("<br> Birth Year: " +bYear);
// document.write("<br> Your Age is: " +age);


//* Question # 12 *//

// var radius= 20,
//     circumference = 2* 3.142 * radius,
//     area = 3.142 *radius**2;


// document.write("<h1> The Geometrizer </h1>");
// document.write("<br> Radius Of Circle: " +radius);
// document.write("<br> The circumference is: " +circumference);
// document.write("<br> The area is: " +area);


//* Question # 13 *//

// var favoriteSnack = "Chocolate Chip",
//     currentAge = 15,
//     maxAge = 65,
//     amountOfsnack= 3,
//     result = (maxAge-currentAge)*3;




// document.write("<h1> The Lifetime Supply Calculator </h1>");
// document.write("Favourite Snack: " +favoriteSnack+
//                 "</br> Current Age: " +currentAge+
//                 "</br> Estimated Maximum Age: " +maxAge+
//                 "</br> Amount of Snacks per day: " +amountOfsnack+
//                 "</br> You will need "+result+" to last you until the ripe old age of "+maxAge)



//////  Chap# 6 To 9 (MATH EXPRESSIONS)  //////

//* Question # 1 *//

// var a = 10;

// document.write("Result: </br> The Value of a is: " +a+
//                 "</br>-------------------------------" +
//                 "</br> </br> The value of ++a is: " + ++a +
//                 "</br> Now the value of a is:  " +a+
//                 "</br> </br> The value of a++ is: " + a++ +
//                 "</br> Now the value of a is:  " +a+
//                 "</br> </br> The value of --a is: " + --a +
//                 "</br> Now the value of a is:  " +a+
//                 "</br> </br> The value of a-- is: " + a-- +
//                 "</br> Now the value of a is:  " +a);


//* Question # 2 *//

// var a = 2,
//     b = 1;
//     document.write("a is : " +a);
//     document.write("</br>b is : " +b);
// var result = --a - --b + ++b + b--; 

// document.write("</br>Result is : " +a +result);  


//* Question # 3 *//

// var name = prompt("Enter Your Name: ");
// document.write("<h2>Hello! "+ name + "<br>Welcome To JavaScript World.</h2>")


//* Question # 4 *//
/// This Question is Missing///


//* Question # 5 *//

// var num = prompt("Enter Number", "5")
// var lenght = prompt("Enter Lenght", "10")
 
// var i = 0;

// for (i = 1; i <= lenght; i++) {
//   document.write("</br>" + num + " x " + i + " = " + num * i + " ");
// }



//* Question # 6 *//

// var sub1 = prompt("Enter Your 1st Subject Name: " ,"English"),
//     sub2 = prompt("Enter Your 2nd Subject Name: " ,"Math"),
//     sub3 = prompt("Enter Your 3rd Subject Name: " ,"Urdu");

var totalMarks = 100;
    // obtmarks1 = prompt("Enter Your " +sub1+ "Obtained Marks: ", "60"),
    // obtmarks2 = prompt("Enter Your " +sub2+ "Obtained Marks: ", "60"),
    // obtmarks3 = prompt("Enter Your " +sub3+ "Obtained Marks: ", "60");


var i = 0;

document.write("<b> &nbsp &nbsp Subject  Total Marks  Obtained Marks  Percentage</b>")
for(i = 1; i <= 2; i++){
 sub = prompt("Enter Your Subject"+i  +" Name: " ),
 obtmarks = prompt("Enter Your " +sub+ "Obtained Marks: "),

    document.write("<br>"+i+" &nbsp   "+ sub +" &nbsp &nbsp &nbsp &nbsp "+ totalMarks +" &nbsp &nbsp &nbsp &nbsp &nbsp "+ obtMarks + " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp "+ (obtMarks/totalMarks)*100+"%"  );
   
}
var totalMarks = totalMarks * 3,
    averageMarks = totalMarks / 4;
obtMarks += obtMarks ;
document.write("" +totalMarks +obtMarks)







