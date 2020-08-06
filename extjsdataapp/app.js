// define model
// derived from Ext.data..Model
// define model fields aka properties aka schema
Ext.define('MSIT.model.Product', {
    extend: 'Ext.data.Model',
    field: [
        { name: 'ProductRowId', type: 'int' },
        { name: 'ProductId', type: 'string' },
        { name: 'ProductName', type: 'string' },
        { name: 'CategoryName', type: 'string' },
        { name: 'Manufacturer', type: 'string' },
        { name: 'Description', type: 'string' },
        { name: 'BasePrice', type: 'int' }
    ]
});
// define store
// derived from the Ext.data.Store
// required the model to define initial values
Ext.define('MSIT.store.products.Products', {
    extend: 'Ext.data.Store',
    model: 'MSIT.model.Product',
    proxy: {
        type: 'ajax',
        url: 'https://apiapptrainingnewapp.azurewebsites.net/api/Products',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});


// required dependencies
// load required plugins (Ext or custom)
Ext.require([
    'Ext.grid.*', // load the plugins for grid
    'MSIT.model.Product',
    'MSIT.store.products.Products'
]);

// define the view with rendering
Ext.onReady(function() {
    // load the store
    var productsStore = Ext.create('MSIT.store.products.Products');

    // define the UI
    var productsGrid = Ext.create('Ext.grid.Panel', {
        title: 'List of Products',
        height: 300,
        width: 900,
        store: productsStore,
        plugins: {
            ptype: 'rowediting',
            clicksToEdit: 1
        },
        columns: [{
                dataIndex: 'ProductRowId',
                text: 'ProductRowId',
                width: 80
            },
            {
                dataIndex: 'ProductId',
                text: 'ProductId',
                width: 80,
                editor: 'textfield'
            },
            {
                dataIndex: 'ProductName',
                text: 'ProductName',
                width: 140,
                editor: 'textfield'
            },
            {
                dataIndex: 'CategoryName',
                text: 'CategoryName',
                width: 100,
                editor: 'textfield'
            },
            {
                dataIndex: 'Manufacturer',
                text: 'Manufacturer',
                width: 100,
                editor: 'textfield'
            },
            {
                dataIndex: 'Description',
                text: 'Description',
                width: 200,
                editor: 'textfield'
            },
            {
                dataIndex: 'BasePrice',
                text: 'BasePrice',
                width: 100,
                editor: 'textfield'
            }
        ],
        renderTo: Ext.getBody(),
        listeners: {
            // p1: the grid self object --> this
            // p2: the record, that is the row under selection
            // p3: the tr, table row object that provides cell definition
            // p4: the rowIndex, thye index on which the click has happened
            // p5: the e, the event object
            // p6: the opt, the option addin JSON data
            // rowClick: function(grid, record, tr, rowIndex, e, opt) {
            //     // read data at specific index from the store
            //     var rec = grid.getStore().getAt(rowIndex);
            //     alert(JSON.stringify(rec.data));
            // },

            edit: function(editor, e) {
                // logic for edit
                alert(editor);
            }
        }
    });
});