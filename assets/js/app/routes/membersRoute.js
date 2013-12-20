/* /routes/membersRoute.js 
*/
App.MembersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('member');
  }
});
