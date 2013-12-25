window.App = Em.Application.create({
	LOG_TRANSITIONS: true,
	rootElement: "#content-right-interior"
});

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

/* /helpers/stripes.js 
*/
Ember.Handlebars.registerBoundHelper('evenodd', function(number, evenClass, oddClass){
	if (number % 2 === 0) {
		return evenClass;
	} else {
		return oddClass;
	}
});

/* /helpers/getAgeDivision.js 
*/
Ember.Handlebars.helper('getAgeDivision', function(birthDate){
	now = moment();
	then = moment(birthDate);
	age = now.diff(then, 'years', true);
	if (age < 40.0) {
		return "Open";
	} else if (age >= 40.0 && age < 45.0) {
		return "Master";
	} else if (age >= 45.0 && age < 50.0) {
		return "Master+";
	} else if (age >= 50.0 && age < 55.0) {
		return "Senior";
	} else if (age >= 55.0 && age < 60.0) {
		return "Senior+";
	} else if (age >= 60.0 && age < 65) {
		return "Super Senior";
	} else if (age >= 65.0 && age < 70.0) {
		return "Super Senior+";
	} else if (age >= 70.0) {
		return "Veteran";
	}
});

/* /helpers/getPrettyGender.js 
*/
Ember.Handlebars.helper('getPrettyGender', function(gender){
	if (gender == "m") {
		return "Men";
	} else if (gender == "f") {
		return "Women";
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
	username	: DS.attr(),
	nameF		: DS.attr(),
	nameM		: DS.attr(),
	nameL		: DS.attr(),
	dob			: DS.attr(),
	gender		: DS.attr(),
	current		: DS.attr(),
	nameFormatted : function() {
		return this.get("nameL") + ", " + this.get("nameF");
	}.property("nameF", "nameL")
});

// These are fakes datas for the FixtureAdapter.
// The FixtureAdapter lets you work with fake datas while in development stage.
/*
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
*/

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

App.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo('members');
	}
	//setupController: function(controller) {
	//	controller.set('title', "Strawberry");
	//},
});

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

App.UserRoute = Ember.Route.extend({
    model: function(params){
        return this.store.find('member', params.username);
    },
});

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

/* /store.js 
*/
//App.ApplicationAdapter = DS.FixtureAdapter;
//App.ApplicationAdapter = DS.LSAdapter;
//App.LSAdapter = DS.LSAdapter.extend({
//    namespace: 'Strawberry'
//});

App.Store = DS.Store.extend({
  revision: 12,
});

DS.RESTAdapter.reopen({
  url: "http://www.strawberrycanyontc.org/",
  namespace: 'ember/Strawberry/membersAccess'
});
