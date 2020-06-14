    // Chapter 1

//alert("Welcome To the Website!");
//alert("Error! Please enter a valid password.");
//alert("Welcome to JS Land...\nHappy Coding!");

// alert("Welcome to JS Land...");
// alert("Happy coding!");
// console.log("Hello... I can run JS through my web browser's console");



    // Chapter 2

/*
var username;
var myName = "Shah Fahad";
var message = "Hello World!";
alert(message);
*/

/*
var name = prompt("Enter your name");
var age = prompt("Enter your age");
alert(name);
alert(age+" years old");
alert("Certified Mobile Application Development");
*/


/* task 5

var message = "PIZZA";
var arr = new Array(5);
var length = message.length;
var counter = length;

for(var i=0; i<length; i++)
{
    arr[i] = message.slice(0,counter);
    counter--;
    
}

alert(arr[0]+"\n"+arr[1]+"\n"+arr[2]+"\n"+arr[3]+"\n"+arr[4]);
*/

/* task 6

var email = "shahfahad746@gmail.com";
alert("My email address is "+email);
*/

/* task 7

var book = "A smarter way to learn JavaScript";
var message = "I am trying to learn from the book ";
alert(message+book);
*/

/* task 8

document.write("Yah! I can write HTML content through JavaScript");
*/

/* task 9

var sym = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(sym);
*/

        //Chapter 3

/* task 1

var age = 25;
alert("I am "+age+" years old");        
*/

/* task 2

var counter = 25;
counter++;

alert("You have visited this site "+counter+" times");
*/

/* task 3

var birthYear = 1996;
document.writeln("My birth year is "+birthYear);
document.write("<br>Data type of my declared variable is "+typeof(birthYear));
*/

/* task 4

var name = prompt("Enter your name");
var productTitle = prompt("Enter your product title");
var quantity = prompt("Enter quantity");

document.write(name+" ordered "+quantity+" "+productTitle+" on XYZ Clothing Store");
*/

        //Chapter 4

/* task 1

var name, contactNo, address;        
*/

/* task 2

"Illegal Variables"

var 1stName;
var function;
var var;
var x, var y;
var +add; 

"Legal Variables"

var x;
var x,y,z;
var myName;
var name1;
var car_initial_date;

*/

/* task 3

document.write("<h1>Rules for naming JS variables</h1><br>");
document.write("Variable names can only conatin Letters, Numbers, Underscore and Dollar Sign $<br>");
document.write("Variables must begin with Letter, Underscore or Dollar Sign $<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br>");
*/

// Chapter 5

/* task 1

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var sum = +firstNumber + +secondNubmer;
alert("Sum of "+firstNumber+" and "+secondNubmer+" is "+sum);

*/

/* task 2 

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var subtract = firstNumber - secondNubmer;
alert("Subtraction of "+firstNumber+" and "+secondNubmer+" is "+subtract);

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var multiplication = firstNumber * secondNubmer;
alert("Multiplication of "+firstNumber+" and "+secondNubmer+" is "+multiplication);

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var division = firstNumber / secondNubmer;
alert("Division of "+firstNumber+" and "+secondNubmer+" is "+division);

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var mod = firstNumber % secondNubmer;
alert("Modulus of "+firstNumber+" and "+secondNubmer+" is "+mod);

*/

/* task 3

var x;
document.write("Value after variabe declaration: "+x+"<br>");
x=3;
document.write("Initial Value: "+x+"<br>");
x++;
document.write("Value after increment is: "+x+"<br>");
x += 7;
document.write("Value after addition is: "+x+"<br>");
x--;
document.write("Value after decrement is: "+x+"<br>");
var remainder = x%3;
document.write("Remainder is: "+remainder+"<br>");
*/

/* task 4

var cost = 600;
document.write("Total cost to buy 5 tickets to a movie is "+(600*5)+"PKR");
*/

/* task 5

var tableNum = 3;

for(var i=0; i<10; i++)
{
    document.write(tableNum+"*"+(i+1)+"="+(tableNum*(i+1))+"<br>");
}

*/

/* task 6

var celsius = 37;
var fahrenheit = (celsius*(9/5)+32);
document.write(celsius+"<sup>o</sup>C is "+fahrenheit+"<sup>o</sup>F <br>");

celsius = ((fahrenheit-32)*(5/9));
document.write(fahrenheit+"<sup>o</sup>F is "+celsius+"<sup>o</sup>C <br>");

*/

