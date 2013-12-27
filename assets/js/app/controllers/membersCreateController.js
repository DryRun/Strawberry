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
