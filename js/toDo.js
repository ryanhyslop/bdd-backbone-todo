(function(global, undefined){

    window.App = {};


    /* Models */
    App.todo =  Backbone.Model.extend({
		defaults : {
			'title' : '',
			'completed' : false
		}
    });

    /* Collections */

    App.todoList = Backbone.Collection.extend({
    	model: App.todo
    });
	
	/* Views */

	App.appView =  Backbone.View.extend({
		
		el : '#toDoApp'

	});


}(window));
