import { Component } from "react";

const styles ={
    button: { // propiedades visuales del boton

        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor:'pointer',
    }
}
class Button extends Component{
    render(){
return(
        <button style={styles.button}{...this.props}/> //estos . pasan todas las propiedades de los componentes a button
        )
    }
}

export default Button;