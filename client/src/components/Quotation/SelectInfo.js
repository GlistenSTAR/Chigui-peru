import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

class SelectInfo extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      phonenum:'',
      detail:''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      name: this.state.name,
      phonenum: this.state.phonenum
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const motor  = localStorage.getItem('motor');
    console.log(JSON.parse(motor));
    console.log(localStorage.getItem('date'), '>>>>>>>>>>>>>>>>', localStorage.getItem('time'),'<<<<<<<<<<<<<<<<<<<<<<<<<', localStorage.getItem('location'));
    return (
      <div>
        <div className="sendData mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <form onSubmit={this.onSubmit}>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null, { loginUser })(SelectInfo);

