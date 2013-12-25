/* /routes/membersRoute.js 
*/
App.MembersRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('member');
	},
	actions: {
		disconnectModal: function() {
			return this.disconnectOutlet({
				outlet: 'modal',
				parentView: 'members'
			});
		}
	}
});
