//let boton = document.getElementById("calcular");
//boton.addEventListener("click", ()=>{console.log("se presiono el boton")});
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const VALOR=document.getElementById("peso");

let boton= document.getElementById("calcular");
boton.addEventListener("click", ()=>{console.log(document.getElementById("peso").value)});

boton.addEventListener("click",()=>{
    
    let peso = document.getElementById("peso").valueAsNumber;
    let flujo= CalcularHidratacion(peso);
        let mantenimiento=calcularMantenimiento(CalcularHidratacion(peso),1500);
        let mantenimiento2=calcularMantenimiento(CalcularHidratacion(peso),2000);
    if(isNaN(peso)){
        document.getElementById('error').style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }else{
        document.getElementById('error').style.display = 'none';
        FLU.innerHTML = "Flujo diario: "+flujo + ' cc/hr';
        MAN.innerHTML = 'El mantenimiento por hora con 1500 es: ' +mantenimiento + ' cc/hr '+" "+"con 2000 es : "+ mantenimiento2 + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

    }});

function CalcularHidratacion(peso){
    let volumenTem
    let volumen;
    if(peso<10){
       volumen= peso*100;
       return volumen;
    }else if(peso<=20){
        volumenTem= 20-peso;
        volumen=((10-volumenTem)*50)+1000
        return volumen;
    }else if(peso<=30){
        volumenTem=30-peso;
        volumen=((10-volumenTem)*20)+1500
        return volumen;
    } else{
        volumen=( (peso * 4) + 7) / (peso + 90)
       return volumen
    }
}
function calcularMantenimiento(volumen, opcion){
    let manTemp= volumen/24;
    if(opcion===1500){
        mantenimiento= manTemp*1.5
    }else{
        mantenimiento= manTemp*2

    }
    var rounded = Math.round((mantenimiento + Number.EPSILON) * 100) / 100;
    return rounded;

    }

