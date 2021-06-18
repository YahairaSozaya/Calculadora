import React from 'react';
import '../assets/styles/components/Resultado.scss';

const Resultado=(props)=>(
    <div id="respuesta" className="result">
        <div id={props.Id}>
           <p>{props.valor}</p>
        </div>
    </div>
);

export default Resultado;
