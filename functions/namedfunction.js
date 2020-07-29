function ProductLogic() {
    // private scoped to the function
    var products = [
        { id: 101, name: 'P1', cat: 'C1' },
        { id: 102, name: 'P2', cat: 'C2' },
        { id: 103, name: 'P3', cat: 'C1' },
        { id: 104, name: 'P4', cat: 'C2' }
    ];
    // returning an Object
    return {
        getPorducts: function() {
            return products;
        },
        addProduct: function(prd) {
            products.push(prd);
            return products;
        }
    };
}