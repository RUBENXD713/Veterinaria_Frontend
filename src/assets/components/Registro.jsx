import React from "react";
import '../css/Login.css';
import axios  from "axios";
import {Apiurl} from "../services/apirest";


import logo from "../img/Logo.jpg";

class Registro extends React.Component {

    state={
        form:{
            email:"",
            password: "",
        },
        error:false,
        errorMessage: ""
    }

    manejadorSubmit=e=>{e.preventDefault();}

    manejadorChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    manejadorBoton=()=>{
        let url = Apiurl+"login";
        console.log(url);
        axios.post(url, this.state.form).then(response => {
            console.log(response);
        })
    } 

    render(){
        return(
            <React.Fragment>

                <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                    <img src={logo}id="icon" alt="User Icon" />
                    </div>


                    <form onSubmit={this.manejadorSubmit}>
                    <input type="text" className="fadeIn second" name="nombre" placeholder="Nombre" onChange={this.manejadorChange}/>
                    <input type="text" className="fadeIn second" name="email" placeholder="Correo" onChange={this.manejadorChange}/>
                    <input type="text" className="fadeIn second" name="email" placeholder="Direccion" onChange={this.manejadorChange}/>
                    <input type="text" className="fadeIn second" name="email" placeholder="Telefono" onChange={this.manejadorChange}/>
                    
                    <input type="password" className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange}/>
                    <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton}/>
                    </form>


                    <div id="formFooter">
                    <a className="underlineHover" href="/register">Registrar</a>
                    </div>

                </div>
                </div>    


            </React.Fragment>
        );

    }
    
}

export default Registro;