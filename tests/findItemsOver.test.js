describe('findItemsOver function', function(){
     it('should be 4 products with a quantity higher than the threshold of 25', function(){
        assert.deepEqual([{name : "pears", qty : 37}, {name:"apples", qty:40},{name : "pears", qty : 28},{name:"pears", qty:26}], findItemsOver([{name : "pears", qty : 37}, {name:"apples",qty:40}, {name: "bananas",qty: 17},{name:"pears", qty:28}, {name:"pears", qty:26}],25))
    });
     it('should be an empty object for products with a quantity higher than the threshold of 50', function(){
        assert.deepEqual([], findItemsOver([{name:"apples",qty:10},{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27},{name:"apples",qty:3}],50))
    });
     it('should be 5 products with a quantity higher than the threshold of 1 ', function(){
       assert.deepEqual([{name:"apples",qty:10},{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27},{name:"apples",qty:3}], findItemsOver([{name:"apples",qty:10},{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27},{name:"apples",qty:3}, {name:"bananas", qty:0}],1))
    });
});