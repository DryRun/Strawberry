App.MembersController = Ember.ArrayController.extend({
	sortProperties: ['nameL'],
	sortAscending: true, // false = descending
	membersCount: function(){
		return this.get('model.length');
	}.property('@each')
});
