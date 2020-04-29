$(function() {
    $("#barbell").draggable();
})
$(document).mouseup(function() {
  var barbellPos = $("#barbell").position();
  if (barbellPos.top >= 0){
    var heightDif = $(document).height() - barbellPos.top - 150;
  } else {
    var heightDif = $(document).height() + Math.abs(barbellPos.top) - 150;
  }
  $("#barbell").animate({top: "+="+heightDif}, 100);
});