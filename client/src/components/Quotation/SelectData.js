import 'moment/locale/fr.js';
import React, { Component } from 'react'
import { DatePicker } from 'rc-datepicker';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faClock, faHome, faMotorcycle, faPersonBooth } from '@fortawesome/free-solid-svg-icons';

export default class SelectData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value : '',
      location : '',
      time : new Date()
    };
  }

  resetState() {
    this.setState({ value: null });
  }

  selectLocation = (e) =>{
    this.setState({ location : e.target.getAttribute('name')});
  }

  handleDateChange = (date) => {
    this.setState({ time : date});
  };

  render() {
    const now =  new Date();
    return (
        <div align="center" className="SelectData container">
          <div style={{width:'100%'}}>
            <h4 align="left" style={{width:'60%'}}><FontAwesomeIcon icon={faCalculator} size="1x"/>{' '}FECHA</h4><hr/>
            <DatePicker
              className='my-react-datepicker'
              value={this.state.value}
              onChange={(jsDate) => this.setState({value: jsDate})}
              minDate = {now}
            />
          </div>
          { this.state.value?(
            <div>
              <h4 align="left" className="mt-4" style={{width:'60%'}}><FontAwesomeIcon icon={faMotorcycle} size="1x"/>{' '}RECEPCIÓN DEL CARRO</h4><hr/>
              <div className="locationGroup">
                <div className="row mt-2 mb-2" name="OurWorkstation"  onClick={this.selectLocation} style={{borderWidth:'1px', borderRadius:'10px', borderColor:'rgba(0,0,0,0.5', borderStyle:'solid', maxWidth:'350px', padding:'10px', color:'black'}}>
                  <div className="col-md-3 col-3" name="OurWorkstation" align="right">
                    <FontAwesomeIcon icon={faHome} size="2x" name="OurWorkstation"/>
                  </div>
                  <div className="col-md-9 col-9" name="OurWorkstation" align="left" style={{marginTop:'auto', marginBottom:'auto'}}>
                    Yo llevo mi carro al taller
                  </div>
                </div>
                <div className="row mt-2 mb-2 disabled" name="myworkstation" style={{borderWidth:'1px', borderRadius:'10px', borderColor:'rgba(0,0,0,0.5', borderStyle:'solid', maxWidth:'350px', padding:'10px'}}>
                  <div className="col-md-3 col-3" align="right">
                    <FontAwesomeIcon icon={faPersonBooth} name="myworkstation" size="2x"/>
                  </div>
                  <div className="col-md-9 col-9" align="left" name="myworkstation" style={{marginTop:'auto', marginBottom:'auto'}}>
                    Lleven mi carro al taller
                    <span className="badge badge-pill badge-secondary" style={{position:'absolute', bottom:'-20px', right:'-20px', fontSize:'15px'}}>
                      ¡Muy Pronto!
                    </span>
                  </div>
                  
                </div>
                <div className="row mt-2 mb-2 disabled" name="myhourse" style={{borderWidth:'1px', borderRadius:'10px', borderColor:'rgba(0,0,0,0.5', borderStyle:'solid', maxWidth:'350px', padding:'10px'}}>
                  <div className="col-md-3 col-3" align="right" name="myhourse">
                    {/* <img src={require('../../img/icons/worker.png')} height="40px" name="myhourse"/> */}
                    <FontAwesomeIcon icon={faPersonBooth} name="myhourse" size="2x"/>
                  </div>
                  <div className="col-md-9 col-9" align="left" name="myhourse" style={{marginTop:'auto', marginBottom:'auto'}}>
                    Quiero el servicio en mi casa
                    <span className="badge badge-pill badge-secondary" style={{position:'absolute', bottom:'-20px', right:'-20px', fontSize:'15px'}}>
                      ¡Muy Pronto!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : ''}
          { this.state.location?(
            <div>
              <h4 align="left" className="mt-4" style={{width:'60%'}}><FontAwesomeIcon icon={faClock} size="1x"/>{' '}HORA</h4><hr/>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    value={this.state.time}
                    onChange={this.handleDateChange}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </div>
          ):''}

          <div className="col-12 col-md-12 mt-5 mb-5">
            <button className="btn form-control" onClick={this.props.nextclick} disabled = {this.state.time && this.state.location?false:true} style={{background:'rgb(179,226,1)', color:'black'}}>
              FINALIZAR AGENDAMIENTO
            </button>
          </div>
        </div>
    );
  }
}