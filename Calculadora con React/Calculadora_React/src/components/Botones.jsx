import React from'react';
import '../assets/styles/components/Boton_cuadrado.scss';
import '../assets/styles/components/Gray.scss';

const Botones=()=>(
    <section className="botones">
        <div id="borrar" className="gray botones_cuadrado">C</div>
        <div id="dividir" className="gray botones_cuadrado">/</div>
        <div id="multiplicar" className="gray botones_cuadrado">*</div>
        <div id="7" className="botones_cuadrado">7</div>
        <div id="ocho" className="botones_cuadrado">8</div>
        <div id="nueve" className="botones_cuadrado">9</div>
        <div id="cuatro" className="botones_cuadrado">4</div>
        <div id ="cinco" className="botones_cuadrado">5</div>
        <div id="seis" className="botones_cuadrado">6</div>
        <div id="uno" className="botones_cuadrado">1</div>
        <div id="dos" className="botones_cuadrado">2</div>
        <div id="tres" className="botones_cuadrado">3</div>
    </section>
);

export default Botones;