/* task 7

var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;

var cost = (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges;

document.write("Price of Item 1 is "+priceItem1+"<br>");
document.write("Quantity of Item 1 is "+quantityItem1+"<br>");
document.write("Price of Item 2 is "+priceItem2+"<br>");
document.write("Quantity of Item 2 is "+quantityItem2+"<br>");
document.write("Shipping Charges "+shippingCharges);
document.write("<br><br>");
document.write("Total cost of your order is "+cost);

*/

/* Task 8

var marksObtained = 750;
var totalMarks = 900;
var percentage = (marksObtained/totalMarks)*100;
document.write("Total Marks: "+totalMarks);
document.write("Obtained Marks: "+marksObtained);
document.write("Percentage: "+percentage);

*/

/* Task 9

var dollars = 10;
var riyals = 25;
var rupees = (dollars*104.80)+(riyals*28);
document.write("Total Currency in PKR: "+rupees);
*/

/* Task 10

var x = 3;
var y = ((x+3)*10)/2;

*/

/* Task 11

var currentYear = prompt("Enter your current year: ");
var birthYear = prompt("Enter your birth year: "); 
document.write("Your age is: "+(currentYear-birthYear));

*/

/* Task 12

var radius = 20;
var pi = 3.142;
document.write('Radius of the circle is: '+radius+"<br>");
document.write("The circumference is: "+(2*pi*radius)+"<br>");
document.write("The area is: "+(pi*radius*radius));

*/

/* Task 13

var favSnack = prompt("Enter your favorite snack: ");
var currentAge = prompt("Enter your current age: ");
var maxAge = prompt("Enter max age: ");
var snacksPerDay = prompt("Enter amount of snacks per day: ");
var total = (maxAge-currentAge)*snacksPerDay;

document.write("Favourite Snack: "+favSnack+"<br>");
document.write("Current Age: "+currentAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of Snacks Per Day: "+snacksPerDay+"<br>");
document.write("You will need "+total+" "+favSnack+" to last until the ripe old age of "+maxAge);

*/


        // Chapter 6-9

/* Task 1

var a = prompt("Enter a number: ");
document.write("The value of a is: "+a+"<br><br>");
document.write("...........................<br>");

document.write("The value of ++a is: "+(++a)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The value of a++ is: "+(a++)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+a);

*/

/* Task 2

var a = 2, b = 1;

var result = --a - --b + ++b + b--;

document.write("a is: "+a+"<br>");
document.write("b is: "+b+"<br>");
document.write("result is: "+result);

*/

/* Task 3

var name = prompt("Enter your name: ");

alert("Welcome "+name+" to the website");

*/

/* Task 5

var x = prompt("Enter a number: ");
var defaultTable = 5;

if(x===null || x==="")
{
    for(var i=0; i<10; i++)
    {
        document.write(defaultTable+" * "+(i+1)+" = "+(defaultTable*(i+1))+"<br>");
    }
}
else{

    for(var i=0; i<10; i++)
    {
        document.write(x+" * "+(i+1)+" = "+(x*(i+1))+"<br>");
        
    }

}


*/


/* Task 6

var subject1 = prompt("Enter first subject: ");
var obtainedMarks1 = prompt("Enter Marks obtainend in first subject: ");
var subject2 = prompt("Enter second subject: ");
var obtainedMarks2 = prompt("Enter Marks obtainend in second subject: ");
var subject3 = prompt("Enter third subject: ");
var obtainedMarks3 = prompt("Enter Marks obtainend in third subject: ");

var totalMarks = 100;

var percentage1 = (obtainedMarks1/totalMarks)*100;
var percentage2 = (obtainedMarks2/totalMarks)*100;
var percentage3 = (obtainedMarks3/totalMarks)*100;

document.getElementById("subject1").innerHTML = subject1;
document.getElementById("obtainedMarks1").innerHTML = obtainedMarks1;
document.getElementById("percentage1").innerHTML = percentage1+"%";

document.getElementById("subject2").innerHTML = subject2;
document.getElementById("obtainedMarks2").innerHTML = obtainedMarks2;
document.getElementById("percentage2").innerHTML = percentage2+"%";


document.getElementById("subject3").innerHTML = subject3;
document.getElementById("obtainedMarks3").innerHTML = obtainedMarks3;
document.getElementById("percentage3").innerHTML = percentage3+"%";

document.getElementById("totalMarksSum").innerHTML = 300;
document.getElementById("obtainedMarksSum").innerHTML = (+obtainedMarks1 + +obtainedMarks2 + +obtainedMarks3);
document.getElementById("percentageSum").innerHTML = ((percentage1+percentage2+percentage3)/3)+"%";

*/

        // Chapter 9-11

