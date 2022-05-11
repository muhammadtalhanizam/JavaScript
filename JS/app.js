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

// var total= 100;
//     obtmarks1 = prompt("Enter Your " +sub1+ "Obtained Marks: ", "60"),
//     obtmarks2 = prompt("Enter Your " +sub2+ "Obtained Marks: ", "70"),
//     obtmarks3 = prompt("Enter Your " +sub3+ "Obtained Marks: ", "80");



// document.write("Subject Total Marks Obtained Marks Percentage<br>")
// document.write(sub1 +"     "+ total + " " + obtmarks1  + " " + (obtmarks1/total*100)+"%<br>")
// document.write(sub2 +"     "+ total + " " + obtmarks2 + " " + (obtmarks2/total*100)+"%<br>")
// document.write(sub3 +"     "+ total + " " + obtmarks3  + " " + (obtmarks3/total*100)+"%<br>")
// var total_obt = obtmarks1+obtmarks2+obtmarks3
// document.write("      " + total*3 + "        "+  + " "+ ((total_obt/(total*3))*100)+"%")


// CHAPTER 9-11
// QUESTION 1
// var city = prompt("Enter city");
// if(city == "karachi" || "Karachi"){
// document.write("Welcome to city of lights")
// }

// QUESTION 2
// var gender = prompt("Enter your gender");
// if(gender == "male"){
// document.write("Good Morning Sir")
// };
// if (gender == "female"){
// document.write("Good Morning Ma'am")
// };

// QUESTION 3
// var color = prompt("Enter t color of road traffic signal");
// if(color == "Red"){
// document.write("Must Stop")
// };
// if (color == "Yellow"){
// document.write("Ready to move")
// };
// if (color == "Green"){
// document.write("Move now")
// };

// QUESTION 4
// var remanfuel = prompt("Enter t color of road traffic signal");
// if(remanfuel < 0.25){
// document.write("Please refill the fuel in your car")
// };

// QUESTION 5
// // a
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// // b
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// // c
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// // d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// // e.
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// // f.
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// QUESTION 6
// var sub1 = ~(prompt("Enter SUBJECT 1 MARKS"));
// var sub2 = ~(prompt("Enter SUBJECT 2 MARKS"));
// var sub3 = ~(prompt("Enter SUBJECT 3 MARKS"));
// var obtotal = sub1 + sub2 + sub3;
// var total = 100 * 3;
// var per = (obtotal / total) * 100;
// if (per >= 80) {
//   document.write("Total marks " + total + "<br>");
//   document.write("Marks obtained " + obtotal + "<br>");
//   document.write("Percentage " + per + "<br>");
//   document.write("Grade: A-one<br>");
//   document.write("Remarks: Excelent");
// }
// else if (per >= 70) {
//   document.write("Total marks " + total + "<br>");
//   document.write("Marks obtained " + obtotal + "<br>");
//   document.write("Percentage " + per + "<br>");
//   document.write("Grade: A<br>");
//   document.write("Remarks: Good");
// }
// else if(per >= 60) {
//   document.write("Total marks " + total + "<br>");
//   document.write("Marks obtained " + obtotal + "<br>");
//   document.write("Percentage " + per + "<br>");
//   document.write("Grade: B<br>");
//   document.write("Remarks: You need to improve");
// }
// else {
//   document.write("Total marks " + total + "<br>");
//   document.write("Marks obtained " + obtotal + "<br>");
//   document.write("Percentage " + per + "<br>");
//   document.write("Grade: Fail<br>");
//   document.write("Remarks: Sorry");
// }

// QUESTION 7
// var secret = 4;
// var guess = ~(prompt("Enter guessing no"));
// a
// if (guess == secret){
//     document.write("Bingo! Correct answer")
// }
// else if (guess+1 == secret){
//     document.write("Close enough to the correct answer")
// }

// Question 8
// var num = prompt("Enter number");
// if(num /3 == 1){
//     document.write("yes the no is divisible by 3")
// }

// Question 9
// var temp = prompt("Enter Temperature");
// if (temp >= 40) {
//   document.write("It is too hot outside.");
// }
//     else if (temp >= 30) {
//     document.write("The Weather today is Normal.");
//     }
//         else if (temp >= 20) {
//         document.write("Today’s Weather is cool.");
//         }
//             else{
//             document.write("OMG! Today’s weather is so Cool..");
//             }

// Question 11
// var firstNo = prompt("Enter First No");
// var secondNo = prompt("Enter Second No");
// var ope = prompt("Enter Operation  (+, -, *, /, %)");

