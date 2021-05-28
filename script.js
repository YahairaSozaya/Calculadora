//LEER NODOS (BOTONES)
const uno=document.getElementById("uno");
const dos=document.getElementById("dos");
const tres=document.getElementById("tres");
const cuatro=document.getElementById("cuatro");
const cinco=document.getElementById("cinco");
const seis=document.getElementById("seis");
const siete=document.getElementById("siete");
const ocho=document.getElementById("ocho");
const nueve=document.getElementById("nueve");
const sumar=document.getElementById("sumar");
const multiplicar=document.getElementById("multiplicar");
const dividir=document.getElementById("dividir");
const restar=document.getElementById("restar");
const cero=document.getElementById("cero");
const punto=document.getElementById("punto");
const borrar=document.getElementById("borrar");
const igual=document.getElementById("igual");
const resultado_operacion=document.getElementById("resultado_operacion");

//AGREGAR FUNCIONALIDAD A LOS NODOS CON EL EVENTLISTENER
uno.addEventListener("click",(event)=>resultado_operacion.append(1));
dos.addEventListener("click",(event)=>resultado_operacion.append(2));
tres.addEventListener("click",(event)=>resultado_operacion.append(3));
cuatro.addEventListener("click",(event)=>resultado_operacion.append(4));
cinco.addEventListener("click",(event)=>resultado_operacion.append(5));
seis.addEventListener("click",(event)=>resultado_operacion.append(6));
siete.addEventListener("click",(event)=>resultado_operacion.append(7));
ocho.addEventListener("click",(event)=>resultado_operacion.append(8));
nueve.addEventListener("click",(event)=>resultado_operacion.append(9));
sumar.addEventListener("click",(event)=>resultado_operacion.append("+"));
restar.addEventListener("click",(event)=>resultado_operacion.append("-"));
multiplicar.addEventListener("click",(event)=>resultado_operacion.append("*"));
dividir.addEventListener("click",(event)=>resultado_operacion.append("/"));
punto.addEventListener("click",(event)=>resultado_operacion.append("."));
cero.addEventListener("click",(event)=>resultado_operacion.append("0"));
borrar.addEventListener("click",(event)=>borrando(resultado_operacion));

//FUNCIÓN BORRAR
function borrando(resultado_operacion){
    resultado_operacion.textContent="";
}

//FUNCIÓN IGUALDAD
igual.addEventListener("click",(event)=>{
    const numero=eval(resultado_operacion.textContent);
    borrando(resultado_operacion);
    resultado_operacion.append(numero);
    
})



