var presenter = function() {
    this.subscribeClick = function() {
        var btnClick = document.getElementById('btnClick');
        btnClick.addEventListener('click', function() {
            console.log('The Button is clicked ' + this.value);
        }, false);
    }
}