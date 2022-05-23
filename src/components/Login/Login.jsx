import logo from "../../images/huellassanas.png";
import "./Login.scss";
import {useState} from "react";
import {LoginService} from "../../services/Login.service";

const Login = ()=>{

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [sw, setSw] = useState(false);
    const [error, setError] = useState(false);

    const handleUsuario = e => setUser(e.target.value);
    const handleContraseña = e => setPass(e.target.value);
    const login = e => {
        setSw(false);
        setError(false);
       e.preventDefault();
       var login = new LoginService().login({user,pass})
           .then(res => {
           if (res.ok){
           window.location.href = '/mascota';
           }
           else {
              setSw(true);
           }
           return res.json();
       }).then(data => {
           localStorage.setItem("token",data.value);
       })
           .catch(error => {
               setError(true);
           });
    }

    return(
        <>
            {error ? <div className="container alert alert-danger mt-2">Ha ocurrido un error! Comuniquese con su administrador</div> : null}
            <div className="container text-xl-center mt-5">
            <h1 className="text-xl-center tittle">Bienvenido Huellas Sanas</h1>
            <div className="container text-xl-center mt-5">
                <img  className="imag" src={logo}/>
            </div>
            <form className="mt-5">
                <div className="mb-3 text-xl-center">
                    <label htmlFor="user" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="user" onInput={handleUsuario}  />
                </div>
                <div className="mb-3 text-xl-center">
                    <label htmlFor="pass" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="pass" onInput={handleContraseña} />
                {sw ? <label className="errorLogin">Usuario o contraseña incorrecta</label> : null}
                </div>
                <button className="btn btn-info" onClick={login}>Iniciar Sesion</button>
            </form>
                <br/>
            </div>
        </>
    );
}
export default Login;