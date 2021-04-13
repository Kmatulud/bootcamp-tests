describe('The greet function', function(){
    it('should greet my neighbour', function(){
        assert.equal("Hello, Mamsiza", greet("Mamsiza"))
    });
    it('should greet my other neighbour', function(){
        assert.equal("Hello, Mpho", greet("Mpho"))
    }); 
    it('should greet third neighbour', function(){
        assert.equal("Hello, Meme", greet("Meme"))
    }); 
});