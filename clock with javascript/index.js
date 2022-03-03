//declare a variable of type "Date" with the value  of today 
const DateNow = new Date();

var HH=DateNow.getHours(); // get the value of hours  
var MM=DateNow.getMinutes(); // get the value of minutes 
var SS=DateNow.getSeconds(); //get the value  of seconds



MM+=SS/60; 
HH+=MM/60;



    //degree of each arrows

deg_HH=HH*360/12; //hours
deg_MM=MM*360/60; //minutes
deg_SS=SS*360/60; //seconds


document.documentElement.style.setProperty('--deg-hour',deg_HH);
document.documentElement.style.setProperty('--deg-minute',deg_MM);
document.documentElement.style.setProperty('--deg-second',deg_SS);




