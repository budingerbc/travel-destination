$(document).ready(function() {
  $("form#starwars").submit(function(event) {
    event.preventDefault();

    $(".output").hide();

    var darkOrLight = $("input:radio[name=darkOrLight]:checked").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var role = $("input:radio[name=role]:checked").val();
    var idenity = $("input:radio[name=identity]:checked").val();
    var combat = $("input:radio[name=combat]:checked").val();


  });
});
