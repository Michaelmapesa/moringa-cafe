var price , crust_price, topping_price ;
let total = 0;
function Getmeal( breakfast,category,crust,topping, total ){
  this.breakfast= breakfast;
  this.category = category;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
// order btn
$(document).ready(function(){
  $("button#btn1").click(function(event){
   let pbreakfast = $("#name").val();
   let pcategory = $("#size").val();
   let pcrust = $("#crust").val();
   let ptopping = [];
   $.each($("input[name='topping']:checked"), function(){
       ptopping.push($(this).val());
   });
   switch(pcategory){
    case "0":
      price =0;
    break;
    case "VVIP":
       price = 1500;
     break;
     case "VIP":
       price = 900;
     break;
     case "Regular":
       price = 700;
     default:
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 250;
      break;
      case "Crunchy":
        crust_price = 150;
      break;
      case "Gluten":
        crust_price = 200;
      break;
      default:
    }
    let topping_value = ptopping.length*50;
    if((pcategory == "0") && (pcrust == "0")){
      $("#information").show();
      alert("Please select your meal,category,crust and toppings");
    }
    else{
      $("#row1").show();
      $("#btn2").show();
      $("#information").hide();
      $("#btn3").show();
    }
    total = price + crust_price + topping_value;
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;
    $("#breakfast").html($("#name option:selected").val());
    $("#category").html( $("#size option:selected").val());
    $("#crust").html($("#crust option:selected").val());
    $("#topping").html(ptopping.join(", "));
    $("#total").html(total);

    $("#btn2").click(function(){
      let pbreakfast = $("#name option:selected").val();
      let pcategory = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='topping']:checked"), function(){
          ptopping.push($(this).val());
      });
      switch(pcategory){
        case "0":
          price =0;
        break;
        case "VVIP":
           price = 1500;
         break;
         case "VIP":
           price = 900;
         break;
         case "Regular":
           price = 700;
         default:
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 250;
          break;
          case "Crunchy":
            crust_price = 150;
          break;
          case "Gluten":
            crust_price = 200;
          break;
          default:
        }
        let topping_value = ptopping.length*50;
        total = price + crust_price + topping_value;
        checkoutTotal = checkoutTotal + total;
      // function
      var newOrder = new Getmeal(pbreakfast, pcategory, pcrust,ptopping,total);
      $("#table1").append('<tr><td id="breakfast">'+newOrder.breakfaste +'</td><td id="category">' + newOrder.category + '</td><td id="crust">'+newOrder.crust + '</td><td id="topping">'+newOrder.topping+'</td><td id="total">');
    });
    // Check btn
    $("#btn3").click(function(){
      $("#btn2").hide();
      $("#btn3").hide();
      $("#table1").show();
      $("#btn4").show();
      $("#mealtotal").append("Your bill is sh. "+checkoutTotal);
      $(".delivery").hide();
    });
    // delivery btn
    $("#btn4").click(function(){
      $("#table1").hide();
      $(".delivery").show();
      $("#addedprice").hide();
      $("#btn4").hide();
      $("#btn5").show();
      $("#p1").hide();
      let deliceryamount= checkoutTotal+150;
      $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
    });
    // submit btn
    $("#btn5").click(function(event){
      event.preventDefault();
      $("#btn5").hide();
      $(".delivery").hide();

      let deliceryamount= checkoutTotal+150;
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();
      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
        $("#finalmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#mealtotal").hide();
        $("#finalmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#delivery").show();
      }
    });
   event.preventDefault();
  });
});
