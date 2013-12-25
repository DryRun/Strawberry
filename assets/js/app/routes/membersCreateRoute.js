App.MembersCreateRoute = Ember.Route.extend({
	model: function(){
		// the model for this route is a new empty Ember.Object
		return Ember.Object.create({});
	},
	renderTemplate: function(){
		this.render({outlet: 'modal' });
	}

	// in this case (the create route) we can re-use the member/edit template
	// associated with the membersCreateController
	//renderTemplate: function(){
	//	this.render('member.edit', {
	//		controller: 'membersCreate',
	//	});
	//}
});