// if(ope == "+"){
//     var opp = ~(firstNo) + ~(secondNo);
//     document.write(opp);
// }
// else if(ope == "-"){
//     var opp = firstNo - secondNo;
//     document.write(opp);
// }
// else if(ope == "*"){
//     var opp = firstNo * secondNo;
//     document.write(opp);
// }
// else if(ope == "/"){
//     var opp = firstNo / secondNo;
//     document.write(opp);
// }
// else {
// document.write("Please enter the correct operation")
// }

//CHAPTER 12-13
// //QUESTION 1
// var A = 65, Z=90, a=97, z=122;
// var userinput = prompt("Enter Character");

// if

//QUESTION 2
// var int1 = prompt("Enter number");;
// var int2 = prompt("Enter number");

// if(int1 >> int2){
//     document.write(int1 + " is larger")
// }
// else if(int1 == int2){
//     document.write(" both equal")
// }
// else{
//     document.write(int2 + " is larger")
// }

//QUESTION 3
// var int1 = prompt("Enter number");;

// if(int1 === 0){
//     document.write(int1 + " is Zero")
// }
// else if(int1 <= 1){
//     document.write(int1+" is negative")
// }
// else{
//     document.write(int1+" is positive")
// }

//QUESTION 4

// var ope = prompt("Enter Character ");

// if(ope == "a"|| ope == "e"|| ope == "i"|| ope == "o"|| ope == "u"){
//     document.write(ope + " is a vowel");
// }
// else{
//     document.write(ope + " is not a vowel");
// }

// // QUESTION 5
// var password = "password";
// var userinput = prompt("Enter password")
// if(userinput == password){
//     document.write("Correct! The password you entered matches the original password")
// }
// else{
//     document.write("Incorrect password <br>Please enter your password")
// }

// QUESTION 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day"
// document.write(greeting );}
// else{
//     greeting = "Good evening"
//     document.write(greeting );
// }

// QUESTION 7
// var time = prompt("Enter time 24 hours format eg : 1900");
// if(time>=0000 && time < 1200){
//     document.write("Good Morining")
// }
// else if(time>=1200 && time < 1700){
//     document.write("Good Afternoon")
// }
// else if(time>=1700 && time < 2100){
//     document.write("Good Evening")
// }
// else if(time>=2100 && time < 2359){
//     document.write("Good Night")
// }
// else{
//     document.write("Enter correct time")
// }

// Assignment 13-15
// Arrays

// QUESTION 1
// var stdName = []

// QUESTION 2
// var stdName = new Object();

// QUESTION 3
// var array1 = ["blue","green","yellow","red"];

// QUESTION 4
// var array1 = [1,2,3,4];

// QUESTION 5
// var array1 = [0,1];

// QUESTION 6
// var mixArray = ["green",0,2,"banana",3,4];

// QUESTION 7
// var edu = ["1) SSC <br>","2) HSC <br>", "3) BCS <br>","4) BS <br>", "5) BCOM <br>", "6) MS <br>", "7) M.Phil. <br>", "8) PhD <br>"];
// document.write("<h2>Qualification</h2><br>")
// document.write(edu)

// QUESTION 8
// var stdName = ["Michael","John","Tony"];
// var stdScore = [320,230,480];
// var total = 500;

// var per = [stdScore[0]/total *100,stdScore[1]/total *100,stdScore[2]/total *100];
// document.write("Score of "+ stdName[0]+" is "+ stdScore[0]+". Percentage: "+ per[0]+"%<br>" )
// document.write("Score of "+ stdName[1]+" is "+ stdScore[1]+". Percentage: "+ per[1]+"%<br>" )
// document.write("Score of "+ stdName[2]+" is "+ stdScore[2]+". Percentage: "+ per[2]+"%<br>" )

// QUESTION 9
// var color = ["red","blue","green","yellow","orange"];
// // document.write(color);

// // QUESTION 9a
// var userinput = prompt("Enter color to add at the beginning");
// color.unshift(userinput);
// document.write(color);

// // QUESTION 9b
// var userinput = prompt("Enter color to add at the end");
// color.push(userinput);
// document.write(color);

// // QUESTION 9c
// color.unshift("black","pink");
// document.write(color);

// // QUESTION 9d
// color.shift(color);
// document.write(color);

// // QUESTION 9e
// color.pop(color);
// document.write(color);

// // QUESTION 9f
// var index = ~prompt("Enter index value");
// var usercolor = prompt("Enter color to add");
// color.splice(index, 0, "yellow");
// document.write(color);

// // QUESTION 9g
// var index = ~prompt("Enter index value");
// var del = prompt("how many colors you want to delete");
// color.splice(index, del);
// document.write(color);

// QUESTION 10
// var stuScore = [320,230,480,120];
// document.write("Score of Students "+stuScore+ "<br>");
// stuScore.sort();
// document.write("Ordered Score of Students "+stuScore);

