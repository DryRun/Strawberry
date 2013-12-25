/* /helpers/getAgeDivision.js 
*/
Ember.Handlebars.helper('getAgeDivision', function(birthDate){
	now = moment();
	then = moment(birthDate);
	age = now.diff(then, 'years', true);
	if (age < 40.0) {
		return "Open";
	} else if (age >= 40.0 && age < 45.0) {
		return "Master";
	} else if (age >= 45.0 && age < 50.0) {
		return "Master+";
	} else if (age >= 50.0 && age < 55.0) {
		return "Senior";
	} else if (age >= 55.0 && age < 60.0) {
		return "Senior+";
	} else if (age >= 60.0 && age < 65) {
		return "Super Senior";
	} else if (age >= 65.0 && age < 70.0) {
		return "Super Senior+";
	} else if (age >= 70.0) {
		return "Veteran";
	}
});
