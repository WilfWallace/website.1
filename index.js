let moreLess = true;
function buttonclicked() {
  if (moreLess) {
    document.getElementById("Solar more/less").innerHTML = "This project was undertaken initially as coursework during my A-levels and has been updated/developed many times since. The code uses a weather API to create a prediction for how much energy the users solar panels are likely to generate. It uses this information along with the size of the users battery and their daily energy usage to calculate an optimum energy plan that saves the user money.";
    document.getElementById("buttonMoreLess").innerHTML = "Read Less";
    moreLess = false;
  } else {
    document.getElementById("Solar more/less").innerHTML = "";
    document.getElementById("buttonMoreLess").innerHTML = "Read more";
    moreLess = true;
  }
}
document.querySelector("h3").style.color = "yellow";
document.querySelector(class = "projects").style.color = "yellow";
