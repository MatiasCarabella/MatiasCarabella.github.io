function nameHandler() {
    var gfNames = ["dai", "daiana", "daichu", "dei", "daiana micaela arena", "darena", "mica", "cui", "cuicui"]
    var name = document.getElementById("name").value;
    document.getElementById("home").style.display="none";
    if(gfNames.includes(name.toLowerCase())) {
        document.getElementById("helloDai").style.display="block";
    } else {
        document.getElementById("whoAreYou").style.display="block";
    }
  }

  function goToHome() {
    document.getElementById("whoAreYou").style.display="none";
    document.getElementById("collage").style.display="none";
    document.getElementById("name").value = '';
    document.getElementById("nobioSize").value = "";
    document.getElementById("home").style.display="block";
  }

  function getSize() {
    switch(document.getElementById("nobioSize").value) {
      case 'tall':
        document.getElementById("helloDai").style.display="none";
        document.getElementById("selectedTall").style.display="block";
        break;
      case 'smol':
        document.getElementById("helloDai").style.display="none";
        document.getElementById("selectedSmol").style.display="block";
        break;
      default:
        alert("Por favor, seleccione la altura de su nobio");
    }
  }

  function goToHelloDai() {
    document.getElementById("helloDai").style.display="block";
    document.getElementById("nobioSize").value = "";
    document.getElementById("selectedTall").style.display="none";
    document.getElementById("selectedSmol").style.display="none";
  }

  function goToHelloGf() {
    document.getElementById("selectedTall").style.display="none";
    document.getElementById("selectedSmol").style.display="none";
    document.getElementById("helloGf").style.display="block";
  }

  function goToThinking() {
    document.getElementById("helloGf").style.display="none";
    document.getElementById("thinking").style.display="block";
  }

  function goToThinking2() {
    document.getElementById("thinking").style.display="none";
    document.getElementById("thinking2").style.display="block";
  }

  function goToIdea() {
    document.getElementById("thinking2").style.display="none";
    document.getElementById("idea").style.display="block";
  }

  function goToCollage() {
    document.getElementById("idea").style.display="none";
    document.getElementById("collage").style.display="block";
  }