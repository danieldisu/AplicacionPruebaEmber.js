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
		
	}/*,
	model : function(){
		App.colors=[];
		var color1 = App.Color.create({name: 'red', isChecked: false})
		var color2 = App.Color.create({name: 'green', isChecked: false})
		var color3 =App.Color.create({name: 'blue', isChecked: false})
			App.colors.push(color1)
			App.colors.push(color2)
			App.colors.push(color3)
		return App.colors;
	}*/
});

App.uncheck = function(resto, actual){
	for(var i = 0; i < resto.length; i++){
		if(resto[i].get("name") != actual.get("name"))
			resto[i].set("isChecked", false);
	}
}

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
	changed: function(){
		console.log(this.get('isChecked'))
		App.uncheck(App.colorController.colores, this);
	}.observes("isChecked")
});
App.IndexRoute = Ember.Route.extend({

});
App.mainUser = App.User.create({

});
/*
//Creacion correcta del array, pero no la manera adecuada
App.colores = Ember.makeArray([
	amarillo = App.Color.create({name: "yellow"}),
	rojo = App.Color.create({name: "red"}),
	blue = App.Color.create({name: "blue"})
]);
*/
//Vamos a crear un controlador de colores

App.colorController = Ember.ArrayController.create({
	colores: [
		App.Color.create({name: 'red', isChecked: false}),
		App.Color.create({name: 'green', isChecked: false}),
		App.Color.create({name: 'blue', isChecked: false})
	]
});