/* Task 1

var city = "karachi";
var input = prompt("Enter Your City Name: ");

if(input.toLowerCase()===city)
{
    alert("Welcome to the city of lights");

}
else{

}

*/

/* Task 2

var input = prompt("Enter your gender: ");
var result = input.toLowerCase();

if(result==="male")
{
    alert("Good Morning, Sir");
}
else if(result==="female")
{
    alert("Good Morning, Ma'am");
}

*/

/* Task 3

var input = prompt("Enter color: ");
var result = input.toLowerCase();

if(result==="red")
{
    alert("Must stop");
}
else if(result==="yellow")
{
    alert("Ready to move");
}
else if(result==="green")
{
  alert("Move now");
}

*/

/* Task 4

var remainingFuel = prompt("Enter remaining fuel in litres: ");

if(Number(remainingFuel)<0.25)
{
    alert("Please refill the fuel in your car");
}

*/

/* Task 5


a. alert will be displayed
b. alert will not be displayed
c. condition 2 and 4 will be displayed
d. alert will be displayed
e. alert for true will be displayed

*/

/* Task 6

var obtainedMarks = prompt("Enter obtanied marks: ");
var totalMarks = prompt("Enter total marks: ");
var percentage = (obtainedMarks/totalMarks)*100;

if(percentage>=80)
{
  document.write("Total Marks: "+totalMarks+"<br>");
  document.write("Marks Obtained: "+obtainedMarks+"<br>");
  document.write("Percentage: "+percentage+"%"+"<br>")  
  document.write("Grade: A-one"+"<br>");
  document.write("Remarks: Excellent"+"<br>");
}
else if(percentage>=70)
{
  document.write("Total Marks: "+totalMarks+"<br>");
  document.write("Marks Obtained: "+obtainedMarks+"<br>");
  document.write("Percentage: "+percentage+"%"+"<br>")  
  document.write("Grade: A"+"<br>");
  document.write("Remarks: Good"+"<br>");
}
else if(percentage>=60)
{
  document.write("Total Marks: "+totalMarks+"<br>");
  document.write("Marks Obtained: "+obtainedMarks+"<br>");
  document.write("Percentage: "+percentage+"%"+"<br>")  
  document.write("Grade: B"+"<br>");
  document.write("Remarks: You need to improve"+"<br>");
}
else if(percentage<60)
{
  document.write("Total Marks: "+totalMarks+"<br>");
  document.write("Marks Obtained: "+obtainedMarks+"<br>");
  document.write("Percentage: "+percentage+"%"+"<br>")  
  document.write("Fail"+"<br>");
  document.write("Remarks: Sorry"+"<br>");
}

*/

/* Task 7

var secretNumber = 7;
var input = Number(prompt("Guess Secret Number: "));

if(input===7)
{
    alert("Bingo! Correct Answer");
}
else if((input+1)===7)
{
    alert("Close enough to the correct answer");
}

*/

/* Task 8

var input = prompt("Enter a number: ");

if(+input%3===0)
{
    alert("The number is divisible by 3");
}

*/

/* Task 9

var input = prompt("Enter a number: ");

if(+input%2===0)
{
    alert("The number is even");
}
else {
    alert("The number is odd");
}

*/

/* Task 10

var input = prompt("Enter temperature: ");

if(+input>40)
{
    alert("It is too hot outside");
}
else if(+input>30)
{
    alert("The weather today is Normal");
}
else if(+input>20)
{
    alert("Today's weather is cool");
}
else if(+input>10)
{
    alert("OMG! Today's weather is so cool");
}

*/

/* Task 11

var firstNumber = prompt("Enter first number: ");
var secondNumber = prompt("Enter second number: ");
var op = prompt("Enter operator: ");

if(op==="+")
{
    alert(+firstNumber + +secondNumber);
}
else if(op==="-")
{
    alert(firstNumber-secondNumber);
}
else if(op==="*")
{
    alert(firstNumber*secondNumber);
}
else if(op==="/")
{
    alert(firstNumber/secondNumber);
}
else if(op==="%")
{
    alert(firstNumber%secondNumber);
}

*/

        // Chapter 12-13

