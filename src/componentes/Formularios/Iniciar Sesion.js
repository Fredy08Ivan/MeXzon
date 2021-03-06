import React, { useState} from "react";
import './styleH.css';
import Axios from 'axios'



function Login() {
    const [usernameR, setUsernameR] = useState("");
    const [password, setPassword] = useState("");

    const registrer = () => {
        Axios.post("http://localhost:4000/registrar", {
            username: usernameR, 
            password: password,
        }).then((response)=>{
            console.log(response);
        });
    };


    return (<div className="Container">
        <div className="card bg-dark text-white">

            <img src="./img/fondLog.jpg" class="card-img" alt="..." />
            <div className="card-img-overlay">
                <div className="container" id="registration-form">
                    <div className="image"></div>
                    <div className="frm">
                        <h1>Inciar Sesión</h1>
                        <form>
                            <div className="form-group">
                                <label for="username"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg> Usuario:</label>
                                <input type="text" class="form-control" name="usernameR" onChange={(e) => {setUsernameR(e.target.value);}} placeholder="Ingrese Usuario" />
                            </div>

                            <div className="form-group">
                                <label for="pwd"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg> Contraseña:</label>
                                <input type="password" className="form-control" name="password" id="pwd" onChange={(e) => {setPassword(e.target.value);}} placeholder="Ingrese contraseña"   />
                            </div>


                        </form>
                        <div class="form-group ml-5">
                            <button type="submit" className="botonI btn-danger btn-lg" onClick={registrer}>Ingresar</button>
                        </div>
                        <p className="text-center">O</p>
                        <div class="btn-group BotonS" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg> Facebook</button>
                            <div></div>
                            <button type="button" class="btn btn-secondary btn-lg botonGo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg> Gmail</button>
                        </div>
                    </div>

                </div>
                <div className="texto">
                    <label className="forgot-password text-right ml-5">
                        Olvide <a href="#">mi contraseña?  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg></a>
                    </label>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;