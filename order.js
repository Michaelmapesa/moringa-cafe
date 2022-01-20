var breakfast,lunch,supper;
let total=0;
function Meal(breakfast,lunch,supper) {
  this.breakfast=breakfast;
  this.lunch=lunch;
  this.supper=supper;
  this.total=total;
  
  Meal.prototype.fullMeal=function() {
    return this.breakfast+'your meal has'+this.lunch+'and'+this.supper;
  };
};

$(document).ready(function(){
  $('#btn1').click(function(event){
    event.preventDefault();
    let pBreakfast=$('.select1').val();
    let pLunch=$('.select2').val();
    let pSupper=$('.select3').val();
  })
  switch(pBreakfast){
    case "break1":
      price=200;
    break;
    case "break2":
      price=250;
    break;
    case "break3":
      price=250;
    break;
  }
  switch(pLunch){
    case "lunch1":
      price=400;
    break;
    case "lunch2":
      price=300;
    break;
    case "lunch3":
      price=350;
    break;
  }
  switch(pSupper){
    case "supper1":
      price=400;
    break;
    case "supper2":
      price=300;
    break;
    case "supper3":
      price=350;
    break;
  }
})
