/* /helpers/getPrettyGender.js 
*/
Ember.Handlebars.helper('getPrettyGender', function(gender){
	if (gender == "m") {
		return "Men";
	} else if (gender == "f") {
		return "Women";
	}
});
