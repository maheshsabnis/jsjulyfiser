(function() {

    var employee = {
        eno: 0,
        ename: ''
    }


    var eno = document.getElementById('eno');
    // receive th data from sessionStorage based on key
    eno.addEventListener('change', function() {
        var e = this.value;
        var obj = sessionStorage.getItem(e);
        var emp = JSON.parse(obj);
        document.getElementById('ename').value = emp.ename;

    }, false);

    var btnNew = document.getElementById('btnNew');
    btnNew.addEventListener('click', function() {
        document.getElementById('eno').value = '';
        document.getElementById('ename').value = '';
    }, false);

    var btnSave = document.getElementById('btnSave');
    btnSave.addEventListener('click', function() {
        //  get the count of records in sessionStorage
        var recCount = sessionStorage.length;
        var inputs = document.getElementsByClassName('c1');
        employee.eno = inputs[0].value;
        employee.ename = inputs[1].value;
        // save data in sessionStorage
        sessionStorage.setItem(employee.eno, JSON.stringify(employee));
    }, false);

    var btnClear = document.getElementById('btnClear');
    btnClear.addEventListener('click', function() {
        sessionStorage.clear();
    }, false);
})()