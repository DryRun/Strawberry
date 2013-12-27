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
