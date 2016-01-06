


write(function(text) {
    console.log(text);
});

function write (cb) {
    var result = "";
    for (var i = 1; i < 38; i++) {
        if (i < 10) i = '0' + i;
        result += "import { Scene"+i+" } from './views/scene-"+i+".jsx';\n"
    }
    cb(result);
}
