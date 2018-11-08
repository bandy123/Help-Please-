$(function () {
  $("#attendees_wrapper select").each(function () {
    $(this).change(function () {
      calculateSum();
    });
  });
});
function calculateSum() {
  var tuitions = 0;
  var children = 0;
  var campers = 0;
  var sel_val = 0;
  var sign = '$';
  $("select.registration_type").each(function () {
    sel_val = this.value;
    switch (sel_val) {
      case "fullyear":
        tuitions += 7390.00;
        break;
	
	case "fullyear":
        tech += 7390.00;
        break;
	
	
      case "child":
        children += 15;
        break;
      case "camper":
        campers += 15;
        break;
      default:
        sel_val += 0;
    }
  });
  $("#tuitions").text(sign + tuitions);
  $("#children").text(sign + children);
  $("#campers").text(sign + campers);
  var total = tuitions + children + campers;
  $("#cost").text(sign + total);
}