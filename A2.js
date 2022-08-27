alert("Happy Coding");

var name = "Rizwan";    //Variable For String
name = "haseeb ";
console.log(name);

console.log("This is First line \n And this is second line");

var weight = 20.5;             //Variable For numbers
var weight2 = weight + 10;
console.log(weight2);

var origina_no = 12 + 12;
console.log(origina_no);

var isfeepaid = true;      //Variable For Boolean
console.group(isfeepaid);


var Exampass = false;
console.log(Exampass);


// *************** Undefined ******************
var name;     //! variable has been declare but has not assigned value 

var name ="Haeeb ";
name = undefined;   //It also undefined 

var age;


// ***************** Null ***********************
var name = null;
var nationality = "Pakistani ";
nationality = null; //! Assigned a variable as a representative of no value



var temp;
if(temp == undefined)
console.log("ture")
else
{
    console.log("false")
}


// Javascript data types are dynamic
//todo Same Variable can be used to store different data types
var name = "Haseeb ";
name =25;
name = true;
console.log(true);


//******************Typeof Operator***********/
                

console.log(typeof "Hello");        //todo To find the type of Variable

console.log(typeof true);        //*Return type of Variable(Bool)

document.write("hello World ")


// *******Statements ********
var a= 20;
var b =23;
var c =1;
c = a+b;
console.log(c);


//When you use semicolon Muliple statements are allow in one line
var i =10;var j=90; var k = i+j; console.log(k);


var a = 5;
var b = a*5;
console.log(b);



//^ ***************  Variable Names Legal **********
var name = "Haseeb Jawad ";
var age = 25;
var isfeepay = true;
var $work = 23;
var my$work = 67;
var _xyz = 12;

//&************ Case Sensitive ***************

var rose = "hello ";
var Rose = "Haseeb ";   //Both are different Varialbes 

//& ************ Assignment Operators ****************8
var a =5;
a = a+2;
console.log(a);

//!

var b = 5;
b+= 2;
document.write(b);


var h = 5 * 3 + 2 -1 /2 ;
console.log(h);


//~ Increment and Decrement Operator
var a = 12;
a += 1;
a -= 1;
var b = 12;
b  +=   1;
b+= 1;
console.log(a);
console.log(b);

//& Prefix Increment and decrement 
var age =10;
++age;
alert(age);

--age;
alert(age);

// //todo Postfix Increment and Decrement
var age = 12;
age++;
alert(age);
age--;
alert(age);

var age = 12;
var newage = ++age;
alert(age);
alert(newage);


 var age =12;
 var newage = age++;
 alert(age);
 alert(newage);

//^ Contacetenating Text Strings

let first_name = "Muhammad ";
let second_name = "Haseeb ";
let third_name = first_name + second_name;
alert(third_name);

//todo Concatenating Strings and Numbers
var concate = "2"+ 2;
console.log(concate);










