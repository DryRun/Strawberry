/* /helpers/stripes.js 
*/
Ember.Handlebars.registerBoundHelper('evenodd', function(number, evenClass, oddClass){
	if (number % 2 === 0) {
		return evenClass;
	} else {
		return oddClass;
	}
});
