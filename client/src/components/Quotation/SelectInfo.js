import React, { Component } from 'react'
import { connect } from 'react-redux';
import { saveServices } from '../../actions/seviceActions';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { withRouter } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faCalendarAlt, faClock, faEdit, faMotorcycle, faCogs, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

class SelectInfo extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      phonenum: '',
      detail: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();

    const seviceData = {
      email: this.state.email,
      name: this.state.name,
      phonenum: this.state.phonenum,
      detail: this.state.detail,
      motor: JSON.parse(localStorage.getItem('motor')),
      date: localStorage.getItem('date'),
      time: localStorage.getItem('time'),
      sevices: JSON.parse(localStorage.getItem('sevices')),
      total_price: localStorage.getItem('price')
    };
    console.log(this.props);
    this.props.saveServices(seviceData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const motor = JSON.parse(localStorage.getItem('motor'));
    const date = localStorage.getItem('date');
    const time = localStorage.getItem('time');
    const sevice = JSON.parse(localStorage.getItem('sevices'));
    const price = localStorage.getItem('price');

    let sevices;

    sevices = sevice.map((item, index) => (
      <div
        className="row mt-4 mb-2"
        align="left"
        style={{ fontSize: '1.3rem', color: 'rgba(0,0,0,0.8)' }}
        key={index}
      >
        <div
          className="col-md-6"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <FontAwesomeIcon color="rgb(179,226,1)" icon={faCogs} />{' '}
          <p className="ml-2" style={{ marginTop: 'auto', marginBottom: 'auto' }}>{item.service_name}<br />
            <span style={{ color: 'grey', fontSize: '14px' }}>{item.time}mins</span></p>
        </div>

        <div className="col-md-4" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          {'S/.'}{item.price}
        </div>

        <div className="col-md-2" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <FontAwesomeIcon color="rgb(179,226,1)" icon={faEdit} />
        </div>
      </div>
    ));
    return (
      <form onSubmit={this.onSubmit}>
        <div className="sendData mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <div>
                  <TextFieldGroup
                    placeholder="Nombre y apellido *"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  <TextFieldGroup
                    placeholder="Celular *"
                    name="phonenum"
                    type="number"
                    value={this.state.phonenum}
                    onChange={this.onChange}
                  />
                  <TextFieldGroup
                    placeholder="Correo electrónico *"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <TextAreaFieldGroup
                    placeholder="¿Algún comentario adicional?"
                    name="detail"
                    value={this.state.detail}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="total_check mt-3 mb-5">
          <div className="container">
            <div className="row" align="center">
              <div className="green_box col-md-9" style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>

              <div
                className="main-box col-md-9"
                style={{
                  marginTop: '-280px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '100%'
                }}
              >
                <Card>
                  <Card.Header align="left">
                    <h3>Resumen / checkout</h3>
                  </Card.Header>

                  <Card.Body>
                    <div
                      className="row mt-2 mb-4"
                      align="left"
                      style={{ fontSize: '1.3rem', color: 'rgba(0,0,0,0.8)' }}>

                      <div className="col-md-6">
                        <FontAwesomeIcon color="rgb(179,226,1)" icon={faCalendarAlt} />{' '}
                        {date}
                      </div>

                      <div className="col-md-4">
                        <FontAwesomeIcon color="rgb(179,226,1)" icon={faClock} />{' '}
                        {time}
                      </div>

                      <div className="col-md-2">
                        <FontAwesomeIcon color="rgb(179,226,1)" icon={faEdit} />
                      </div>
                    </div>
                    <div
                      className="row mt-4 mb-2"
                      align="left"
                      style={{
                        fontSize: '1.3rem',
                        color: 'rgba(0,0,0,0.8)'
                      }}
                    >
                      <div className="col-md-6">
                        <FontAwesomeIcon color="rgb(179,226,1)" icon={faMotorcycle} />{' '}
                        {motor ? motor.motorname : ''}{' '}{motor.motormodel}{'/'}{motor.motorCylinder}
                      </div>
                      <div className="col-md-4">
                      </div>
                      <div className="col-md-2">
                        <FontAwesomeIcon color="rgb(179,226,1)" icon={faEdit} />
                      </div>
                    </div>

                    {sevices}

                    <div className="container">
                      <div className="mt-5 row">
                        <div className="col-md-8" align="left">
                          <span className="mt-5" style={{ color: 'grey' }}>Todos los servicios incluyen</span>
                        </div>
                        <div className="col-md-4 mt-4">
                          <hr />
                        </div>
                      </div>
                      <div className="row mt-4 mb-4">
                        <div
                          className="col-md-6 pl-5 mt-2 mb-2"
                          align="left">
                          Revisión de Calidad <br />
                          <span style={{ fontFamily: 'serif' }}>20mins</span>
                        </div>
                        <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                          <span className="badge badge-success msj-free " >
                            GRATIS
                          </span>
                        </div>
                        <div className="col-md-6 pl-5 mt-2 mb-2" align="left">
                          Revisión técnica <br />
                          <span style={{ fontFamily: 'serif' }}>20mins</span>
                        </div>
                        <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                          <span className="badge badge-success msj-free " >
                            GRATIS
                          </span>
                        </div>
                        <div
                          className="col-md-6 pl-5 mt-2 mb-2" align="left"
                        > Lavado en Seco <br />
                          <span style={{ fontFamily: 'serif' }}>30mins</span>
                        </div>
                        <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                          <span className="badge badge-success msj-free ">
                            GRATIS
                          </span>
                        </div>
                        <div
                          className="col-md-6 pl-5 mt-2 mb-2" align="left">
                          Desinfección <br />
                          <span style={{ fontFamily: 'serif' }}>10mins</span>
                        </div>
                        <div className="col-md-6" style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                          <span className="badge badge-success msj-free ">
                            GRATIS
                          </span>
                        </div>
                        <div
                          className="col-md-6 pl-5 mt-2 mb-2" align="left"
                        >
                          Garantía
                          <FontAwesomeIcon icon={faShieldAlt} style={{ color: 'green' }} />
                        </div>
                        <div
                          className="col-md-6"
                          style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                          <span className="badge badge-success  ">
                            GRATIS
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div align="left" className="ml-3 row">
                      <div className="col-md-6">
                        <h4>TOTAL<br /></h4>
                        <span>(IVA incluido)</span>
                      </div>
                      <div className="col-md-6" align="center">
                        <span align="right" style={{ fontSize: '24px', color: 'green' }}>{'S/. '}{price}</span>
                      </div>
                    </div>
                    <hr style={{ marginTop: '5px' }} />

                    <button className="form-control btn btn-lg btn-success" type="submit">ENVIAR</button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

SelectInfo.propTypes = {
  saveServices: PropTypes.func.isRequired,
};

export default connect(null, { saveServices })(withRouter(SelectInfo));

