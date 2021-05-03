import React, { Component } from "react"; 
import axios from 'axios'
import { Modal} from 'react-bootstrap'


class OilChange extends Component {
  constructor(props){
    super(props);
    this.state={
      oil:[]
    }
  }
  componentDidMount(){
    axios
      .get("/api/highlights")
      .then(response => this.setState({oil : response.data}));
  }
  render() {
    if(this.state.oil.length>0){
      console.log(this.state.oil);
    }
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1>asdfasdf</h1>
        </Modal.Body>
      </Modal>
    );
  }
}

export default OilChange;