App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
	this.resource("list",{path : "/list" },function(){
		this.route("select");
	})
});

App.ListSelectRoute = Ember.Route.extend({
	setupController : function(){
		alert("hola")
	}
})

App.User = Ember.Object.extend({
	name : "",
	nameRepeated : "",
	isInvalid : function(){
		var invalid = true;
		var firstName = this.get("name");
		var repeatName =  this.get("nameRepeated");
		if(firstName != "" && repeatName != "" && (firstName == repeatName)){
			invalid = false;
		}
		return invalid
	}.property("name","nameRepeated")
})

App.IndexRoute = Ember.Route.extend({

});




App.mainUser = App.User.create({

})
