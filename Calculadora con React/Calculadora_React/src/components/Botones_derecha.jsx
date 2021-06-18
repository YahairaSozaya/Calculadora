import React from 'react';
import '../assets/styles/components/Gray.scss';
import '../assets/styles/components/Item_right.scss';

class Botones_derecha extends React.Component{
    render(){
        return(
            <div className="right">
                <button id="restar" className="gray item_right"  onClick={this.props.onClick} value="-">-</button>
                <button id="sumar" className="gray item_right"  onClick={this.props.onClick} value="+">+</button>
                <button id="igual" className="gray item_right"  onClick={this.props.onResultado}>=</button>
            </div>
        )
    }
    
};

export default Botones_derecha;
