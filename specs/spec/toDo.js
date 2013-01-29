describe("Todo Application", function(){

    it('should be loaded and ready to go', function(){
		expect(App.appView).to.exist;
    });


    // Models
    describe("A single todo item", function(){

		var todo = new App.todo();

		it('Should, when created, have a default complete status of default', function(){
			expect(todo.get('completed')).to.be.false;
		});

    });


    // Collections
    describe("A group of todo items", function(){
		

		it("Should allow new todo items to be added to it", function(){
			var todos = new App.todoList();

			// Should have nothing to start with.
			console.log(todos.length);
			expect(todos.length).to.equal(0);

			// Add an item to it
			todos.add({
				title: "A New Test"
			});

			// Should have the item added to it now.
			expect(todos.length).to.equal(1);

		});
    });


    // Views

});
