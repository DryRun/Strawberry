App.MemberEditController = Ember.ObjectController.extend({
	needs: "members",
	actions: {
		save: function(){
			var member = this.get('model');
			member.save();
			this.transitionToRoute('member', member);
		},
		cancel: function(){
			this.get("controllers.members").send("disconnectModal");
			this.transitionToRoute('member', this.get('model'));
		}
	}
});