/* Task 1

var char = prompt("Enter a character: ");

var num = char.charCodeAt();

if(num>=65 && num<=90)
{
    alert("Capital Letter");
}

else if(num>=97 && num<=122)
{
    alert("Small Letter");
}

else if(num>=48 && num<=57)
{
    alert("A number");
}

*/

/* Task 2

var input1 = prompt("Enter First Number: ");
var input2 = prompt("Enter Second Number: ");

if(+input1<+input2)
{
    alert(input2);
}
else if(+input1>+input2)
{
    alert(input1);
}
else if(+input1===+input2)
{
    alert("Both input are equal");
}

*/

/* Task 3

var input = prompt("Enter a number: ");

if(+input>0)
{
    alert("Positive");
}
else if(+input===0)
{
    alert("Zero");
}
else
{
    alert("Negative");
}

*/

/* Task 4

var char = prompt("Enter a charachet: ");

if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
{
    alert(true);
}
else
{
    alert(false);
}

*/

/* Task 5

var pass = "FahAd";
var input = prompt("Enter password: ");
var flag = 0;


if(input===null || input==="")
{
  input = prompt("Please enter your password: ");

}

else{

    if(pass.length===input.length)
    {
        for(var i=0; i<pass.length; i++)
        {
            if(pass.charAt(i)===input.charAt(i))
            {
                flag = 1;
            }
            else{
                flag = 0;
                break;
            }
        }

        if(flag===1)
        {
            alert("Correct!");
        }
        else{
            alert("Incorrect Password");
        }
    }
    else{
        alert("Incorrect Passwrod");
    }
}

*/

/* Task 6

var greeting; 
var hour = 13; 
if (hour < 18) 
{ 
    greeting = "Good day";
} 
else{
    greeting = "Good evening"; 
}   

*/

/* Task 7

var time = prompt("Enter time");
time = +time;

if(time>=0000 && time<1200)
{
    alert("Good Morning");
}
else if(time>=1200 && time<1700)
{
    alert("Good Afternoon");
}
else if(time>=1700 && time<2100)
{
    alert("Good Evening");
}
else if(time>=2100 && time<=2359)
{
    alert("Good Night");
}

*/


// Chapter 14-16

/* Task 1

var arr = [];

*/

/* Task 2

var arr = new Array();

*/

/* Task 3

var arr = ["Shah","Fahad"];

*/

/* Task 4

var arr = [1,2,3];

*/

/* Task 5 

var arr = [true,false];

*/

/* Task 6

var arr = [5,"Shah",true];

*/

/* Task 7

var arr = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];

var len = arr.length;

for(var i=0; i<len; i++)
{
    document.write((i+1)+")"+" "+arr[i]+"<br>");
}

*/

/* Task 8

var studentsNames = [];
var scores = [];
var total = 500;

for(var i=0; i<3; i++)
{
    studentsNames[i] = prompt("Enter Student Name: ");
}

for(var i=0; i<3; i++)
{
    scores[i] = prompt("Enter score: ");
}

for(var i=0; i<3; i++)
{
    document.write("Score of "+studentsNames[i]+" is "+scores[i]+". Percentage: "+(scores[i]/total)*100+"%"+"<br>");
}

*/

// Task 9

/* Task 9(a)

var colors = ["red","orange"];

colors.unshift(prompt("What color do you want in the beginning?: "));

document.write(colors);

*/

/* Task 9(b)

var colors = ["red","orange"];

colors.push(prompt("What color do you want at the end?: "));

document.write(colors);

*/

/* Task 9(c)

var colors = ["red","orange"];

colors.unshift(prompt("What color do you want in the beginning?: "));

colors.unshift("purple","blue");

document.write(colors);

*/

/* Task 9(d)

var colors = ["red","orange"];

colors.shift();

document.write(colors);

*/

/* Task 9(e)

var colors = ["red","orange"];

colors.pop();

document.write(colors);

*/

/* Task 9(f)

var colors = ["red","orange"];

var index = prompt("Enter index number: ");

var color = prompt("Enter color name: ");

colors.splice(+index,0,color);

document.write(colors);

*/

/* Task 9(g)

var colors = ["red","orange","green","purple"];

var index = prompt("Enter index number: ");

var numberOfColors = prompt("How many colors do you want to delete?: ");

colors.splice(+index,+numberOfColors);

document.write(colors);

*/

