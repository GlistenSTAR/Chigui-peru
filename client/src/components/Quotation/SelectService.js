import React, { Component } from "react"; 
import InputGroup from "../common/InputGroup";
import {Card} from 'react-bootstrap'
import RecommandedCarsel from './RecommandedCarsel';

class SelectService extends Component {
  constructor(props){
    super(props);
    this.state ={
      search:''
    }
  }

  onChange = (e) =>{
    console.log(e); 
  }

  render() {
    return (
     <div className="services container" align="center">
       <div className="row" align="center">
        <InputGroup
          name="search"
          icon="fa fa-search"
          onChange={this.onChange}
          value={this.state.search}
          placeholder="Búsqueda..."
        />
        <div className="horizal-card row">
          <div className="col-md-3 col-sm-3 col-3 mt-auto mb-auto" align="right">
            <img className="img-rounded" alt="" src={require('../../img/icons/diagnostico.png')}/>
          </div>
          <div className="col-md-6 col-sm-6 col-6 text text-default mt-auto mb-auto">
            <span>Diagnosticar una falla</span><br/>
            <small>¿No sabes la falla? Descubrámosla</small>
          </div>
          <div className="col-md-3 col-sm-3 col-3 mt-auto mb-auto" align="center">
              <button className="btn btn-sm btn-success">Aqui!</button>
          </div>
        </div>
        <div className="recommand mt-4" align="left">
          <h6>Destacados</h6><hr/>
          <div className = "row" style={{background:'#F3F3F3', borderRadius:'10px', padding:'10px'}}>
            <div className="col-md-4 col-4" align="center">
              <Card>
              <Card.Img variant="top" src={require('../../img/icons/escaner.png')} />
              <Card.Body>
                <Card.Text>
                  Servicio de Escáner
                </Card.Text>
              </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-4" align="center">
              <Card>
              <Card.Img variant="top" src={require('../../img/icons/latoneria_y_pintura.png')} />
              <Card.Body>
                <Card.Text>
                Latoneria y Pintura
                </Card.Text>
              </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-4" align="center">
              <Card align="center">
                <Card.Img variant="top" src={require('../../img/icons/revision_por_kilometraje.png')}/>
              <Card.Body>
                <Card.Text>
                Revisión por Kilometraje
                </Card.Text>
              </Card.Body>
              </Card>
            </div>
          </div>
          
          <div className="review mt-3">
            <h6>Revisiones</h6><hr/>
            <RecommandedCarsel/>
          </div>
        </div>
       </div>
     </div>
    );
  }
}

export default SelectService;