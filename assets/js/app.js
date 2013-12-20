window.App = Em.Application.create({
	LOG_TRANSITIONS: true,
	rootElement: "#content-right-interior"
});

App.MembersController = Ember.ArrayController.extend({
	sortProperties: ['nameL'],
	sortAscending: true, // false = descending
	membersCount: function(){
		return this.get('model.length');
	}.property('@each')
});

/* /helpers/stripes.js 
*/
Ember.Handlebars.registerBoundHelper('evenodd', function(number, evenClass, oddClass){
	if (number % 2 === 0) {
		return evenClass;
	} else {
		return oddClass;
	}
});

/* /helpers/stripes.js 
*/
Ember.Handlebars.registerBoundHelper('stripes', function(array, evenClass, oddClass, fn, elseFn){
	if (array && array.length > 0) {
		var buffer = "";
		for (var i = 0, j = array.length; i < j; i++) {
			var item = array[i];
 
			// we'll just put the appropriate stripe class name onto the item for now
			item.stripeClass = (i % 2 == 0 ? even : odd);
 
			// show the inside of the block
			buffer += fn(item);
		}
 
		// return the finished buffer
		return buffer;
	}
	else {
		return elseFn();
	}
});

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

/* /router.js 
*/
App.Router.map(function(){
	this.resource('members', function(){
		this.resource('member', { path:'/:handle' }, function(){
			this.route('edit');
		});
		this.route('create');
	});
});

App.IndexRoute = Em.Route.extend({
	redirect: function(){
		this.transitionTo('members');
	}
});

/* /routes/membersRoute.js 
*/
App.MembersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('member');
  }
});

/* /store.js 
*/
App.ApplicationAdapter = DS.FixtureAdapter;
