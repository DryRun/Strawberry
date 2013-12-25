App.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo('members');
	}
	//setupController: function(controller) {
	//	controller.set('title', "Strawberry");
	//},
});
