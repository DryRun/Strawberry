App.MembersCreateController = Ember.ObjectController.extend({
	needs: "members",
	actions: {
		save: function () {
			// save and commit
			var newMember = this.store.createRecord('member', this.get('model'));
			newMember.save();

			// redirects to the member itself
			this.transitionToRoute('member', newMember);
		},
		cancel: function(){
			this.transitionToRoute('members');
		}

	},
});
