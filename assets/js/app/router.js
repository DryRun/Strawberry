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
