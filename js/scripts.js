$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();

    $(".output").hide();

    var temperature = $("input:radio[name=temperature]:checked").val();
    var location = $("input:radio[name=location]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var crowd = $("input:radio[name=crowd]:checked").val();
    var hemisphere = $("input:radio[name=hemisphere]:checked").val();

    function city() {
      if (location === 'urban') {
        return true;
      } else {
        return false;
      }
    }

    function crowds() {
      if (crowd === 'crowded') {
        return true;
      } else {
        return false;
      }
    }

    function northernHem() {
      if (hemisphere === 'northern') {
        return true;
      } else {
        return false;
      }
    }

    if ()


  });
});
