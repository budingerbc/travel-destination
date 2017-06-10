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

    if (city() && crowds() && northernHem() && temperature === 'hot') {
      $("#vegas").show();
    } else if (city() && !crowds() && !northernHem() && temperature === 'hot') {
      $("#cabo").show();
    } else if (city() && crowds() && northernHem() && temperature === 'temperate') {
      $("#rome").show();
    } else if (city() && crowds() && northernHem() && temperature === 'cold') {
      $("#boston").show();
    } else if (city() && crowds() && !northernHem() && (temperature === 'cold' || temperature === 'temperate')) {
      $("#sydney").show();
    } else if (!city() && crowds() && northernHem() && temperature === 'hot') {
      $("#grandcanyon").show();
    } else if (!city() && crowds() && northernHem() && temperature === 'temperate') {
      $("#yellowstone").show();
    } else if (!city() && !crowds() && northernHem() && temperature === 'cold') {
      $("#everest").show();
    } else if (!city() && !crowds() && !northernHem() && temperature === 'cold') {
      $("#southpole").show();
    } else if (!city() && !crowds() && !northernHem() && (temperature === 'hot' || temperature === 'temperate')) {
      $("#victoriafalls").show();
    } else {
      $("#consolation").show();
    }
  });
});
