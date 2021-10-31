function nameHandler() {
    var gfNames = ["dai", "daiana", "daichu", "dei", "daiana micaela arena", "darena", "mica", "cui", "cuicui"]
    var name = document.getElementById("name").value;
    document.getElementById("home").style.display="none";
    if(gfNames.includes(name.toLowerCase())) {
        document.getElementById("helloGf").style.display="block";
    } else {
        document.getElementById("whoAreYou").style.display="block";
    }
  }

  function goToHome() {
    document.getElementById("whoAreYou").style.display="none";
    document.getElementById("name").value = '';
    document.getElementById("home").style.display="block";
  }