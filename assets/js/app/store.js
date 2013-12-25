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
