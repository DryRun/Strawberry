App.MemberController = Ember.ObjectController.extend({
	needs: "members",
    actions: {
        edit: function(){
            this.transitionToRoute('member.edit');
        },
        cancel: function(){
        	this.transitionToRoute('members');
        }
    },
});
