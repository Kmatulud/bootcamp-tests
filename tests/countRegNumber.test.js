describe("The countRegNumber function ", function() {
  it("should return 2 for the 2 registration numbers in this string", function() {
    assert.equal(2, countRegNumber("CY 123-223, CA 123-123"));
  });
  it("should return 4 for the 4 registration numbers in this string", function() {
    assert.equal(4, countRegNumber("CY 123-123, CA 123-123,CY 123-123, CA 123-123"));
  });
  it("should return 6 for the 6 registration numbers in this string", function() {
    var EXPECTED_COUNT = 6;
    assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123, CY 123-123, CA 123-123, CY 123-123, CA 123-123"));
  });
});