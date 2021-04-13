describe('The countAllFromTown function', function(){
    it('should return the number of registration numbers for the town CJ', function(){
        assert.deepEqual(3,  countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
    });
     it('should return the number of registration numbers for the town CL', function(){
        assert.equal(3,  countAllFromTown("CL 123, CL 234, CL 898", "CL"))
    });
     it('should return the number of registration numbers for the town CY', function(){
        assert.deepEqual(1,  countAllFromTown('CL 124,CY 567,CL 345, CL 456,CL 341','CY'))
    });
});