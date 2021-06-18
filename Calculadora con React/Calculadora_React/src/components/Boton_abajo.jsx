import React from 'react';
import '../assets/styles/components/Gray.scss';
import '../assets/styles/components/Item_bottom.scss';

class Boton_abajo extends React.Component{
    render(){
        return(
            <div className="bottom">
                <button id="cero" className="item_bottom"  onClick={this.props.onClick} value="0">0</button>
                <button id="punto" className="gray item_bottom"  onClick={this.props.onClick} value=".">.</button>
            </div>  
        )
    }
};

export default Boton_abajo;