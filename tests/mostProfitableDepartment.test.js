describe('mostProfitableDepartment function', function(){
    it('should return carpentry as the most profitable department', function(){
        assert.equal("carpentry", mostProfitableDepartment([{department : "hardware",sales:4500,day : "Monday"},{department : "outdoor",sales:1500,day : "Monday"},{department : "carpentry",sales:5500,day : "Monday"}]))
    });
       it('should return Monday as the most profitable day', function(){
        assert.deepEqual("Monday", mostProfitableDay([{department : "hardware",sales:4500,day : "Monday"},{department : "outdoor",sales:1500,day : "Monday"},{department : "carpentry",sales:5500,day : "Monday"}]))
    });
});