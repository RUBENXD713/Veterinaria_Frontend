import React from "react";
import "../css/Foother.css";

class Foother extends React.Component {


    render(){
        return(

          <div class="mt-5 pt-5 pb-5 footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-xs-12 about-company">
                <h2>Veterinaria</h2>
                <p class="pr-5 text-white-50">Texto de ejemplo: bibliografia de la veterinaria. </p>
                <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
              </div>
              <div class="col-lg-3 col-xs-12 links">
                <h4 class="mt-lg-0 mt-sm-3">Creators</h4>
                  <ul class="m-0 p-0">
                    <li>- <a href="#">Ruben Hernandez Barraza</a></li>
                    <li>- <a href="#">Raul Alejandro de los Santos</a></li>
                    <li>- <a href="#">Ubaldo Santiago Ramirez</a></li>
                    <li>- <a href="#">Luis Fernando Martinez Moya</a></li>
                    <li>- <a href="#">Manuel Alejandro Zamora</a></li>
                  </ul>
              </div>
              <div class="col-lg-4 col-xs-12 location">
                <h4 class="mt-lg-0 mt-sm-4">Ubicacion</h4>
                <p>Carr. Torreón - Matamoros S/N-Km 10, Ejido el Águila, 27400 Torreón, Coah.</p>
                <p class="mb-0"><i class="fa fa-phone mr-3"></i>(871) 3452055</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col copyright">
                <p class=""><small class="text-white-50">Copyright ©2022 All rights reserved by: VeterinariaTM Industries</small></p>
              </div>
            </div>
          </div>
          </div>
        );

    }
    
}

export default Foother;