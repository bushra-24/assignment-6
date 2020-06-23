                                                 //ASSIGNMENT-6
                                                 //STRING METHODS
                                                 //TASK-1


//var firstName = prompt("Enter your first name");
//firstName = firstName.toLowerCase();

//var lastName = prompt("Enter your last name");
//lastName = lastName.toLowerCase();

//var greeting = "welcome to my web"

//var fullName = firstName + " " + lastName + " " + greeting
//alert(fullName)

                                                   //TASK-2

//var favMobile = prompt("Enter your favourite phone model.");
//favMobile = favMobile.toUpperCase();
//var answer = "my favourite phone is: Samsung Galaxy S6 Edge Plus<br>Lenght of string:\n";

//var length = answer.length;
//document.write(answer +  + length )

                                                    //TASK-3

//var string = "String: Pakistani<br>Index of 'n':";
//var no = string.indexOf("n");
//document.write(string +  + no)

                                                    //TASK-4

    
//var string = "String: Hello World<br>Last index of 'l':";
//var no = string.lastIndexOf("l");
//document.write(string +  + no)

                                                    //TASK-5

  //var nationality = "String: Pakistani<br>Character at index 3:";
  //var cha = nationality.substring(3);
  //document.write(nationality +  + cha)
  
                                                   //TASK-6


   //var firstName = prompt("Enter your first name");
//firstName = firstName.toLowerCase();

//var lastName = prompt("Enter your last name");
//lastName = lastName.toLowerCase();

//var greeting = "welcome to my web"

//var fullName = firstName.concat(" ", lastName, " " ,greeting);
//alert(fullName)

                                                   //TASK-7

  //var city = "City: Hyderabad<br>After repacement:";
  //var rep = city.replace(/Hyderabad/gi, "Islamabad");
  //document.getElementById("city").innerHTML = rep  

                                             
                                                  //TASK-8


  //var msg = "Ali and Sami are best friends. They play cricket and football together.";     
  //var rep = msg.replace(/and/gi, "&" );
 // document.write(msg + rep)      
 
 
                                                 //TASK-9


  //var a = "Value: 472" + "<br>"  ;
  //var b = "Type: String" + "<br>" ;
  //var c = "Value: 472" + "<br>" ;
  //var d = "Type: Number";
  //document.write(a + b + c + d)    
  
  
                                                  //TASK-10


  //var input = prompt("Enter your favourite fruit");
//input = input.toUpperCase();
//alert(input)  


                                                  //TASK-11


 
  //var input = prompt("Enter your favourite colour");
//input = input.toLowerCase();
//alert(input)


                                                 //TASK-12


   //var num = "35.36" ;
   //var result = num.toString();
  // document.write(num +  + result) 
  
  
                                                 //TASK-13


//var userName = prompt("Enter your name");
//if (userName === "letters") {
  //  alert("userName");
//}                                                  
//if (userName !== "!" + "," + "." + "@" + "#" + "$" + "%" + "&" + "*") {
 //alert("Please enter a valid username");   
//}


                                                  //TASK-14


 //var input = prompt("Welcome to Shifao Bakery. What do you want to order sir/ma'm?");
//if (input === "cake" , "apple pie" , "cookie" , "chips" , "patties") {
  //  alert( "Your order is available in our bakery ");
//}                                                  
//if (userName !== "!" + "," + "." + "@" + "#" + "$" + "%" + "&" + "*" + "cake" + "apple pie" + "cookie" + "chips" + "patties") {
 //alert("We are sorry." + input + "is not available in our bakery");   
//}
//Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 64


                                                   //TASK-15


//var userPassword = prompt("Enter your password");
//if (userName === "numbers" + "letters") {
   // alert("userPassword");
//}                                                  
//if (userPassword !== "!" + "," + "." + "@" + "#" + "$" + "%" + "&" + "*") {
 //alert("Please enter a valid password");   
//}


                                                      //TASK-16


  //var word = "University Of Karachi";  
  //var check;

  //for (var i = word.length -1; i > 0; i--){
    //document.write(word[i])
  //}


                                                        //TASK-17


   //var str = "Pakistan";
   //var res = str.charAt(str.length-1);
   //document.getElementById("demo").innerHTML = res;


                                                         //TASK-18


   //var r = "the quick brown fox jumps over the lazy dog"; 
   //document.getElementById("rk").innerHTML = 
   // (r.match(/the/g)).length;  
   
   
                                                         //MATH-METHODS

                                                         //TASK-1


 //var num = "3.45214";
 //var round = Math.round(3.45314);
 //var ceil  = Math.ceil(3.45214);
 //var floor = Math.floor(3.45214);
 //document.write(num + "<br>" +  round + "<br>" +  ceil + "<br>" + floor)
 
 

                                                         //TASK-2


 //var num = prompt("Enter negative floating point") ;
 //var round = Math.round(num);
 //var ceil = Math.ceil(num);
 //var floor = Math.floor(num);
 //document.write(num + "<br>" + round + "<br>" + ceil + "<br>" + floor)  
 
 
                                                          //TASK-3


 //var num = prompt("Enter an integer")  ;
 //var abs = Math.abs(num);
 //document.write(num + "<br>" + abs)     
 
 
                                                          //TASK-5


  //var headsuser = prompt("Enter player-1 outcome");
  //var tailuser = prompt("Enter player-2 outcome");
  //var toss = Math.random() * 2;
  //var floor = Math.floor(toss)
  //document.write(floor) 
  
  
                                                         //TASK-6


  //var a = Math.floor(Math.random() * 100) + 1;  //returns a random integer from 1 to 100
  //document.write(a)


                                                          //TASK-7


    //var input = prompt("Enter Your weight in kilograms");
    //var res = "The weight of user is" ;
    //alert(res + "  " + input)  
    
    
                                                          //TASK-8


//var input = prompt("Enter a number between 1 and 10");
//if (input === "6") {
 //alert("Congratulation you guess the secret number");
//}                                                  
//if (input !== "1", "2", "3", "4", "5", "7", "8", "9", "10") {
//alert("Ups! You loss");   
//}


                                                        //DATE-METHODS

                                                        //TASK-1
                                                        
                                                        
  //var dayNames = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //var now = new Date ();
  //var theDay = now.getDay();
  //var nameOfToday = dayNames[theDay];
  //document.write(now + "<br>" + nameOfToday)  
  
  
                                                         //TASK-2

//var d = new Date ();
//var currentMonth = d.getMonth();
//document.write(currentMonth)


                                                        //TASK-3


 //var rightNow = new Date ();
 //var theDay = rightNow.getDay();
 //alert(theDay)


                                                         //TASK-4


 // var input = prompt("Enter the day of today");
//if (input === "Saturday", "Sunday") {
 //alert("Is's Fun day");
//}                                                  
//if (input !== "Monday", "Tuesday", "Wednesday", "Thursaday", "Friday") {
//alert("Ups!");   
//}  


                                                          