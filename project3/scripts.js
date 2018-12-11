        function writeResult(result) {
            document.getElementById("result").innerHTML = result;
        }
        
        function getValue(id) {
            return parseFloat(document.getElementById(id).value);
        }
        function volumeRectangle() {
            var length = getValue("length");
            var width = getValue("width");
            var height = getValue("height");
            var result = length * width * height;

            document.getElementById("result").innerHTML = result;
        }
        
        function volumeSphere() {
            var radius = getValue("radius");
            var result = radius * radius * radius * 3.14 * 1.33333;

            document.getElementById("result2").innerHTML = result;
        }
        
        function volumeCone() {
            var r = getValue("r");
            var h = getValue("h");
            var result = r * r * 3.14 * h / 3;

            document.getElementById("result3").innerHTML = result;
        }