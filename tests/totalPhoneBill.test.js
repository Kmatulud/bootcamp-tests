describe('totalPhoneBill function', function(){
    it('Total phone bill should be R7.45', function(){
        assert.equal("R7.45", totalPhoneBill("call, sms, call, sms, sms"))
    });
     it('Total phone bill should be R3.40', function(){
        assert.equal("R3.40", totalPhoneBill("call, sms"))
    });
     it('Total phone bill should be R6.15', function(){
        assert.equal("R6.15", totalPhoneBill("call, sms, call"))
    });
});