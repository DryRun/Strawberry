/* /helpers/getMonth.js 
*/
Ember.Handlebars.helper('getMonth', function(dob){
	return moment(dob).format("MMMM");
});
