var breakfast,lunch,supper;
let total=0;
function Meal(breakfast,lunch,supper,total) {
  this.breakfast=breakfast;
  this.lunch=lunch;
  this.supper=supper;
  this.total=total;

  Meal.prototype.fullMeal=function() {
   return this.breakfast+'your meal has'+this.lunch+'and'+this.supper;
  };
  $(document).ready(function(){
    $('#btn1').click(function(event){
      event.preventDefault();
      let pBreakfast=$('.select1 option:selected').val();
      let pLunch=$('.select2 option:selected').val();
      let pSupper=$('.select3 option:selected').val();
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
        lunch_price=400;
      break;
      case "lunch2":
        lunch_price=300;
      break;
      case "lunch3":
        lunch_price=350;
      break;
    }
    switch(pSupper){
      case "supper1":
        supper_price=400;
      break;
      case "supper2":
        supper_price=300;
      break;
      case "supper3":
        supper_price=350;
      break;
    }
    total=price+lunch_price+supper_price;
    let checkoutTotal=0;
    checkoutTotal=checkoutTotal+total;
  
    $("#breakfast").html($(".select1 option:selected").val());
    $("#lunch").html($(".select2 option:selected").val());
    $("#supper").html($(".select3 option:selected").val());
    $("#total").html(total);
  
    var newOrder = new Meal(pBreakfast, pLunch, pSupper,total);
    $("#table1").append('<tr><td id="breakfast">'+newOrder.breakfast +'</td><td id="lunch">' + newOrder.lunch + '</td><td id="supper">'+newOrder.supper + '</td><td id="total">'+newOrder.total);
    $('#table1').show();
    $('#p1').show();
  
  })
  
};

$(document).ready(function){
  
}