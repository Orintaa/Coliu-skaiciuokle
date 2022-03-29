const output:HTMLElement|null = document.getElementById('col');
const btnSkaiciuoti = document.getElementById('skaiciuoti');
let inputCm = <HTMLInputElement> document.getElementById('cm');


const coliai = (cm:number) => {
    return cm * 0.39370;
}
const skaiciuoti = () => {
    let cemai = inputCm.valueAsNumber;
    if(output!=null) {
        output.innerHTML= '' + coliai(cemai);
    }
}

if(btnSkaiciuoti != null) {
    btnSkaiciuoti.onclick = skaiciuoti;
    }