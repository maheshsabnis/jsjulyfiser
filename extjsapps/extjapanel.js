// use the EXJS ready event, that will be exeucted alongside 
// with the document.ready
Ext.onReady(function() {
    Ext.create('Ext.Panel', {
        renderTo: 'dvcontainer',
        height: 400,
        width: 600,
        title: 'The First ExtJs Panel'
    });
});