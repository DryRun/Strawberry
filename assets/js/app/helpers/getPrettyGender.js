/* /helpers/getPrettyGender.js 
*/
Ember.Handlebars.helper('getPrettyGender', function(gender){
	if (gender == "M") {
		return "Men";
	} else if (gender == "F") {
		return "Women";
	}
});
