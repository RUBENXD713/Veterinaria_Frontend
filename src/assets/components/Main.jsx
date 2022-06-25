import React from "react";
import "../css/table.css";
import Foother from './Foother';



class Main extends React.Component {


    render(){
        return(

            <div class="container marginTop20">
            <table id="scrollableTable" class="table table-responsive table-sm scrollTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Date Of Birth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jared Garcia</td>
                  <td>Saint Vincent and The Grenadines</td>
                  <td>Nairn</td>
                  <td>tristique.pharetra@sedpede.edu</td>
                  <td>Quis Diam Company</td>
                  <td>07/04/20</td>
                </tr>
                <tr>
                  <td>Carter Vang</td>
                  <td>Saint Kitts and Nevis</td>
                  <td>Saint-Honor</td>
                  <td>Sed.malesuada@enimnectempus.com</td>
                  <td>Nulla In Tincidunt Associates</td>
                  <td>10/12/18</td>
                </tr>
                <tr>
                  <td>Lance Gonzalez</td>
                  <td>Japan</td>
                  <td>Maintal</td>
                  <td>consectetuer@loremac.ca</td>
                  <td>Orci Luctus PC</td>
                  <td>13/06/19</td>
                </tr>
              </tbody>
            </table>
            <Foother/>
          </div>
        );

    }
    
}

export default Main;