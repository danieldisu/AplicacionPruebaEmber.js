App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
	this.resource("menu",{path : "/menu" },function(){
		this.route("selectColor");
		this.route("watchColor");
	})
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
		return invalid;
	}.property("name","nameRepeated"),
	isEmpty : function(){
		var empty = true;
		var firstName = this.get("name");
		var secondName =  this.get("nameRepeated");
		if(firstName != "" && secondName != "" || firstName != "" && secondName == ""){
			empty = false;
		}
		return empty;
	}.property("name","nameRepeated")
});

App.IndexRoute = Ember.Route.extend({

});

App.mainUser = App.User.create({

});

App.Color = Ember.Object.extend({
	name: ""
});

App.selectedColorName = "red";

App.MenuSelectColorController = Ember.ArrayController.extend({
	changeSelectedColor : function(selectedColor){
		/*Cambiando de  App.selectedColorName  a selectedColor.get("name")*/
		App.set("selectedColorName", selectedColor.get("name"));
	}, 
})

App.MenuSelectColorRoute = Ember.Route.extend({
	model : function(){	
		App.colors=[];
		var color1 = App.Color.create({name: 'red'})
		var color2 = App.Color.create({name: 'yellow'})
		var color3 =App.Color.create({name: 'blue'})
			App.colors.push(color1)
			App.colors.push(color2)
			App.colors.push(color3)
		return App.colors;
	}
});

App.MenuWatchColorRoute = Ember.Route.extend({
	setupController : function(){
		
	}
});