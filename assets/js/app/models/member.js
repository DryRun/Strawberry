App.Member = DS.Model.extend({
	handle			: DS.attr(),
	nameF			: DS.attr(),
	nameM			: DS.attr(),
	nameL			: DS.attr(),
	dob				: DS.attr(),
	gender			: DS.attr(),
	nameFormatted : function() {
		return this.get("nameL") + ", " + this.get("nameF");
	}.property("nameF", "nameL")
});

// These are fakes datas for the FixtureAdapter.
// The FixtureAdapter lets you work with fake datas while in development stage.
App.Member.FIXTURES = [
    {
		id				: 1,
		handle			: "davidyu",
		nameF			: 'David ',
		nameM			: 'Ren-Hwa',
		nameL			: 'Yu',
		dob				: '1987-10-15',
		gender			: 'm',
    }, {
		id				: 2,
		handle			: "smac",
		nameF			: 'Sean',
		nameM			: '',
		nameL			: 'McFarland',
		dob				: '1987-02-06',
		gender			: 'm',
    }, {
		id				: 3,
		handle			: "diggerlion",
		nameF			: 'Digger',
		nameM			: '',
		nameL			: 'Lauter',
		dob				: '1983-07-14',
		gender			: 'm',
    }, {
		id				: 4,
		handle			: "kingtim",
		nameF			: 'Tim',
		nameM			: '',
		nameL			: 'Keenan',
		dob				: '1961-08-28',
		gender			: 'm',
    }, {
		id				: 5,
		handle			: "santa",
		nameF			: 'Carl ',
		nameM			: '',
		nameL			: 'Rose',
		dob				: '1962-09-28',
		gender			: 'm',
    }
];
