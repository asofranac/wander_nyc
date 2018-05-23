var pickItem = function (arr){
  var chooseItem = arr [Math.floor(Math.random() * 5)]; 
  return chooseItem
};


// UES Day Planner
var arrUesExplore = ["The Met", "The Guggenheim","Central Park","Carl Schurz Park","Roosevelt Island Tramway"];
var arrUesEat = ["Nick's Pizza", "Toloache","Bar Coastal","EJ's Luncheonette","Uva"];
var arrUesDrink = ["The Stumble Inn", "Ryan's Daughter", "Treadwell Park","The Penrose","Doc Watson's"];

$('#buttonSelectUES').click(function(){
  var value = pickItem(arrUesExplore);
  $('#itemExplore').val(value)
   value = pickItem(arrUesEat);
  $('#itemEat').val(value)
  value = pickItem(arrUesDrink);
  $('#itemDrink').val(value)
});

// Village Day Planner
var arrVillageExplore = ["Washington Square Park", "NYU","Comedy Cellar","IFC Center","Blue Note"];
var arrVillageEat = ["Joe's Pizza", "Cuba","Cotenna","Miss Lily's","Tortaria"];
var arrVillageDrink = ["Down the Hatch", "Carroll Place", "Fat Cat","Amity Hall","The Garret"];

$('#buttonSelectVillage').click(function(){
  var value = pickItem(arrVillageExplore);
  $('#itemExplore').val(value)
  value = pickItem(arrVillageEat);
  $('#itemEat').val(value)
  value = pickItem(arrVillageDrink);
  $('#itemDrink').val(value)
});


// Williamsburg Day Planner
var arrWilliamsburgExplore = ["Brooklyn Bowl", "Smorgasburg / Brookyln Flea","Music Hall of Williamsburg","Bushwick Inlet Park","The Sketchbook Project"];
var arrWilliamsburgEat = ["Sweet Chick", "Miss Favela's","Fette Sau","Peter Luger's","Vinnie's Pizzeria"];
var arrWilliamsburgDrink = ["Brooklyn Brewery", "Berry Park", "The Whiskey Brooklyn","Radegast Hall & Biergarten","Freehold"];

$('#buttonSelectWilliamsburg').click(function(){
  var value = pickItem(arrWilliamsburgExplore);
  $('#itemExplore').val(value)
  value = pickItem(arrWilliamsburgEat);
  $('#itemEat').val(value)
  value = pickItem(arrWilliamsburgDrink);
  $('#itemDrink').val(value)
});

// var randomImage = function (){
//   var randomNumber = Math.floor(Math.random() * 3) + 1; 
//   var imageName = "nyc-" + randomNumber + ".jpg"
// };

// $('#loadPhoto').load(function(){
// });

$(document).load(function(){
  
})