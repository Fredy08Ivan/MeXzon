import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListaCard from './Productos_Presentacion/producto_Card';

import './home.css';
import Example from './slid'

function home() {

    return (
        <div>
            <div className="container-fluid ml-2">
                <Example />
            </div>
            <br></br>
            <br></br>
            <h1 class="display-4" className="text-center t3xt"> Bienvenido a MeXzone</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="container-fluid" >
        //cambio de linea mb-4//
                <div className="card border-dark mb-4" style="width:820px">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/ciclo-compra.png" alt="..." className="imge-c" width="450px" height="236px" />
                        </div>
        //mofificacion linea de 8 a 6//
                        <div className="col-md-6 txt-card">
                            <div className="card-body">
                                <h5 className="card-title txt-card">MeXzon es para tí</h5>
                                <p className="card-text txt-card">
                                    Las aplicaciones móviles son la razón por la que los usuarios pasan cada vez más tiempo en sus teléfonos, pues estas simplifican
                                    gran parte de los procesos de la vida cotidiana como las compras, las comunicaciones y el entretenimiento. Así MeXzon te simplifica
                                    tus compras para que tu no sientas la molestia de salir de casa frente a esta pandemia donde los repartidores altamente capacitados
                                    llevaran tus pedidos con la mejor calidad pasando pruebas de calidad.
                                    </p>
                                <p className="card-text txt-card"><small class="text-muted">Actualizado hace 3 horas por Andy</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="card border-dark mb-3">
                    <div className="row g-0">
                        <div className="col-md-8 txt-card">
                            <div className="card-body">
                                <h5 className="card-title txt-card">Tu seguridad</h5>
                                <p className="card-text txt-card">
                                    En líneas generales, seguridad de datos se refiere a medidas de protección de la privacidad digital que se aplican para evitar
                                    el acceso no autorizado a los datos, los cuales pueden encontrarse en ordenadores, bases de datos, sitios web, etc. La seguridad
                                    de datos también protege los datos de una posible corrupción. Por eso es importante para nossotros como empresa que tus datos siempre sean
                                    guardados de forma segura ya que nostros no tenemos acceso a ella solo el usuario puede ver y manejarla, sientete seguro de proporcionar tus
                                    datos mas importantes, sin miedo a perderla ;).
                                    </p>
                                <p className="card-text txt-card"><small class="text-muted">Actualizado hace 3 horas por Devdev</small></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="img/seguridad.jpg" alt="..." className="imge-s" width="449px" height="260px" />
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div className="card border-dark mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/QueC.jpg" alt="..." className="imge-c" width="450px" height="212px" />
                        </div>
                        <div className="col-md-8 txt-card">
                            <div className="card-body">
                                <h5 className="card-title txt-card">¿Que puede comprar?</h5>
                                <p className="card-text txt-card">
                                    Aactualmente nuestra pagina cuenta con algunos de las categorias mas escenciales para que el ususario
                                    tenga la seguridad de comprar con nosotros, algunas de nuestras categorias son Electronicos,Muebles y colchones,
                                    Juguetes,Belleza y cuidad y herramientas, donde estos son lo mas escencial buscado por las personas en investigaciones
                                    que recientemente se publican en nuestro Blog.
                                    </p>
                                <p className="card-text txt-card"><small class="text-muted">Actualizado hace 3 horas por Andy</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>

                <div className="card border-dark mb-3">
                    <div className="row g-0">

                        <div className="col-md-8 txt-card">
                            <div className="card-body">
                                <h5 className="card-title txt-card">Nuestro Blog</h5>
                                <p className="card-text txt-card">
                                    En nustro blog puedes encontrar los articulos mas destacados de la semana en donde nustros investigadores
                                    recopilan información sobre nuestros usuarios y la calidad de nuetsros Productos, ademas de como poder mejorar
                                    nuestros servicios para que usted como usuario de la pagina es la razón principal que necesitamos cada dia mejorar
                                    la interfaz grafica, los servicios de pago asi como de entrega, entre mcuhas otras variables que tenemos en cuenta :3.
                                    </p>
                                <p className="card-text txt-card"><small class="text-muted">Actualizado hace 3 horas por Andy</small></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="img/blog.jpg" alt="..." className="imge-B" width="450px" height="236px" />
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div class="card text-center">
                <div class="card-header">
                    Ahora si disfruta de nuestra pagina y compra todo lo que necesites
                    <a> </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                    </svg>
                </div>
                <div class="card-body">
                    <h5 class="card-title txt-card">Todo lo que tu necesitas </h5>
                    <p class="card-text txt-card">
                        Y tu solo sabes donde, solo en MeXzone.
                        <a> </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg></p>
                    <a href="#" class="btn btn-primary txt-card">Vamos, Ya!</a>
                </div>
                <div class="card-footer text-muted txt-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <a> </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <a> </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                    <br></br>
                    <a>
                        ©2021 Todos los derechos reservados
                    </a>
                </div>
            </div>
        </div>




    );
}


export default home;
