describe('findItemsOver20 function', function(){
    it('should be 3 products with quantity higher that 20', function(){
        assert.deepEqual([{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27}], findItemsOver20([{name:"apples",qty:10},{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27},{name:"apples",qty:3}]))
    });
    it('should be 2 products with quantity higher that 20', function(){
        assert.deepEqual([{name:"pears",qty:37},{name:"bananas",qty:27}], findItemsOver20([{name:"apples",qty:10},{name:"pears",qty:37},{name:"bananas",qty:27},{name:"apples",qty:3}]))
    });
    it('should be an empty object for products with a quantity higher that 20', function(){
        assert.deepEqual([], findItemsOver20([{name:"apples",qty:10},{name:"apples",qty:3},{name:"apples",qty:18}]))
    });
});