/* Task 10

var scores = [];

for(var i=0; i<4; i++)
{
    scores[i] = prompt("Enter student scores: ");
}

document.write("Scores of Students: "+scores+"<br>");
var sortedScores = scores;
sortedScores.sort();
document.write("Ordered Scores of Students: "+sortedScores);

*/

/* Task 11

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = [];

for(var i=0; i<3; i++)
{
    selectedCities[i] = cities[i];
}

document.write(selectedCities);

*/

/* Task 12

var arr = ["This","is","my","cat"];

document.write("Array: "+arr+"<br>");
document.write("String: "+arr.join(" "));

*/

/* Task 13

var arr = [];

for(var i=0; i<4; i++)
{
    arr.push(prompt("Enter item: "));
}

for(var i=0; i<4; i++)
{
    document.write("Out: "+arr[i]+"<br>");
}

*/

/* Task 14

var arr = [];

for(var i=0; i<4; i++)
{
    arr.unshift(prompt("Enter item: "));
}

for(var i=0; i<4; i++)
{
    document.write("Out: "+arr[i]+"<br>");
}

*/

/* Task 15

var arr = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
var len = arr.length;

document.write("<select>");

for(var i=0; i<len; i++)
{
    document.write("<option>"+arr[i]+"</option>");
}

document.write("</select>");

*/

        // Chapter 17-20

/* Task 1

var arr = [[]];

*/

/* Task 2

var arr = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]

*/

/* Task 3

for(var i=0; i<10; i++)
{
    document.write(i+1+"<br>");
}

*/

/* Task 4

var num = prompt("Enter a number to show its multiplication table: ");
var len = prompt("Enter length of multiplication table: ");

for(var i=1; i<=+len; i++)
{
    document.write(num+" * "+i+" = "+(num*i)+"<br>");
}

*/

/* Task 5

var fruits = ["apple","banana","mango","orange","strawberry"];
var len = fruits.length;

for(var i=0; i<len; i++)
{
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

*/

/* Task 6

document.write("<strong>Counting:</strong><br><br>");

for(var i=0; i<15; i++)
{
    document.write(i+1+",");
}

document.write("<br><br>");

document.write("<strong>Reverse Counting:</strong><br><br>");

for(var i=10; i>0; i--)
{
    document.write(i+",");
}

document.write("<br><br>");

document.write("<strong>Even:</strong><br><br>");

for(var i=0; i<=20; i++)
{
    if(i%2===0)
    {
        document.write(i+",");
    }
}

document.write("<br><br>");

document.write("<strong>Odd:</strong><br><br>");

for(var i=0; i<=20; i++)
{
    if(i%2===1)
    {
        document.write(i+",");
    }
}

document.write("<br><br>");

document.write("<strong>Series:</strong><br><br>");

var counter = 2;

for(var i=counter; i<=20; i++)
{
    if(i%2===0)
    {
        document.write(i+"K, ");
    }
    
}

*/


/* Task 7

var arr = ["cake","apple pie","cookie","chips","patties"];

var input = prompt("Welcome to the bakery\n\nWhat do you want to order, Sir/Ma'am?: ");

var len = arr.length;

var flag = 0;
for(var i=0; i<len; i++)
{
    if(arr[i]===input.toLocaleLowerCase())
    {
        alert(input+" is available at index "+i+" in our bakery");
        flag = 1;
        break;
    }
}

if(flag==0)
{
    alert("We are sorry. "+input+" is not available in our bakery.");
}

*/

/* Task 8

var arr = [24,53,78,91,12];

var len = arr.length;

var lg = arr[0];

for(var i=0; i<len; i++)
{
    if(lg<arr[i])
    {
        lg = arr[i];
    }
}

document.write("<b>Array Items:</b> ");

for(var i=0; i<len; i++)
{
    document.write(arr[i]+",");
}

document.write("<br><b>The Largest Number is:</b> "+lg);

*/

/* Task 9

var arr = [24,53,78,91,12];

var len = arr.length;

var sm = arr[0];

for(var i=0; i<len; i++)
{
    if(sm>arr[i])
    {
        sm = arr[i];
    }
}

document.write("<b>Array Items:</b> ");

for(var i=0; i<len; i++)
{
    document.write(arr[i]+",");
}

document.write("<br><b>The Smallest Number is:</b> "+sm);

*/

/* Task 10

for(var i=1; i<=20; i++) 
{
    document.write(5*i+", ");
    
}

*/