import React,{Component} from 'react';
import { Cell, Grid } from "react-mdl";

class Kontak extends Component{
    render(){
        return(
            <div style = {{width : '100%', margin : 'auto' }} >
                    <Grid className = "beranda-grid">
                        <Cell col={12}>
                                <br></br>
                                <br></br><br></br>
                                <br></br>
                                <br></br>
                            

                                <div className = "banner-text">
                                    <h1> Social Media </h1>
                                    <hr/>
                                    <div className = "social-links">
                                            
                                            <a href = "https://www.linkedin.com/in/hegin-christin-angeli-143069206/" rel = "noopener noreferrer" target = "_blank">
                                                <i className= "fa fa-linkedin" aria-hidden="true"/>
                                            </a>
                                            <a href = "https://www.instagram.com/hegin.c.a/" rel = "noopener noreferrer" target = "_blank">
                                                <i className= "fa fa-instagram" aria-hidden="true"/>
                                            </a>
                                            <a href = "https://github.com/heginchristinangeli" rel = "noopener noreferrer" target = "_blank">
                                                <i className= "fa fa-github-square" aria-hidden="true"/>
                                            </a>
                                
                                    </div>
                                </div>
                            </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Kontak;