import React from'react';
import '../assets/styles/components/Boton_cuadrado.scss';
import '../assets/styles/components/Gray.scss';

class Botones extends React.Component{

    render(){
        return(
            <div className="botones">
                <button id="borrar" className="gray botones_cuadrado" onClick={this.props.onBorrar} value="C">C</button>
                <button id="dividir" className="gray botones_cuadrado" onClick={this.props.onClick} value="/">/</button>
                <button id="multiplicar" className="gray botones_cuadrado" onClick={this.props.onClick} value="*">*</button>
                <button id="7" className="botones_cuadrado" type="button" onClick={this.props.onClick} value="7">7</button>
                <button id="ocho" className="botones_cuadrado" onClick={this.props.onClick} value="8">8</button>
                <button id="nueve" className="botones_cuadrado" onClick={this.props.onClick} value="9">9</button>
                <button id="cuatro" className="botones_cuadrado" onClick={this.props.onClick} value="4">4</button>
                <button id ="cinco" className="botones_cuadrado" onClick={this.props.onClick} value="5">5</button>
                <button id="seis" className="botones_cuadrado" onClick={this.props.onClick} value="6">6</button>
                <button id="uno" className="botones_cuadrado" onClick={this.props.onClick} value="1">1</button>
                <button id="dos" className="botones_cuadrado" onClick={this.props.onClick} value="2">2</button>
                <button id="tres" className="botones_cuadrado" onClick={this.props.onClick} value="3">3</button>            
            </div>
        )
    }
}

export default Botones;

