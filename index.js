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

let renishawmoreless = true;
function renishawbuttonclicked() {
  if (renishawmoreless) {
    document.getElementById("renishaw-ml").innerHTML = "During this work experience, I spent a week working in a team of 5 to design and produce a prototype of a green energy product. The product my team design was a speed bumb that converted GPE of the car into KE energy in the motor. My role in this project was to design the prototype using CAD software and 3D print it. At the end of the week, we presented our prototypes to the other teams and some renishaw employees. The main thing I took away from this week was how to work effectively in a team and how to present my ideas and findings to a crowd.";
    document.getElementById("renishaw-ml-button").innerHTML = "Read Less";
    renishawmoreless = false;
  } else {
    document.getElementById("renishaw-ml").innerHTML = "";
    document.getElementById("renishaw-ml-button").innerHTML = "Read more";
    renishawmoreless = true;
  }
}




// *** TO BE CUSTOMISED ***

var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain = "https://wilfwallace.github.io/website.1/index.html" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
	var cookie_string = document.cookie ;
	if (cookie_string.length != 0) {
		var cookie_array = cookie_string.split( '; ' );
		for (i = 0 ; i < cookie_array.length ; i++) {
			cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
			if (cookie_value != null) {
				return decodeURIComponent ( cookie_value[1] ) ;
			}
		}
	}
	return '' ;
}
