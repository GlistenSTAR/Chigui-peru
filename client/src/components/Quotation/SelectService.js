import React, { Component } from "react"; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalTemplate from '../common/Modal'
import { getServices } from '../../actions/seviceActions';

import ReviewCarsel from './ReviewCarsel';
import RecommandedCarsel from './RecommandedCarsel';
import HighlightCarsel from './HighlightCarsel';
import ElectronicCarsel from './ElectronicCarsel';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faRecycle } from '@fortawesome/free-solid-svg-icons';

class SelectService extends Component {
  constructor(props){
    super(props);
    this.state ={
      search : '',
      price: 0,
      amount: 0,
      carts: [],
      cart_show: false,
      free_cart:[]
    }
  }

  componentDidMount(){
    this.props.getServices();
  }
  onChange = (price, name, time) =>{
    let new_cart = {service_name : name, price : price, time : time};
    let amount, same_flag=0, index=0;
    let carts_temp = this.state.carts;
    
    //free_services
    if(new_cart.price===0){
      let new_free_cart = this.state.free_cart.push(new_cart);
      this.setState({ free_cart : new_free_cart });
    }

    //price_services
    if(this.state.carts.length > 0){
      this.state.carts.map((cart, _i)=>{
        if(cart.service_name === name) {
          same_flag = 1;
          index = _i;
        } 
        return 0;
      });
      if(same_flag===1){
          carts_temp.splice(index, 1);
          price  = this.state.price - parseInt(price, 10);
          amount = this.state.amount - 1;
          this.setState({carts: carts_temp});
          this.setState({price: price, amount: amount});
      } else {
          carts_temp.push(new_cart);
          this.setState({carts: carts_temp});
          price  = this.state.price + parseInt(price, 10);
          amount = this.state.amount + 1;
          this.setState({price: price, amount: amount});
      }
      return 0;
    } else{
      carts_temp.push(new_cart);
      this.setState({carts: carts_temp});
      price  = this.state.price + parseInt(price, 10);
      amount = this.state.amount + 1;
      this.setState({price: price, amount: amount});
    }
  }

  show_cart=()=>{
    this.setState({cart_show:!this.state.cart_show})
  }

  total_diagnose = () =>{
    this.setState({ total_diagnose_modal : true });
  }

  total_diagnose_modal_close = () =>{
    this.setState({ total_diagnose_modal : false});
  }

