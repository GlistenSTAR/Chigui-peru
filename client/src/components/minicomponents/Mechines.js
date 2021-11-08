import React, { Component } from "react";
import { Modal, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class ElectronicModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalprice: 0,
      flag6: false,
      flag: false,
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      select_battery_show: false,
      selected_battery_name: '',
      selected_battery_referr: '',
      selected_battery_price: ''
    }
  }
  componentDidMount() {
    axios.get('/api/batteries').then((res) => {
      this.setState({ data: res.data });
    });

  }
  render() {
    let content;
    if (typeof this.state.data !== "undefined") {
      content = this.state.data.map((item, index) => (
        <div key={index}
          className="mt-1 mb-1"
          onClick={
            () => {

              this.setState({ selected_battery_name: item.brand });
              this.setState({ selected_battery_referr: item.referrence });
              this.setState({ selected_battery_price: item.price });
              this.setState({ select_battery_show: false });

            }
          }>
          <Card className="select_battery">
            <Card.Body>
              <div className="row">
                <div className="col-md-6 pl-5"
                  style={
                    { display: 'flex' }
                  }>
                  <h5>{
                    item.brand
                  }</h5>
                  {' '}-{' '}
                  <label style={
                    { color: 'grey' }
                  }>
                    {
                      item.referrence
                    }</label>
                </div>
                <div className="col-md-6 pr-5" align="right"
                  style={
                    { color: 'grey' }
                  }>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" />S/.{' '}
                      {
                        item.price
                      } </label>
                  </div>
                </div>
              </div>
              <div style={
                {
                  background: 'whitesmoke',
                  color: 'grey'
                }
              }
                align="center">Mano de obra</div>
            </Card.Body>
          </Card>
        </div>
      ));
    }
    return (
      <div>
        <Modal show={
          this.props.first
        }
          onHide={
            this.props.hideFirst
          }>
          <Modal.Header closeButton>
            <Modal.Title>Pastilla de frenos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6"
                style={
                  { verticalAlign: 'center' }
                }>
                <div className="row">
                  <div className="col-md-2 circle_icon">
                    <FontAwesomeIcon icon={faClock}
                      style={
                        {
                          color: 'rgb(179,226,1)',
                          fontSize: '35px'
                        }
                      } />
                  </div>
                  <div className="col-md-9"
                    style={
                      { fontSize: '14px' }
                    }>
                    Tiempo estimado<br />
                    <span style={
                      {
                        fontSize: '12px',
                        fontFamily: 'serif'
                      }
                    }>20 min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row  m-2">
                <div className="col-8"
                  style={
                    {
                      marginTop: 'auto',
                      marginBottom: 'auto'
                    }
                  }>
                  <h5 align="left"
                    style={
                      {
                        textTransform: 'uppercase',
                        fontSize: '14px'
                      }
                    }>Servicio de Escaner</h5>
                </div>
                <div className="col-4"
                  style={
                    { height: '50px' }
                  }>
                  <h6 align="center"
                    style={
                      {
                        background: 'rgb(179,226,1)',
                        height: '40px',
                        paddingTop: '10px',
                        borderRadius: '20px'
                      }
                    }>
                    <span>{'S/.'}
                      25</span>
                    <FontAwesomeIcon icon={
                      this.state.flag ? faCheckCircle : faPlusCircle
                    }
                      className="ml-3"
                      color='green'
                      onClick={
                        () => {
                          this.setState({
                            flag: !this.state.flag
                          });
                          this.props.addCart(25, "Pastilla de frenos", 20);
                        }
                      } />
                  </h6>
                </div>
                <hr style={
                  { borderColor: 'grey' }
                } />
              </div>
              <Card.Body>
                <Card.Text style={
                  { marginTop: '-15px' }
                }>
                  <span style={
                    {
                      fontStyle: 'italic',
                      fontSize: '12px',
                      color: 'rgb(179,226,1)'
                    }
                  }>Síntomas relacionados a este diagnóstico:</span>
                  <li>pastillas de frenos</li>
                  <li>mano de obra</li>
                </Card.Text>
              </Card.Body>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={
          this.props.second
        }
          onHide={
            this.props.hideSecond
          }>
          <Modal.Header closeButton>
            <Modal.Title>Cambio de Bateria</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6"
                style={
                  { verticalAlign: 'center' }
                }>
                <div className="row">
                  <div className="col-md-2 circle_icon">
                    <FontAwesomeIcon icon={faClock}
                      style={
                        {
                          color: 'rgb(179,226,1)',
                          fontSize: '35px'
                        }
                      } />
                  </div>
                  <div className="col-md-9"
                    style={
                      { fontSize: '14px' }
                    }>
                    Tiempo estimado<br />
                    <span style={
                      {
                        fontSize: '12px',
                        fontFamily: 'serif'
                      }
                    }>15 min</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6" align="right">
                <button className="btn btn-success"
                  onClick={
                    () => this.setState({ select_battery_show: true })
                  }>Seleccionar batería</button>
              </div>
              <hr style={
                {
                  borderColor: 'grey',
                  width: '100%'
                }
              } />
              <Card.Body>
                <div style={
                  { marginTop: '-15px' }
                }>
                  <div className="row">
                    <div className="col-md-6">
                      <span style={
                        {
                          fontStyle: 'italic',
                          fontSize: '12px',
                          color: 'rgb(179,226,1)'
                        }
                      }>Síntomas relacionados a este diagnóstico:</span>
                      <li>pastillas de frenos</li>
                      <li>mano de obra</li>
                    </div>
                    <div className="col-md-6" align="right"
                      style={
                        {
                          marginTop: 'auto',
                          marginBottom: 'auto'
                        }
                      }>
                      {
                        this.state.selected_battery_price > 0 ? (
                          <div className="col-md-6" align="center"
                            style={
                              {
                                backgroundColor: 'rgb(179, 226, 1)',
                                borderRadius: '20px'
                              }
                            }>
                            S/.{
                              this.state.selected_battery_price
                            }
                            <FontAwesomeIcon icon={
                              this.state.flag1 ? faCheckCircle : faPlusCircle
                            }
                              className="ml-3"
                              color='green'
                              onClick={
                                () => {
                                  this.props.addCart(this.state.selected_battery_price, this.state.selected_battery_name + "-" + this.state.selected_battery_referr, 15);
                                  this.setState({
                                    flag1: !this.state.flag1
                                  })
                                }
                              } />
                          </div>
                        ) : ''
                      } </div>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={
          this.props.third
        }
          onHide={
            this.props.hidethird
          }>
          <Modal.Header closeButton>
            <Modal.Title>Mantenimiento General
            </Modal.Title>

          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6" align="right">
                <div className="" align="right"
                  style={
                    {
                      backgroundColor: 'rgb(179, 226, 1)',
                      width: '125px',
                      borderRadius: '20px',
                      paddingRight: '3px',
                      paddingTop: '3px'
                    }
                  }>
                  {
                    this.state.totalprice ? 'S/.' : ''
                  }
                  {
                    this.state.totalprice ? this.state.totalprice : 'Precio'
                  }
                  <FontAwesomeIcon icon={
                    this.state.flag6 ? faCheckCircle : faPlusCircle
                  }
                    className="ml-1"
                    color='green'
                    style={
                      { marginRight: "25px" }
                    }
                    onClick={
                      () => {
                        this.props.addCart(this.state.totalprice, "Mantenimiento General", 60);
                        this.setState({
                          flag6: !this.state.flag6
                        })
                      }
                    } />
                </div>
              </div>
            </div>
            <Card className="mt-2 mb-1">
              <Card.Header>
                <div className="row">
                  <div className="col-md-6">Bujia</div>
                  <div className="col-md-6" align="right">
                    <div className="" align="right"
                      style={
                        {
                          paddingRight: '3px',
                          paddingTop: '3px'
                        }
                      }>

                      <FontAwesomeIcon icon={
                        this.state.flag2 ? faCheckCircle : faPlusCircle
                      }
                        className="mr-1"
                        color='green'
                        onClick={
                          () => {
                            if (this.state.flag2) {
                              this.setState({
                                totalprice: this.state.totalprice - 8
                              });
                            } else {
                              this.setState({
                                totalprice: this.state.totalprice + 8
                              });
                            }

                            // this.props.addCart(8, "Mantenimiento General-Bujia", 15);
                            this.setState({
                              flag2: !this.state.flag2
                            })
                          }
                        } />
                    </div>
                  </div>
                </div>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
            <Card className="mt-1 mb-1">
              <Card.Header>
                <div className="row">
                  <div className="col-md-6">Aceite</div>
                  <div className="col-md-6" align="right">
                    <div className="" align="right"
                      style={
                        {
                          paddingRight: '3px',
                          paddingTop: '3px'
                        }
                      }>
                      {/* S/.21 */}
                      <FontAwesomeIcon icon={
                        this.state.flag3 ? faCheckCircle : faPlusCircle
                      }
                        className="ml-1"
                        color='green'
                        onClick={
                          () => {
                            if (this.state.flag3) {
                              this.setState({
                                totalprice: this.state.totalprice - 21
                              });
                            } else {
                              this.setState({
                                totalprice: this.state.totalprice + 21
                              });
                            }
                            // this.props.addCart(21, "Mantenimiento General-Aceite", 15);
                            this.setState({
                              flag3: !this.state.flag3
                            })
                          }
                        } />
                    </div>
                  </div>
                </div>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
            <Card className="mt-1 mb-1">
              <Card.Header>
                <div className="row">
                  <div className="col-md-6">Mano de obra</div>
                  <div className="col-md-6" align="right">
                    <div className="" align="right"
                      style={
                        {
                          paddingRight: '3px',
                          paddingTop: '3px'
                        }
                      }>
                      {/* S/.30 */}
                      <FontAwesomeIcon icon={
                        this.state.flag4 ? faCheckCircle : faPlusCircle
                      }
                        className="ml-1"
                        color='green'
                        onClick={
                          () => {
                            if (this.state.flag4) {
                              this.setState({
                                totalprice: this.state.totalprice - 30
                              });
                            } else {
                              this.setState({
                                totalprice: this.state.totalprice + 30
                              });
                            }
                            // this.props.addCart(30, "Mantenimiento General-Mano de obra", 15);
                            this.setState({
                              flag4: !this.state.flag4
                            })
                          }
                        } />
                    </div>
                  </div>
                </div>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
            <Card className="mt-1 mb-1">
              <Card.Header>
                <div className="row">
                  <div className="col-md-6">Filtro de aire</div>
                  <div className="col-md-6" align="right">
                    <div className="" align="right"
                      style={
                        {
                          paddingRight: '3px',
                          paddingTop: '3px'
                        }
                      }>
                      {/* S/.25 */}
                      <FontAwesomeIcon icon={
                        this.state.flag5 ? faCheckCircle : faPlusCircle
                      }
                        className="ml-1"
                        color='green'
                        onClick={
                          () => {
                            if (this.state.flag5) {
                              this.setState({
                                totalprice: this.state.totalprice - 15
                              });
                            } else {
                              this.setState({
                                totalprice: this.state.totalprice + 15
                              });
                            }
                            // this.props.addCart(25, "Filtro de aire", 15);
                            this.setState({
                              flag5: !this.state.flag5
                            })
                          }
                        } />
                    </div>
                  </div>
                </div>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card></Modal.Body></Modal>{/* premium */}<Modal show={
              this.props.fourth
            }
              onHide={
                this.props.hideFourth
              }><Modal.Header closeButton>
            <Modal.Title>Mantenimiento premiun</Modal.Title></Modal.Header><Modal.Body>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6" align="right">
                <div className="" align="right"
                  style={
                    {
                      backgroundColor: 'rgb(179, 226, 1)',
                      width: '125px',
                      borderRadius: '20px',
                      paddingRight: '3px',
                      paddingTop: '3px'
                    }
                  }>
                  {
                    this.state.totalprice ? 'S/.' : ''
                  }
                  {
                    this.state.totalprice ? this.state.totalprice : 'Precio'
                  }
                  <FontAwesomeIcon icon={
                    this.state.flag6 ? faCheckCircle : faPlusCircle
                  }
                    className="ml-1"
                    color='green'
                    style={
                      { marginRight: "25px" }
                    }
                    onClick={
                      () => {
                        this.props.addCart(this.state.totalprice, "Mantenimiento General", 60);
                        this.setState({
                          flag6: !this.state.flag6
                        })
                      }
                    } />
                </div>
              </div></div><Card className="mt-2 mb-1">
              <Card.Header>
                <div className="row">
                  <div className="col-md-6">Bujia</div>
                  <div className="col-md-6" align="right">
                    <div className="" align="right"
                      style={
                        {
                          paddingRight: '3px',
                          paddingTop: '3px'
                        }
                      }>

                      <FontAwesomeIcon icon={
                        this.state.flag2 ? faCheckCircle : faPlusCircle
                      }
                        className="mr-1"
                        color='green'
                        onClick={
                          () => {
                            if (this.state.flag2) {
                              this.setState({
                                totalprice: this.state.totalprice - 8
                              });
                            } else {
                              this.setState({
                                totalprice: this.state.totalprice + 8
                              });
                            }

                            // this.props.addCart(8, "Mantenimiento General-Bujia", 15);
                            this.setState({
                              flag2: !this.state.flag2
                            })
                          }
                        } />
                    </div>
                  </div>
                </div></Card.Header><Card.Body></Card.Body></Card><Card className="mt-1 mb-1"><Card.Header>
                  <div className="row">
                    <div className="col-md-6">Aceite</div>
                    <div className="col-md-6" align="right">
                      <div className="" align="right"
                        style={
                          {
                            paddingRight: '3px',
                            paddingTop: '3px'
                          }
                        }>
                        {/* S/.21 */}
                        <FontAwesomeIcon icon={
                          this.state.flag3 ? faCheckCircle : faPlusCircle
                        }
                          className="ml-1"
                          color='green'
                          onClick={
                            () => {
                              if (this.state.flag3) {
                                this.setState({
                                  totalprice: this.state.totalprice - 21
                                });
                              } else {
                                this.setState({
                                  totalprice: this.state.totalprice + 21
                                });
                              }
                              // this.props.addCart(21, "Mantenimiento General-Aceite", 15);
                              this.setState({
                                flag3: !this.state.flag3
                              })
                            }
                          } />
                      </div>
                    </div></div></Card.Header><Card.Body></Card.Body></Card><Card className="mt-1 mb-1"><Card.Header><div className="row">
                      <div className="col-md-6">Mano de obra</div>
                      <div className="col-md-6" align="right">
                        <div className="" align="right"
                          style={
                            {
                              paddingRight: '3px',
                              paddingTop: '3px'
                            }
                          }>
                          {/* S/.30 */}
                          <FontAwesomeIcon icon={
                            this.state.flag4 ? faCheckCircle : faPlusCircle
                          }
                            className="ml-1"
                            color='green'
                            onClick={
                              () => {
                                if (this.state.flag4) {
                                  this.setState({
                                    totalprice: this.state.totalprice - 30
                                  });
                                } else {
                                  this.setState({
                                    totalprice: this.state.totalprice + 30
                                  });
                                }
                                // this.props.addCart(30, "Mantenimiento General-Mano de obra", 15);
                                this.setState({
                                  flag4: !this.state.flag4
                                })
                              }
                            } />
                        </div></div></div></Card.Header><Card.Body></Card.Body></Card><Card className="mt-1 mb-1"><Card.Header><div className="row"><div className="col-md-6">Filtro de aire</div><div className="col-md-6" align="right">
                          <div className="" align="right"
                            style={
                              {
                                paddingRight: '3px',
                                paddingTop: '3px'
                              }
                            }>
                            {/* S/.25 */}
                            <FontAwesomeIcon icon={
                              this.state.flag5 ? faCheckCircle : faPlusCircle
                            }
                              className="ml-1"
                              color='green'
                              onClick={
                                () => {
                                  if (this.state.flag5) {
                                    this.setState({
                                      totalprice: this.state.totalprice - 15
                                    });
                                  } else {
                                    this.setState({
                                      totalprice: this.state.totalprice + 15
                                    });
                                  }
                                  // this.props.addCart(25, "Filtro de aire", 15);
                                  this.setState({
                                    flag5: !this.state.flag5
                                  })
                                }
                              } />
                          </div></div></div></Card.Header><Card.Body></Card.Body></Card>{/* <Card className="mt-1 mb-1">
            <Card.Header>
              <div className="row">
                <div className="col-md-6">Filtro de aire</div>
                <div className="col-md-6" align="right">
                  <div className="" align="center" style={{backgroundColor:'rgb(179, 226, 1)',width:'200px', borderRadius:'20px'}}>
                    S/.25
                    <FontAwesomeIcon icon={this.state.flag5?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                      onClick={
                        ()=>{
                          this.props.addCart(25, "Filtro de aire", 15);
                          this.setState({flag5 : !this.state.flag5})
                        }}
                    />
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body>

            </Card.Body>
          </Card> */}{/* <Card className="mt-1 mb-1">
            <Card.Header>
              <div className="row">
                <div className="col-md-6">Filtro de aire</div>
                <div className="col-md-6" align="right">
                  <div className="" align="center" style={{backgroundColor:'rgb(179, 226, 1)',width:'200px', borderRadius:'20px'}}>
                    S/.25
                    <FontAwesomeIcon icon={this.state.flag5?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                      onClick={
                        ()=>{
                          this.props.addCart(25, "Filtro de aire", 15);
                          this.setState({flag5 : !this.state.flag5})
                        }}
                    />
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body>

            </Card.Body>
          </Card> */} </Modal.Body></Modal><Modal show={
          this.state.select_battery_show
        }
          onHide={
            () => this.setState({ select_battery_show: false })
          }><Modal.Header closeButton><Modal.Title>Cambio de Bateria</Modal.Title></Modal.Header><Modal.Body> {content} </Modal.Body></Modal></div>
    );
  }
}

export default ElectronicModal;
