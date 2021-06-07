import React,{Component} from 'react';
import { Cell, Grid } from "react-mdl";
import { Card, CardText, CardTitle, CardActions, Button} from 'react-mdl';

class Karya extends Component{
    render(){
        return(
            <div style = {{width : '100%', margin : 'auto' }} >
                    <Grid className = "beranda-grid">
    
                    <Cell col={12}>
                              <br></br>
                    
                              <h2 className="text-title">Album</h2>
                         
                              <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                              <CardTitle expand style={{color: '#fff', background: 'url(https://i.pinimg.com/474x/7a/8b/af/7a8bafc82436adf3692fe646df8ac6e6.jpg) bottom right 15% no-repeat #46B6AC'}}></CardTitle>
                              <CardText>
                                   Some Boring, Love Stories by Powfu
                              </CardText>
                              <CardActions border>
                                   <Button colored>Listen Now</Button>
                              </CardActions>
                              </Card>                     

                              <br></br>
                              <Card shadow={0} style={{width: '300px', height: '300px', margin: 'auto'}}>
                              <CardTitle expand style={{color: '#fff', background: 'url(https://upload.wikimedia.org/wikipedia/en/1/13/Whack_World.jpg) bottom right 15% no-repeat #46B6AC'}}></CardTitle>
                              <CardText>
                                    Whack World by Tierra Whack
                              </CardText>
                              <CardActions border>
                                   <Button colored>Listen Now</Button>
                              </CardActions>
                              </Card>  
                              
                                   
                         </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Karya;