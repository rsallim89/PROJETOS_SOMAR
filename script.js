function menu() {
  var x = document.getElementById("meuslinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function menuOnClick() {
  document.getElementById("linhamenu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("fundomenu").classList.toggle("change-bg");
}