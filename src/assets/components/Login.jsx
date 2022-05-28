import React from "react";
import '../css/Login.css';
import axios  from "axios";
import {Apiurl} from "../services/apirest";
import logo from "../img/Logo.jpg";


class Login extends React.Component {

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
        //const navigation = useNavigate();
        let url = Apiurl+"login";
        console.log(url);
        axios.post(url, this.state.form).then(response => {
            console.log(response.data);
            if(response.data === "credenciales incorrectas"){
                console.log("error");
                this.setState({
                    error : true,
                    errorMessage : "Error!! credenciales incorrectas",
                })
            }else{
                localStorage.setItem("token", response.data.token);
                console.log("paso");
                
            }
            
        }).catch(error => {
            console.log(error);
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
                    <input type="text" className="fadeIn second" name="email" placeholder="login" onChange={this.manejadorChange}/>
                    <input type="password" className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange}/>
                    <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton}/>
                    </form>

                    { this.state.error === true &&
                        <div id="formFooter">
                            <div class="alert alert-danger" role="alert">
                                {this.state.errorMessage}
                            </div>                    
                        </div>
                    }
                    

                </div>
                </div>    


            </React.Fragment>
        );

    }
    
}

export default Login;