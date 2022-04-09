import { Component} from "react";

const styles = { //declarar una const con caract para titulo
    title: {
        marginBottom:'30px',
    }
}

class Title extends Component { // agregar un componente titulo

    render(){
        return (

            <h1 style={styles.title}>Tienda</h1>
        )
    }
}
export default Title 