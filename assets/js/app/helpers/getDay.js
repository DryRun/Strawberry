/* /helpers/getDay.js 
*/
Ember.Handlebars.helper('getDay', function(dob){
	return moment(dob).format("D");
});