// QUESTION 11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawer"];
// document.write("Cities List <br>"+ cities +"<br>");
// var copycities = cities.slice(1,4);
// document.write("Selected cities List <br>"+ copycities);

// QUESTION 12
// var arr = ["This", "is", "my", "cat"];
// document.write(arr.join(" "))

// // QUESTION 12
// var arr = [];
// arr[0] = prompt("Enter 1 array value");
// arr[1] = prompt("Enter 2 array value")
// arr[2] = prompt("Enter 3 array value")
// arr[3] = prompt("Enter 4 array value")
// document.write(arr+ "<br>")
// document.write("Out <br>" + arr[0]+ "<br>")
// document.write("Out <br>" + arr[1]+ "<br>")
// document.write("Out <br>" + arr[2]+ "<br>")
// document.write("Out <br>" + arr[3]+ "<br>")

// QUESTION 12
// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("Out <br>" + arr[0]+ "<br>")

// Assignment # 17-20
// Arrays and loop

// QUESTION 1
// multi dimensional array
// var mulArr = [[],[],[]]

// QUESTION 2
// multi dimensional array
// var mulArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(mulArr[0,1,2,3])

// QUESTION 3
// Numeric counting
// for(var i=0; i<10; i++){
//     document.write(i + "<br>")
// }

// QUESTION 4
// multiplication table
// var tableno = prompt("Enter no");
// var length = prompt("Enter table length");
// document.write("Multiplication table of "+ tableno +"<br>")
// document.write("Table lenght "+ length +"<br>")
// for(var i=1; i<length; i++){
//     document.write(tableno + " x " + i +" = "+ tableno*i + "<br>")
// }

// // QUESTION 5
// var fruits = ["apple", "banana", "mango", "orange",
//     "strawberry"]
//     document.write(fruits[0]+ "<br>")
//     document.write(fruits[1]+ "<br>")
//     document.write(fruits[2]+ "<br>")
//     document.write(fruits[3]+ "<br>")
//     document.write(fruits[4]+ "<br>")
//     document.write( "<br>")
//     for(var i=0; i<5; i++){
//         document.write("Element at indexs "+i+" is "+fruits[i]+ "<br>")
//     }

// QUESTION 6
// // counting
// document.write("<b>Counting</b><br>");
// for (var i = 0; i < 15; i++) {
//   document.write(i + " ");
// }
// document.write("<br> ");

// // Reverse counting
// document.write("<b>Reverse Counting</b><br>");
// for (var i = 10; i > 0; i--) {
//   document.write(i + " ");
// }
// document.write("<br> ");

// // Even
// document.write("<b>Even</b><br>");
// for (var i = 0; i < 20; i++) {
//   if (i % 2 == 0) {
//     document.write(i + " ");
//   }
// }
// document.write("<br> ");

// // ODD
// document.write("<b>Odd</b><br>");
// for (var i = 0; i < 20; i++) {
//   if (i % 2 != 0) {
//     document.write(i + " ");
//   }
// }
// document.write("<br> ");

// // Series
// document.write("<b>Series</b><br>");
// for (var i = 1; i < 20; i++) {
//     if (i % 2 == 0) {
//       document.write(i + "k ");
//     }
//   }

// QUESTION 7
// var array = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("search dishes Gusses  "+" "+ array);

// for (i=0; i==search;i++){
//     if (array[i]==search) {
//         var search=array[i];
//         document.write(search+"found")
//     }
//     else{
//         document.write(search + " not found ");
          
//       }
// }


//    QUESTION 8
// var array = [24, 53, 78, 91, 12];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
// document.write(largest)


//    QUESTION 9
// var array = [24, 53, 78, 91, 12];
// var smallest = arr[0];

// 		for(var i=1; i<arr.length; i++){
// 			if(arr[i] < smallest){
// 				smallest = arr[i];   
// 			}
// 		}
// document.write(smallest)

// //   QUESTION 10
// var num =5 ;
// for (i=1;i<100;i++){
//     document.write(num*i+"<br>")
// }


// Assignment # 21-23
// Question 1
// var first_name = prompt("Enter first name"); 
// var last_name = prompt("Enter last name"); 
// var fullName = first_name +" " +last_name;
// alert("welcome"+ fullName);

// QUESTION 2
// var mobile = prompt("Enter your fovourite mobile phone"); 
// var len = mobile.length;
// document.write("my favourite phone is:"+ mobile+ "<br>"+
// "length of string:"+ len);

// QUESTION 3
// var country = "pakistani";
// var result = country.indexOf("n");
// document.write("String:"+ country+ "<br>"+
// "Index of 'n':"+ result);

