import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Beranda extends Component {
     render(){
          return(
               <div style = {{width : '100%', margin : 'auto' }} >
                    <Grid className = "beranda-grid">
                         <Cell col={12}>
                              <img  
                              src= "https://lumiere-a.akamaihd.net/v1/images/ct_moana_upcportalreskin_20694_9c72dc27.jpeg?region=0,0,330,330"
                              alt="moana"
                              className="moana-img"/>

                              <div className = "banner-text">
                                   <h1> Hegin Christin Angeli </h1>
                                   <hr/>
                                   <p> HTML/CSS | PHP | MySQL | Bootstrap | Javascript | React | React Native | Codeigniter | Laravel </p>

                                   <div className = "social-links">
                                        <a href = "https://www.facebook.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-facebook-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://twitter.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-twitter-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://github.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-github-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://www.linkedin.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-linkedin-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://www.youtube.com/" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-youtube-square" aria-hidden="true"/>
                                        </a>
                                   </div>
                              </div>
                         </Cell>
                    </Grid> 
               </div>
          )
     }
}
export default Beranda;