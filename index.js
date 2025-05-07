let solarmoreless = true;
function solarbuttonclicked() {
  if (solarmoreless) {
    document.getElementById("Solar more/less").innerHTML = "This project was undertaken initially as coursework during my A-levels and has been updated/developed many times since. The code uses a weather API to create a prediction for how much energy the users solar panels are likely to generate. It uses this information along with the size of the users battery and their daily energy usage to calculate an optimum energy plan that saves the user money.";
    document.getElementById("solar m/l button").innerHTML = "Read Less";
    solarmoreless = false;
  } else {
    document.getElementById("Solar more/less").innerHTML = "";
    document.getElementById("solar m/l button").innerHTML = "Read more";
    solarmoreless = true;
  }
}
let renishawmoreless = true
function renishawbuttonclicked() {
  if (renishawmoreless) {
    document.getElementById("renishaw m/l").innerHTML = "During this work experience, I spent a week working in a team of 5 to design and produce a prototype of a green energy product. The product my team design was a speed bumb that converted GPE of the car into KE energy in the motor. My role in this project was to design the prototype using CAD software and 3D print it. At the end of the week, we presented our prototypes to the other teams and some renishaw employees. The main thing I took away from this week was how to work effectively in a team and how to present my ideas and findings to a crowd.";
    document.getElementById("renishaw m/l button").innerHTML = "Read Less";
    renishawmoreless = false;
  } else {
    document.getElementById("renishaw m/l").innerHTML = "";
    document.getElementById("renishaw m/l button").innerHTML = "Read more";
    renishawmoreless = true;
  }
}
