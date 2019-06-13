function rollDice() {
  
 var dieNum = "d1";
  
  $("#" + dieNum + "p1").attr("visibility", "hidden");
  
  var roll = Math.ceil(Math.random() * 6);
    console.log(roll); 
    
    
}