import React from 'react';
import '../assets/styles/components/Gray.scss';
import '../assets/styles/components/Item_right.scss';

const Botones_derecha=()=>(
    <div className="right">
        <div id="restar" className="gray item_right">-</div>
        <div id="sumar" className="gray item_right">+</div>
        <div id="igual" className="gray item_right">=</div>
    </div>
);

export default Botones_derecha;
