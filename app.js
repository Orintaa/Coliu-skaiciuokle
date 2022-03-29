var output = document.getElementById('col');
var btnSkaiciuoti = document.getElementById('skaiciuoti');
var inputCm = document.getElementById('cm');
var coliai = function (cm) {
    return cm * 0.39370;
};
var skaiciuoti = function () {
    var cemai = inputCm.valueAsNumber;
    if (output != null) {
        output.innerHTML = '' + coliai(cemai);
    }
};
if (btnSkaiciuoti != null) {
    btnSkaiciuoti.onclick = skaiciuoti;
}
