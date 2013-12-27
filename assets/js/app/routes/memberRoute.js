App.MemberRoute = Ember.Route.extend({
    model: function(params){
        return this.store.find('member', params.id);
    },
});
