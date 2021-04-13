describe('The isFromBellville function (starts with CY)', function(){
  it("should return true for CY 123-223", function() {
    assert.equal(true, isFromBellville("CY 123-223"));
  });
  
  it("should return false for CJ 123-223", function() {
    assert.equal(false, isFromBellville("CJ 123-223"));
  });
});