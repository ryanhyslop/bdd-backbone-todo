describe("Todo Application", function(){

    it('should be loaded and ready to go', function(){
        expect(toDo).to.exist;
    });

    describe("Adding Some Numbers", function(){
        it("it should add some numbers together", function(){
            expect(toDo.add(1,1)).to.equal(2);
        });
    });

});