// QUESTION 4
// var txt = "Hello World";
// var result = txt.indexOf("l");
// document.write("String:"+ txt + "<br>"+
// "last Index of 'l':"+ (result-1));

// // QUESTION 5
// var country = "pakistani";
// var result = country.indexOfindexOf(3);
// document.write("String:"+ country+ "<br>"+
// "Index of 'n':"+ result);

// Question 6
// var first_name = prompt("Enter first name"); 
// var last_name = prompt("Enter last name"); 
// var fullName = first_name +" " +last_name;
// alert("welcome"+ fullName);

// QUESTION 7
// var p = "Hyderabad"
// document.write(p.replace("Hyder","Islam"))

// QUESTION 8
// var p = "Ali and Sami are best friends. They play cricket and football together"
// document.write(p.replace("and","&"))

// QUESTION 9
// var a = "472";
// var b = parseInt(a);
// document.write("value:"+a+"<br> Type:String <br>value:"+b+"<br> Type: number");

// // QUESTION 10
// var user_input = "peanuts"
// var upper = user_input.toUpperCase();
// document.write(upper)

// QUESTION 11
// var user_input = "javascript"
// var title = user_input.toLocaleUpperCase();
// document.write(title)

// QUESTION 12
// var num = 33.56;
// var str = num.toLocaleString();
// document.write(str);

// QUESTION 13
// var userName=prompt("Enter your Input: ");
// var message;
// var split=[];
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     split[i]=userName.split("&nbsp;");
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("please enter a valid userName");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             split[i]=userName.split("&nbsp;");
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message);
// QUESTION 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var user_input = prompt("Welcome to ABC Bakery. What do you want to order sir/maam<br>");
// var userinputU = user_input.toUpperCase()
// var userinputl = user_input.toLowerCase()
// for(var i=0;i<user_input;i++){
//     if(A[i]!==user_input || userinputU || userinputl){
//         document.write(user_input + "is not avaliable")
//     }
//     else{
//         document.write(user_input + "is avaliable" )

//     }
// }

// QUESTION 15
// var pass = prompt("Enter Password")
// var vld = /^[A-Za-z]\w{7,14}$/;
// if(pass.match(vld)){
//     document.write("correct");
// }
// else{
// document.write("please enter a vlid password");
// }

// QUESTION 16
// var university = "University of Karachi";
// var ar = university.split('')
// document.write(ar);

// QUESTION 17
// var userinput = prompt("Enter text");
// var lst = userinput.charAt(userinput.length-1)
// document.write("User Input:" + userinput +"<br>");
// document.write("Last character "+lst);

// QUESTION 18
// var temp = "The quick brown fox jumps over the lazy dog";
// var count = (temp.match(/the/g)|| []).length + (temp.match(/The/g)|| []).length;
// document.write("TEXT:" + temp +"<br>");
// document.write("There are "+count+ " occurrence(s) of word 'the'");


// ASSIGNMENT 17
// QUESTION 1
// var num = 3.45214
// document.write("number:"+num+"<br>");
// document.write("round off value:"+ Math.round(num)+"<br>") 
// document.write("floor value:"+ Math.floor(num)+"<br>") 
// document.write("ceil:"+ Math.ceil(num)+"<br>") 

// QUESTION 2 
// var num = -2.673
// document.write("number:"+num+"<br>");
// document.write("round off value:"+ Math.round(num)+"<br>") 
// document.write("floor value:"+ Math.floor(num)+"<br>") 
// document.write("ceil:"+ Math.ceil(num)+"<br>") 

// QUESTION 3
// var number = -4
// if (number < 0){
//            var n = (-1) * number;
//         document.write("Absolute value of " + number + " is "+ n);
// }

// QUESTION 4 
// var randomDice ;
// randomDice = Math.ceil(Math.random() * 6);
// document.write("Random dice value: " + randomDice)
 
// QUESTION 5
// var randomCoin ;
// randomCoin = Math.ceil(Math.random() * 2);
// if(randomCoin == 2){
//     document.write(randomCoin+"<br> heads")
// }
// else{
//     document.write(randomCoin+"<br> teals")

// }

// QUESTION 6
// var randomNum ;
// randomNum = Math.ceil(Math.random() * 100);
// document.write("Random number between 1 and 100: " + randomNum)

// QUESTION 7
// var userinput = prompt("enter your weight in kilogram");
//     document.write("The weight of the user is "+userinput+" kilograms ")



// QUESTION 8
// var num = 6 
// var userinput = prompt("enter num between 1 to 10")
// if(userinput == num){
//     document.write("Congratulation")
// }
// else{
//     document.write("Try again")
// }







