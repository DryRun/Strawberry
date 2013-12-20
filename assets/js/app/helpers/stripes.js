/* /helpers/stripes.js 
*/
Ember.Handlebars.registerBoundHelper('stripes', function(array, evenClass, oddClass, fn, elseFn){
	if (array && array.length > 0) {
		var buffer = "";
		for (var i = 0, j = array.length; i < j; i++) {
			var item = array[i];
 
			// we'll just put the appropriate stripe class name onto the item for now
			item.stripeClass = (i % 2 == 0 ? even : odd);
 
			// show the inside of the block
			buffer += fn(item);
		}
 
		// return the finished buffer
		return buffer;
	}
	else {
		return elseFn();
	}
});
