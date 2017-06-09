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
      alert("Vegas baby!");
    } if else (city() && !crowds() && !northernHem() && temperature === 'hot') {
      alert("Cabo - Suns out Guns out")
    } else if (city() && crowds() && northernHem() && temperature === 'temperate') {
      alert("Rome");
    } else if (city() && crowds() && northernHem() && temperature === 'cold') {
      alert("Boston");
    } else if (city() && crowds() && !northernHem() && (temperature === 'cold' || temperature === 'temperate')) {
      alert("Sydney");
    } else if (!city() && crowds() && northernHem() && temperature === 'hot') {
      alert("GCanyon");
    } else if (!city() && crowds() && northernHem() && temperature === 'temperate') {
      alert("yellowstone");
    } else if (!city() && !crowds() && northernHem() && temperature === 'cold') {
      alert("mt everest");
    } else if (!city() && !crowds() && !northernHem() && temperature === 'cold') {
      alert("s. pole");
    } else if (!city() && !crowds() && !northernHem() && (temperature === 'hot' || temperature === 'temperate')) {
      alert("victoria falls");
    } else {
      alert("you're too picky, pick one of these places");
    }


  });
});
