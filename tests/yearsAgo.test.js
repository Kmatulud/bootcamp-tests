describe('yearsAgo function', function(){
    it('if years entered is 2010 it should return 11 years', function(){
        assert.equal(11,  yearsAgo(2010))
    });
    it('if years entered is 1993 it should return 28 years', function(){
        assert.equal(28,  yearsAgo(1993))
    });
    it('if years entered is 2000 it should return 21 years', function(){
        assert.equal(21,  yearsAgo(2000))
    });
});