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
    actions: {
        create: function(){
            this.transitionToRoute('members.create');
       }
    },
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
		{display: "Female", value: "F"},
		{display: "Male", value: "M"}
    ]
});

App.MembersCreateController = Ember.ObjectController.extend({
	needs: "members",
	actions: {
		save: function () {
			// Check captcha
			var dataString    = "challenge=" + Recaptcha.get_challenge() + "&response=" + Recaptcha.get_response();
			var proceedToSave = false;

			// Fill in computed properties of the model
			var saveDobDay    = this.intDobDay;
			var saveDobMonth  = this.intDobMonth;
			var saveDobYear   = this.intDobYear;
			dobMoment = moment(saveDobYear.toString() + "-" + saveDobMonth.toString() + "-" + saveDobDay.toString());
			var saveNameF     = this.get("model").nameF;
			var saveNameM     = this.get("model").nameM;
			var saveNameL     = this.get("model").nameL;
			
			this.setProperties({
				dob      : dobMoment.format("YYYY-MM-DD"),
				username : saveNameF + saveNameM + saveNameL,
				current  : 0, // Do not show member in roster until approved by admin.
			});

			var newMember = this.store.createRecord('member', this.get('model'));

			Ember.$.ajax('/ember/Strawberry/assets/php/verifyRecaptcha.php', {
				type: 'GET',
				data: dataString,
			}).then(function(response) {
				if (response != "success") {
					jQuery("#create-member-output-box").html(response);
				} else {
					// Save and commit
					newMember.save();
					jQuery("#create-member-output-box").html("Member " + saveNameF + " " + saveNameL + " added! Awaiting administrator approval.");
				}
			});
			//this.transitionToRoute('member', newMember);
		},
		cancel: function(){
			this.transitionToRoute('members');
		}
	},
	intDobDay: 01,
	intDobMonth: 1,
	intDobYear: 1900,
});

/* /helpers/createRecaptcha.js 
*/
Ember.Handlebars.helper('createRecaptcha', function(){
	Recaptcha.create("6LdJCNQSAAAAAJ7Q7wRcIiwM0de0Rz3K7POYanNj", "recaptcha-box", {
		theme: "red",
		callback: Recaptcha.focus_response_field
	});
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

/* /helpers/getDay.js 
*/
Ember.Handlebars.helper('getDay', function(dob){
	return moment(dob).format("D");
});

/* /helpers/getMonth.js 
*/
Ember.Handlebars.helper('getMonth', function(dob){
	return moment(dob).format("MMMM");
});

/* /helpers/getPrettyGender.js 
*/
Ember.Handlebars.helper('getPrettyGender', function(gender){
	if (gender == "M") {
		return "Men";
	} else if (gender == "F") {
		return "Women";
	}
});

/* /helpers/getYear.js 
*/
Ember.Handlebars.helper('getYear', function(dob){
	return moment(dob).format("YYYY");
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
	}.property("nameF", "nameL"),

	display : function() {
		return this.get("current") == 1;
	}.property("current"),

	getMonth : function() {
		date = moment(this.get("dob"));
		return parseInt(date.format("M"), 10);
	}.property("dob"),

	getDay : function() {
		date = moment(this.get("dob"));
		return date.format("D");
	}.property("dob"),

	getYear : function() {
		date = moment(this.get("dob"));
		return date.format("YYYY");
	}.property("dob"),
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
		this.resource('member', { path:'/:id' }, function(){
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

App.MemberRoute = Ember.Route.extend({
    model: function(params){
        return this.store.find('member', params.id);
    },
});

App.MembersCreateRoute = Ember.Route.extend({
	model: function(){
		// the model for this route is a new empty Ember.Object
		return Ember.Object.create({});
	},
	renderTemplate: function(){
		this.render('membersCreate', {
			controller: 'membersCreate',
			outlet: 'modal'
		});
		/*
		this.render('member.edit', {
			controller: 'membersCreate',
			outlet: 'modal'
		});
*/
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

App.MembersCreateView = Ember.View.extend({
    templateName: 'member/edit',
    didInsertElement: function() {
      Recaptcha.create("6LdJCNQSAAAAAJ7Q7wRcIiwM0de0Rz3K7POYanNj", "recaptcha-box", {
        theme: "red",
        callback: Recaptcha.focus_response_field
      });
    }
});
