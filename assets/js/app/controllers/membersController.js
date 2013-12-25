App.MembersController = Ember.ArrayController.extend({
	sortProperties: ['nameL'],
	sortAscending: true, // false = descending
	membersCount: function(){
		return this.get('model.length');
	}.property('@each'),
    months : [
		{display: "1 - January", value: 1},
		{display: "2 - February", value: 2},
		{display: "3 - March", value: 3},
		{display: "4 - April", value: 4},
		{display: "5 - May", value: 5},
		{display: "6 - June", value: 6},
		{display: "7 - July", value: 7},
		{display: "8 - August", value: 8},
		{display: "9 - September", value: 9},
		{display: "10 - October", value: 10},
		{display: "11 - November", value: 11},
		{display: "12 - December", value: 12}
    ],
    genders : [
		{display: "Female", value: "f"},
		{display: "Male", value: "m"}
    ]
});
