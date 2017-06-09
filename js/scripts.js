$(document).ready(function() {
  $("form#starwars").submit(function(event) {
    event.preventDefault();

    $(".output").hide();

    var darkOrLight = $("input:radio[name=temperature]:checked").val();
    var gender = $("input:radio[name=location]:checked").val();
    var role = $("input:radio[name=activity]:checked").val();
    var idenity = $("input:radio[name=crowd]:checked").val();
    var combat = $("input:radio[name=hemisphere]:checked").val();


  });
});
