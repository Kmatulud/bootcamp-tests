describe('The countAllPaarl function(Must start with CJ', function(){
    it('should return 3 for this test', function(){
        assert.equal(3, countAllPaarl("CJ 123, CJ 234, CL 766, CJ 1292"))
    });
      it('should return 1 for this test', function(){
        assert.equal(1, countAllPaarl("CL 123, CJ 234, CL 766, CL 1292"))
    });
      it('should return 0 for this test', function(){
        assert.equal(0, countAllPaarl("CL 123, CL 234, CL 766, CL 1292"))
    });
});