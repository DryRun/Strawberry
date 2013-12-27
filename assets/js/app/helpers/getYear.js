/* /helpers/getYear.js 
*/
Ember.Handlebars.helper('getYear', function(dob){
	return moment(dob).format("YYYY");
});