  render() {
    let free_services;
    const {serivces} = this.props;
    let tableContent = this.state.carts.map((cart, index)=>(
        <tr key={index} align="center" style={{fontSize:'13px'}}>
          <td style={{textTransform: 'uppercase'}}>{' '}{cart.service_name}</td>
          <td>S/.{cart.price}</td>
          <td>{cart.time}{' '}mins</td>
        </tr>
    ));
    if(this.state.free_cart.length > 0){
      // free_services = this.state.free_cart.map((cart, key)=>(
      //   <div className="row" key={key}>
      //     <div className="col-md-2">
      //       <FontAwesomeIcon icon={faRecycle} size="2x"/>
      //     </div>
      //     <div className="col-md-5">
      //       {cart.name} <br/>
      //       <span style={{fontFamily:'serif'}}>{cart.time}</span>
      //     </div>
      //     <div className="col-md-5">
  
      //     </div>
      //   </div>
      // ));
    }  

    return (
     <div className="services container" align="center">
       <div className="row" align="center">
        {/* <InputGroup
          name="search"
          icon="fa fa-search"
          onChange={this.onChange}
          value={this.state.search}
          placeholder="Búsqueda..."
        /> */}
        <div className="horizal-card row"  onClick={this.total_diagnose}>
          <div className="col-md-3 col-sm-3 col-3 mt-auto mb-auto" align="right" >
            <img className="img-rounded" alt="" src={require('../../img/icons/diagnostico.png')} style={{visibility: 'visible'}} />
          </div>
          <div className="col-md-6 col-sm-6 col-6 text text-default mt-auto mb-auto" >
            <span >Diagnosticar una falla</span><br/>
            <small style={{color:'grey'}}>¿No sabes la falla? Descubrámosla</small>
          </div>
          <div className="col-md-3 col-sm-3 col-3 mt-auto mb-auto" align="center" >
              <button className="btn btn-sm" >Aqui!</button>
          </div>
        </div>

         {/* Diagnosticar una falla modal */}
         <ModalTemplate
            show={this.state.total_diagnose_modal}
            hide={this.total_diagnose_modal_close}
            data={serivces.services}
            type={1}
            onchange1={(price, name, time)=>this.onChange(price, name, time)}
         />
        
        <div className="recommand mt-4" align="left">
          <h6 style={{color:'grey'}}>DESTACADOS</h6><hr/>
          <HighlightCarsel 
            addCart={(price, name, time) => {this.onChange(price, name, time)}} 
            style={{backgroundColor:'#FEFEFE'}}/>
          
          <div className="review mt-3">
            <h6 style={{color:'grey'}}>REVISIONES</h6><hr/>
            <ReviewCarsel 
              addCart={(price, name, time) => {this.onChange(price, name, time)}} 
            />
          </div>
          
          <div className="review mt-3">
            <h6 style={{color:'grey'}}>SERVICIOS EXPRESS</h6><hr/>
            <RecommandedCarsel 
              addCart={(price, name, time) => {this.onChange(price, name, time)}}
            />
          </div>
        </div>

        <div className="mechine mt-3" align="center">
          <div className="recommand clone" align="left">
            <h6 style={{color:'grey'}}>ELECTRICIDAD</h6><hr/>
            <ElectronicCarsel 
              addCart={(price, name, time) => {this.onChange(price, name, time)}}
            />
          </div>
          <h6 align="left" style={{color:'grey'}}>MECANICA</h6><hr/>
          <div className="row" style={{backgroundColor:'#EAEAEA',borderRadius:'10px'}}>
            <div className="col-md-4 col-6">
              <div className="item row" style={{borderRadius:'28px'}}>
                <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon"/></div>
                <div className="col-7 mt-2" align="left">Pastilla de frenos</div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="item row" style={{borderRadius:'28px'}}>
                <div className="col-5"><img src={require('../../img/icons/cambio de bateria.png')} alt="icon"/></div>
                <div className="col-7 mt-2" align="left">Cambio de Bateria</div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="item row" style={{borderRadius:'28px'}}>
                <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon"/></div>
                <div className="col-7 mt-2" align="left">Mantenimiento General</div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="item row" style={{borderRadius:'28px'}}>
                <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon"/></div>
                <div className="col-7 mt-2" align="left">Mantenimiento premiun</div>
              </div>
            </div>
          </div>
        </div>

          <div style={{width:'100%'}} align="cener">
            <div 
              className="row mt-4 mb-5" 
              style={{width:'100%', paddingLeft:'auto', paddingRight:'auto'}} 
              align="center"
            >
              <button 
                className="btn form-control" 
                style={{background:'rgb(179,226,1)', color:'black'}} 
                onClick={this.props.nextclick}
              >RESERVAR CITA</button>
            </div>
          </div>
          
          {this.state.amount > 0?(
            <div className="bucket" align="left" style={{zIndex:'9999999999999999'}} onClick={this.show_cart}>
              <div className="bucketIcon pl-4 pr-5 pt-2" style={{color:'white'}}>
                <div style={{float:'left'}}>
                  <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" style={{float:'left'}}/>
                  <span 
                    className="badge badge-success" 
                    style={{marginLeft:'-10px', paddingTop:'-20px'}}>
                      {this.state.amount}</span>
                </div>
                <h5 align="center" className="mt-1 pl-5" style={{ float:'left'}}>Ver Motocicleta</h5>
                <h4 align="right">S/.{' '}{this.state.price}</h4>
              </div>
              {this.state.cart_show?(
                <div className="text-grey bg-white mt-2" align="center">
                  <h3>Precio total : <span>S/.{this.state.price}</span></h3>
                  {free_services}
                  <table className="table">
                    <thead>
                    <tr align="center">
                      <th width="60%">Nombre</th>
                      <th width="30%">Precio</th>
                      <th width="10%">Acción</th>
                    </tr>
                    </thead>
                    <tbody>
                      {tableContent}
                    </tbody>
                  </table>
                </div>
              ):''}
            </div>
          ):''}
       </div>
     </div>
    );
  }
}

SelectService.propTypes = {
  getServices: PropTypes.func.isRequired,
  services: PropTypes.object
};

const mapStateToProps = state => ({
  serivces: state.serivce,
});

export default connect(mapStateToProps, { getServices })(
  SelectService
);