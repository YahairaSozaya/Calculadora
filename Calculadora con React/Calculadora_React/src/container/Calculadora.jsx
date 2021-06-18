import React from 'react';
import Resultado from '../components/Resultado';
import Botones from '../components/Botones';
import Botones_derecha from '../components/Botones_derecha';
import Boton_abajo from '../components/Boton_abajo';
import '../assets/styles/App.scss';

class Calculadora extends React.Component{

    state={
        resultado:"",
    }

    Id="resultado_operacion";
    

    handleClick=e=>{
        this.setState({resultado:this.state.resultado+e.target.value});     
    } 

    handleBorrar=e=>{
        this.setState({resultado:""})
    }

    handleResultado=e=>{
        this.setState({resultado:eval(this.state.resultado)});
    }
    

    render(){
        return(
            <div>
                <section className="calculator">
                    <Resultado Id={this.Id} valor={this.state.resultado}/>
                    <section className="buttons">
                        <Botones onBorrar={this.handleBorrar} onClick={this.handleClick}/>
                        <Botones_derecha  onResultado={this.handleResultado} onClick={this.handleClick}/>
                        <Boton_abajo onClick={this.handleClick}/>
                    </section>
                </section>
            </div>
        )
    }  
};

export default Calculadora;
