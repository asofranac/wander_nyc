var arrExplore = ["The Met", "The Guggenheim","Central Park","Carl Schurz Park","Roosevelt Island Tramway"];
var arrEat = ["Nick's Pizza", "Toloache","Bar Coastal","EJ's Luncheonette","Uva"];
var arrDrink = ["The Stumble Inn", "Ryan's Daughter", "Treadwell Park","The Penrose","Doc Watson's"];

var pickItem = function (arr){
  var chooseItem = arr [Math.floor(Math.random() * 5)]; 
  return chooseItem
    
};

$('#buttonSelect').click(function(){
  var value = pickItem(arrExplore);
  $('#itemExplore').val(value)
   value = pickItem(arrEat);
  $('#itemEat').val(value)
  value = pickItem(arrDrink);
  $('#itemDrink').val(value)
});

// $('#buttonSelect').click(function(){
//   var value = pickItem(arrEat);
//   $('#itemEat').val(value)
// });

// $('#buttonSelect').click(function(){
//   var value = pickItem(arrDrink);
//   $('#itemDrink').val(value)
// });