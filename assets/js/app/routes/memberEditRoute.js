App.MemberEditRoute = Ember.Route.extend({
	model: function(){
		return this.modelFor('member');
	},
	renderTemplate: function(){
		this.render({
			into: 'members',
			outlet: 'modal'
		});
	}
});
