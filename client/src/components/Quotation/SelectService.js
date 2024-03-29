import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalTemplate from '../common/Modal'
import { getServices } from '../../actions/seviceActions';

import ReviewCarsel from './ReviewCarsel';
import RecommandedCarsel from './RecommandedCarsel';
import HighlightCarsel from './HighlightCarsel';
import ElectronicCarsel from './ElectronicCarsel';
import ElectronicModal from '../minicomponents/Mechines'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faShieldAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class SelectService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      price: 0,
      amount: 0,
      carts: [],
      cart_show: false,
      free_cart: [],
      additional_tag: {}
    }
  }

  componentDidMount() {
    this.props.getServices();
  }

  onChange = (price, name, time, data) => {
    if (data !== null) {
      if (data.content) {
        const temp = {
          content: data.content,
          name: this.state.additional_tag.data ? this.state.additional_tag.data.name : null,
          referr: this.state.additional_tag.data ? this.state.additional_tag.data.referr : null
        };
        this.setState({ additional_tag: { name: name, data: temp } })
      } else {
        const temp = {
          content: this.state.additional_tag.data ? this.state.additional_tag.data.content : null,
          name: data.name,
          referr: data.referr
        };
        this.setState({ additional_tag: { name: name, data: temp } })
      }
    }
    if (name === "updatePrice") {
      if (this.state.carts.length > 0) {
        let total_price = 0;
        this.state.carts.map((item, index) => {
          if (item.service_name === "Cambio de Aceite") {
            let temp = this.state.carts;
            temp[index].price = price;
            this.setState({ carts: temp });
            total_price += price;
          } else {
            total_price += item.price;
          }
          this.setState({ price: total_price })
          return 0;
        });
      }
    } else {
      let price1 = Number(price);

      if (price1 >= 0) {
        price = price1;
      }

      let new_cart = { service_name: name, price: price, time: time };
      let amount, same_flag = 0, index = 0;
      let carts_temp = this.state.carts;

      //price_services
      if (this.state.carts.length >= 0) {
        this.state.carts.map((cart, _i) => {
          if (cart.service_name === name) {
            same_flag = 1;
            index = _i;
          }
          return 0;
        });

        if (same_flag === 1) {
          // let price_before = this.state.carts.price[index];
          carts_temp.splice(index, 1);
          if (typeof price === "number") {
            price = this.state.price - parseInt(price, 10);
          } else {
            price = this.state.price;
          }
          amount = this.state.amount - 1;
          this.setState({ carts: carts_temp });
          this.setState({ price: price, amount: amount });
        } else {
          carts_temp.push(new_cart);
          this.setState({ carts: carts_temp });
          if (typeof price === "number") {
            price = this.state.price + parseInt(price, 10);
          } else {
            price = this.state.price;
          }
          amount = this.state.amount + 1;
          this.setState({ price: price, amount: amount });
        }
        return 0;
      } else {
        carts_temp.push(new_cart);
        this.setState({ carts: carts_temp });
        if (typeof price === "number") {
          price = this.state.price + parseInt(price, 10);
        } else {
          price = this.state.price;
        }
        amount = this.state.amount + 1;
        this.setState({ price: price, amount: amount });
      }
    }
  }

  show_cart = () => {
    this.setState({ cart_show: !this.state.cart_show })
  }

  total_diagnose = () => {
    this.setState({ total_diagnose_modal: true });
  }

  total_diagnose_modal_close = () => {
    this.setState({ total_diagnose_modal: false });
  }

  deleteRow = (index) => {
    let temp = this.state.carts;
    let deleted_price = this.state.carts[index].price
    console.log(deleted_price)
    temp.splice(index, 1);
    this.setState({ carts: temp, amount: this.state.amount - 1 });
    this.setState({ price: this.state.price - deleted_price });
  }

  go_nextStep = () => {
    localStorage.setItem('sevices', JSON.stringify(this.state.carts));
    localStorage.setItem('price', JSON.stringify(this.state.price));
    localStorage.setItem('secondRow', JSON.stringify(this.state.additional_tag.data||''))
    this.props.nextclick();
  }

  render() {
    const { serivces } = this.props;
    let tableContent = this.state.carts.map((cart, index) => (
      <tr key={index} align="center" style={{ fontSize: '13px' }}>
        <td style={{ textTransform: 'uppercase' }}>
          {' '}{cart.service_name}<br />
          {
            this.state.additional_tag !== null && (cart.service_name.toUpperCase() === "CAMBIO DE ACEITE" || cart.service_name.toUpperCase() === "ELIGE EL RIN" || this.state.additional_tag.name === "updatePrice") ? (
              <span>
                {
                  cart.service_name.toUpperCase() === "CAMBIO DE ACEITE" || this.state.additional_tag.name === "updatePrice" ?
                    "[" + this.state.additional_tag.data.name + "] [" + this.state.additional_tag.data.referr + "]"
                    :
                    this.state.additional_tag.data.content
                }
                <br />
              </span>
            ) : ''
          }
          <span style={{ fontFamily: 'serif' }}>
            {cart.time}{' '}mins
          </span>
        </td>
        <td>
          {typeof cart.price === "number" ? 'S/.' : ''}
          {cart.price}
          <br />
        </td>
        <td><FontAwesomeIcon icon={faTrashAlt} size="2x" onClick={() => this.deleteRow(index)} /></td>
      </tr>
    ));


    return (
      <div className="services container" align="center">
        <div className="row" align="center">
          <div className="horizal-card row" onClick={this.total_diagnose}>
            <div className="col-md-3 col-sm-3 col-3 mt-auto mb-auto" align="right" >
              <img className="img-rounded" alt="" src={require('../../img/icons/diagnostico.png')} style={{ visibility: 'visible' }} />
            </div>
            <div className="col-md-6 col-sm-6 col-6 text text-default mt-auto mb-auto" >
              <span >Diagnosticar una falla</span><br />
              <small style={{ color: 'grey' }}>¿No sabes la falla? Descubrámosla</small>
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
            onchange1={(price, name, time) => this.onChange(price, name, time)}
          />

          <div className="recommand mt-4" align="left">
            <h6 style={{ color: 'grey' }}>DESTACADOS</h6><hr />
            <HighlightCarsel
              addCart={(price, name, time, data) => { this.onChange(price, name, time, data) }}
              style={{ backgroundColor: '#FEFEFE' }} />

            <div className="review mt-3">
              <h6 style={{ color: 'grey' }}>REVISIONES</h6><hr />
              <ReviewCarsel
                addCart={(price, name, time) => { this.onChange(price, name, time, null) }}
              />
            </div>

            <div className="review mt-3">
              <h6 style={{ color: 'grey' }}>SERVICIOS EXPRESS</h6><hr />
              <RecommandedCarsel
                addCart={(price, name, time, data) => { this.onChange(price, name, time, data) }}
              />
            </div>
          </div>

          <div className="mechine mt-3" align="center">
            <div className="recommand clone" align="left">
              <h6 style={{ color: 'grey' }}>ELECTRICIDAD</h6><hr />
              <ElectronicCarsel
                addCart={(price, name, time) => { this.onChange(price, name, time, null) }}
              />
            </div>
            <h6 align="left" style={{ color: 'grey' }}>MECANICA</h6><hr />
            <div className="row" style={{ backgroundColor: '#EAEAEA', borderRadius: '10px' }}>
              <div className="col-md-4 col-6">
                <div className="item row" style={{ borderRadius: '28px' }} onClick={() => this.setState({ breakpadShow: true })}>
                  <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon" /></div>
                  <div className="col-7 mt-2" align="left">Pastilla de frenos</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="item row" style={{ borderRadius: '28px' }} onClick={() => this.setState({ batteryChangeShow: true })}>
                  <div className="col-5"><img src={require('../../img/icons/cambio de bateria.png')} alt="icon" /></div>
                  <div className="col-7 mt-2" align="left">Cambio de Bateria</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="item row" style={{ borderRadius: '28px' }} onClick={() => this.setState({ gernalMainShow: true })}>
                  <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon" /></div>
                  <div className="col-7 mt-2" align="left">Mantenimiento General</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="item row" style={{ borderRadius: '28px' }} onClick={() => this.setState({ premiunMainShow: true })}>
                  <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon" /></div>
                  <div className="col-7 mt-2" align="left">Mantenimiento premiun</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '100%' }} align="cener">
            <div
              className="row mt-4 mb-5"
              style={{ width: '100%', paddingLeft: 'auto', paddingRight: 'auto' }}
              align="center"
            >
              <button
                className="btn form-control"
                style={{ background: 'rgb(179,226,1)', color: 'black' }}
                onClick={this.go_nextStep}
              >RESERVAR CITA</button>
            </div>
          </div>

          {this.state.amount > 0 ? (
            <div className="bucket" align="left" style={{ zIndex: '9999999999999999', boxShadow: "-2px -6px 14px -6px rgb(0 0 0 / 75%)" }} >
              <div className="bucketIcon pl-4 pr-5 pt-2 d-flex justify-content-around " style={{ color: 'white', lineHeight: '1' }} onClick={this.show_cart}>
                <div style={{}}>
                  <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" style={{}} />
                  <span
                    className="badge badge-success"
                    style={{ marginLeft: '-10px', paddingTop: '-20px', backgroundColor: 'green' }}>
                    {this.state.amount}</span>
                </div>
                <h5 align="center" className="mt-1 pa-1" >{this.state.cart_show ? "Total" : "ver motocicleta"} </h5>
                <h5 align="center" className="mt-1 pl-1" >{this.state.price ? 'S/.' : ''}{' '}{
                  this.state.price ?
                    this.state.price
                    :
                    ''
                }</h5>
              </div>
              {this.state.cart_show ? (
                <div className="text-grey bg-white" align="center" style={{ lineHeight: '1', marginTop: '10px' }}>
                  <table className="table table-bordered" id="table" style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', border: '1px sold whitesmoke' }}>
                    <tbody className="pb-5">
                      {tableContent}
                    </tbody>
                  </table>
                  <div className="row mt-4 mb-4">
                    <p align="left" className="ml-5">Todos los servicios incluyen</p>
                    <div className="col-md-6 pl-5 mt-2 mb-2" align="left"> Revisión de Calidad <br /><span style={{ fontFamily: 'serif' }}>20mins</span></div>
                    <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                      <span className="badge badge-success msj-free "  >
                        GRATIS
                      </span>
                    </div>
                    <div className="col-md-6 pl-5 mt-2 mb-2" align="left"> Revisión técnica <br /><span style={{ fontFamily: 'serif' }}>20mins</span></div>
                    <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                      <span className="badge badge-success msj-free  " >
                        GRATIS
                      </span>
                    </div>
                    <div className="col-md-6 pl-5 mt-2 mb-2" align="left"> Lavado en Seco <br /><span style={{ fontFamily: 'serif' }}>30mins</span></div>
                    <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                      <span className="badge badge-success msj-free " >
                        GRATIS
                      </span>
                    </div>
                    <div className="col-md-6 pl-5 mt-2 mb-2" align="left"> Desinfección <br /><span style={{ fontFamily: 'serif' }}>10mins</span></div>
                    <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                      <span className="badge badge-success msj-free " >
                        GRATIS
                      </span>
                    </div>
                    <div className="col-md-6 pl-5 mt-2 mb-2" align="left"> Garantía  <FontAwesomeIcon icon={faShieldAlt} style={{ color: 'blue' }} /></div>
                    <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                      <span className="badge badge-success msj-free " >
                        GRATIS
                      </span>
                    </div>
                  </div>
                  <hr />
                  <button
                    className="mt-3 mb-3 btn btn-outline-success"
                    style={{ width: '95%' }}
                    onClick={this.go_nextStep}
                  >RESERVAR CITA</button>
                </div>
              ) : ''}
            </div>
          ) : ''}
        </div>
        <ElectronicModal
          first={this.state.breakpadShow}
          second={this.state.batteryChangeShow}
          third={this.state.gernalMainShow}
          fourth={this.state.premiunMainShow}
          hideFirst={() => this.setState({ breakpadShow: false })}
          hideSecond={() => this.setState({ batteryChangeShow: false })}
          hidethird={() => this.setState({ gernalMainShow: false })}
          hideFourth={() => this.setState({ premiunMainShow: false })}
          addCart={(price, name, time) => { this.onChange(price, name, time, null) }}
        />
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
