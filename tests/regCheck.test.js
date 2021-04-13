
describe("regCheck function", function(){  
    it("should return true for (GP)", function() {
      assert.equal(true, regCheck('DV 23 NB GP', 'GP'));  
    });
    it("should return false for MP", function() {
        assert.equal(false, regCheck('DV 23 LP GP', 'MP'));
    });
    it("should return false for isBellville", function() {
        assert.equal(false, regCheck('CY 189-012', 'CY'));
    });
    it("should return false for isDurban", function() {
        assert.equal(false, regCheck('CY 189-012', 'ND'));
    });
});