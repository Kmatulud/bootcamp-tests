describe('The transportFee function', function(){
    it('should say that transport cost for morning is R20', function(){
        assert.equal("R20", transportFee("morning"))
    }); 
    it('should say that transport cost for afternoon is R10', function(){
        assert.equal("R10", transportFee("afternoon"))
    }); 
    it('should say that transport during nightshift is free', function(){
        assert.equal("free", transportFee("night"))
    }); 
});