/* /helpers/createRecaptcha.js 
*/
Ember.Handlebars.helper('createRecaptcha', function(){
	Recaptcha.create("6LdJCNQSAAAAAJ7Q7wRcIiwM0de0Rz3K7POYanNj", "recaptcha-box", {
		theme: "red",
		callback: Recaptcha.focus_response_field
	});
});
