App.MembersCreateView = Ember.View.extend({
    templateName: 'member/edit',
    didInsertElement: function() {
      Recaptcha.create("6LdJCNQSAAAAAJ7Q7wRcIiwM0de0Rz3K7POYanNj", "recaptcha-box", {
        theme: "red",
        callback: Recaptcha.focus_response_field
      });
    }
});
