describe('fromWhere function', function(){
    it('should return Bellville', function(){
        assert.equal("Bellville",  fromWhere('CY 189-012'))
    });
    it('should return Paarl', function(){
        assert.equal("Paarl",  fromWhere('CJ 189-123'))
    });
    it('should return Cape Town', function(){
        assert.equal("Cape Town",  fromWhere('CA 189-235'))
    });
    it('should return, some other place!', function(){
        assert.equal("Some other place!",  fromWhere('CB 189-0123'))
    });
});