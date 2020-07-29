var StringObject = function() {
        function prinatMessage() {
            console.log('I am private function');
        }
        this.getStringLength = function(str) {
            return str.length;
        };
        this.paramsFunction = function(str) {
            var strResult = '';
            for (var i = 0; i < str.length; i++) {
                strResult += str[i];
            }
            return strResult;
        };

        this.paramsArgumentsFunction = function(arguments) {
            var strResult = '';
            for (var i = 0; i < arguments.length; i++) {
                strResult += arguments[i];
            }
            return strResult;
        };

        this.reverseString = function(str) {
            var strResult = '';
            for (var i = str.length - 1; i >= 0; i--) {
                strResult += str[i];
            }
            return strResult;
        }
    }
    // define an instance of the Function Reference
    // var sObj = new StringObject();
    // console.log(sObj.getStringLength('Mahesh'));
    // console.log(sObj.reverseString('Mahesh'));

// console.log(sObj.paramsFunction(['A', 'B', 'C']));
// console.log(sObj.paramsFunction(['P', 'Q', 'R', 'S']));

// console.log();

// console.log(sObj.paramsArgumentsFunction('A', 'B', 'C'));
// console.log(sObj.paramsArgumentsFunction('P', 'Q', 'R', 'S'));


// console.log(sObj.changeCase('Js', 'U'));
// console.log(sObj.changeCase('Js', 'L'));