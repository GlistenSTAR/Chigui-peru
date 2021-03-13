import 'moment/locale/fr.js';
import React, { Component } from 'react'
import { DatePicker } from 'rc-datepicker';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCarAlt } from '@fortawesome/free-solid-svg-icons';

export default class SelectData extends Component {

  constructor(props) {
    super(props);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    this.state = {
      yesterday,
      value: ''
    };
  }

  resetState() {
    this.setState({ value: null });
  }

  render() {
    const now =  new Date();
    return (
      <div align="center" className="SelectData">
        <div>
          <h4 align="left" style={{width:'600px'}}><FontAwesomeIcon icon={faCalculator} size="1x"/>{' '}FECHA</h4><hr/>
          <DatePicker
            className='my-react-datepicker'
            value={this.state.value}
            onChange={(jsDate) => this.setState({value: jsDate})}
            minDate = {now}
          />
        </div>
        <div>
          {/* <h4 align="left" style={{width:'600px'}}><FontAwesomeIcon icon={faCarAlt} size="1x"/>{' '}RECEPCIÓN DEL CARRO</h4><hr/> */}
          
        </div>
      </div>
    );
  }
}