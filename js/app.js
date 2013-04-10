App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
	this.resource("menu",{path : "/menu" },function(){
		this.route("selectColor");
		this.route("watchColor");
	})
});

App.MenuSelectColorRoute = Ember.Route.extend({
	setupController : function(){
		
	}
});

App.MenuWatchColorRoute = Ember.Route.extend({
	setupController : function(){
		
	}
});

App.User = Ember.Object.extend({
	name : "",
	nameRepeated : "",
	isInvalid : function(){
		var invalid = true;
		var firstName = this.get("name");
		var secondName =  this.get("nameRepeated");
		if(firstName != "" && secondName != "" && (firstName == secondName)){
			invalid = false;
		}
		return invalid
	}.property("name","nameRepeated"),
	isEmpty : function(){
		var empty = true;
		var firstName = this.get("name");
		var secondName =  this.get("nameRepeated");
		if(firstName != "" && secondName != "" || firstName != "" && secondName == ""){
			empty = false;
		}
		return empty
	}.property("name","nameRepeated")
});
/* Creo un objeto Color */
App.Color = Ember.Object.extend({
	name: "",
	isChecked: false,
});
App.IndexRoute = Ember.Route.extend({

});
App.mainUser = App.User.create({

});
App.colores = Ember.makeArray([
	App.Color.create({name: "yellow"}),
	App.Color.create({name: "red"}),
	App.Color.create({name: "blue"})
]);