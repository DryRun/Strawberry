App.UserRoute = Ember.Route.extend({
    model: function(params){
        return this.store.find('member', params.username);
    },
});
