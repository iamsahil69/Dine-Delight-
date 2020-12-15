var veg = document.querySelector("#veg");
var nonVeg = document.querySelector("#non-veg");
var vegBox = document.querySelector(".veggies");
var nonVegBox = document.querySelector(".non-veg");
var imgTag = document.querySelector(".img");
var back = document.querySelector(".back");
var forward = document.querySelector(".forward");
var menuBox = document.querySelector(".menu");
var signUpBox = document.querySelector(".sign-up");
var submitBtn = document.querySelector("#sub");
var orderBtn = document.querySelector("#btn2");
var signUp = document.querySelectorAll("#sign-up input");
var menu = document.querySelectorAll("#menu-form select");
var billBox = document.querySelector(".bill-box");
var billHeading = document.querySelector(".bill-box h2");
var items = document.querySelectorAll(".item");
var prices = document.querySelectorAll(".price");
var details = document.querySelectorAll(".information span");

// Variables and objects...

var index = 0;
var name = "";
var email = "";
var phn = "";
var starter = "";
var main = "";
var bread = "";
var dessert = "";
var images = [
"./banner1.jpeg",
 "./img1.jpeg",
 "./banner.jpeg",
 "./img3.jpeg",
 "./img4.jpeg",
 "./img5.jpeg",
 "./img6.jpeg"
];

var snacks = {
    springRolls : 250,
    manchurian: 250,
    vegKabab : 175,
    chickenTikka : 450
};

var mainCourse = {
     shahiPaneer: 350,
     dalMakhani: 250,
     butterChicken: 550,
     mutton : 325
};

var breads = {
     tawaRoti : 25,
     tandooriRoti : 30,
     missiRoti : 30,
     garlicBread : 50

};

var sweetDessert = {
     gulabJamun : 120,
     kheer : 75,
     rabri : 85,
     jalebi : 90

};

var billInfo = {
     name : "",
     email : "",
     phoneNo : "",
     snacksPrice : 0,
     mainCoursePrice : 0,
     breadPrice : 0,
     dessertPrice : 0,
     total : 0,
     totalBill : function(){
        this.total = this.snacksPrice + this.mainCoursePrice + this.breadPrice + this.dessertPrice;
     }

};


// Event listeners added to elements...;

back.addEventListener( "click", () => {
if( index === 0){
 index = 6;
}else{
index = index - 1;
}
imgTag.setAttribute("src", images[index]);


});
forward.addEventListener( "click" , () => {
if( index === 6){
  index = 0;
}else{
  index = index + 1;
}
imgTag.setAttribute("src", images[index]);
});
veg.addEventListener( "click", ()=> {
vegBox.style.display = "block";
nonVegBox.style.display="none";

});

nonVeg.addEventListener( "click", ()=> {
vegBox.style.display = "none";
nonVegBox.style.display="block";

});

orderBtn.addEventListener( "click", () => {

var values = [];
menu.forEach( (element) => {
values.push(element.value);
});
   starter = values[0];
   billInfo.snacksPrice = snacks[starter];
   main= values[1];
   billInfo.mainCoursePrice = mainCourse[main];
   bread= values[2];
   billInfo.breadPrice = breads[bread];
  dessert = values[3];
  billInfo.dessertPrice = sweetDessert[dessert];
  billInfo.totalBill();


if( starter == "" || main == "" || bread == "" || dessert == ""){
   alert("Please select atleast one from each category!!");
}else{

       
       billHeading.innerHTML = `Hi! ${name}, here's your bill`;
       
       details[0].innerHTML = `Name : ${name}`;
       details[1].innerHTML = `Email : ${email}`;
       details[2].innerHTML = `Phone : ${phn}`;
       
       items[0].innerHTML = starter.charAt(0).toUpperCase() + starter.slice(1);
       items[1].innerHTML = main.charAt(0).toUpperCase() + main.slice(1);
       items[2].innerHTML = bread.charAt(0).toUpperCase() + bread.slice(1);
       items[3].innerHTML = dessert.charAt(0).toUpperCase() + dessert.slice(1);
       
       prices[0].innerHTML = billInfo.snacksPrice;
       prices[1].innerHTML = billInfo.mainCoursePrice;
       prices[2].innerHTML = billInfo.breadPrice;
       prices[3].innerHTML = billInfo.dessertPrice;
       prices[4].innerHTML = billInfo.total;
      
       menuBox.style.display = "none";
        billBox.style.display = "block";
    alert("Your Order Placed Successfully!");
  }
});

submitBtn.addEventListener( "click", () => {
var values = [];
signUp.forEach( (element) => {
values.push(element.value);
});
 name = values[0];
 billInfo.name = name;
 email = values[1];
 billInfo.email = email;
 phn = values[2];
 billInfo.phoneNo = phn;
 

if( name === ""){
alert("Please fill Name field!");
}else{
    if(email === ""){
       alert("Please fill Email field!"); 
    }else{
        if(phn === ""){
        alert("Please fill Phone no.  field!");
        }else{
             if(phn.length != 10){
                  alert("Please enter valid 10 digit Phone no.")
             }else{                                   
                 signUpBox.style.display = "none";
                 menuBox.style.display = "block";                                  
            }
        
        }
    
    }

  }
});


