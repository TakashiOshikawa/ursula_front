
$(function(){
  var loc = location.href;
  var spl = loc.split("/");
  var key = spl[spl.length-1];
  // alert(key);
  $.get("http://127.0.0.1:8080/" + key, function(data){
    // alert(data);
    $("#main").append(data);
  });
});


function postKey() {
    var key = $("#key").val();
		$("#frm").attr("action", "./" + key);
  	document.frm.submit();
}
