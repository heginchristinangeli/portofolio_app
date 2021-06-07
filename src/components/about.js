import React,{Component} from 'react';
import { Cell, Grid } from "react-mdl";
import { Card, CardText, CardTitle} from 'react-mdl';

class About extends Component{
    render(){
        return(
            <div style = {{width : '100%', margin : 'auto' }} >
                    <Grid className = "beranda-grid">
                    <Cell col={12}>
                         <br></br>
                         <h2 className="text-title">About Me</h2>
                              <div>
                              <Card shadow={30} style={{width: '500px', margin: 'auto'}}>
                              <CardTitle style={{color: '#000', height: '300px', background: ' url(https://res.cloudinary.com/sisternet-co-id/image/upload/q_auto:best,f_auto/article/qcxujjwomhzzr1uogrel.jpg) center/cover'}}></CardTitle>
                              <CardText className="card-title">
                                   Hegin Christin Angeli
                              </CardText>
                              <CardText>
                                  Teknologi Rekayasa Perangkat Lunak<br/>
                                  Sekolah Vokasi<br/>
                                  Universitas Gadjah Mada
                              </CardText>
                              <CardText>
                                  2021
                              </CardText>
                              </Card>
                              </div>
                         </Cell>
                    </Grid>
            </div>
        )
    }
}

export default About;