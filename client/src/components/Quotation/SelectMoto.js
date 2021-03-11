import React, { Component } from "react"; 
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Spinner from '../common/Spinner';
import { getCars } from '../../actions/carActions';
import Accordian from '../common/Accordian';

class SelectMoto extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading:true,
      show1:"",
      show2:"",
      show3:"",
      show4:"",
    }
  }

  componentDidMount(){
    this.props.getCars();
  }
  
  onClick = (e) => {
    this.setState({show1 : e.target.getAttribute('data')});
  }
  onClick1 = (e) => {
    this.setState({show2 : e.target.getAttribute('data')});
  }
  onClick2 = (e) => {
    this.setState({show3 : e.target.getAttribute('data')});
  }
  onClick3 = (e) => {
    this.setState({show4 : e.target.getAttribute('data')});
  }
  
  render() {

    const { cars, loading } = this.props.car;
    let carItems1, carItems2, carItems3, carItems4;

    if (cars === null || loading) {
      carItems1 = <Spinner />;
    } else {
      if(typeof cars !=="undefined"){
        carItems1 = (
          <Accordian key="0" title="MARCA" data={cars} shownName="name" onclick={this.onClick} />
        )
        carItems2 = cars.map(car =>{
          if(car.name === this.state.show1){
            return (
              <Accordian key="1" title="MODELO" data={car.model} shownName="modelName" onclick={this.onClick1} />
            );
          }
          return '';
        })
        if(this.state.show1 && this.state.show2){
          cars.map(car =>{
            if(car.name === this.state.show1 && car.model.length > 0){
              carItems3 = car.model.map((model)=>{
                if(model.modelName === this.state.show2 && model.year.length > 0){
                  return (
                    <Accordian key="2" title="AÑO" data={model.year} shownName="date" onclick={this.onClick2} />
                  );
                }
                return '';
              });
            }
            return '';
          });
        }
        if(this.state.show1 && this.state.show2 && this.state.show3){
          cars.map(car =>{
            if(car.name === this.state.show1 && car.model.length > 0){
              car.model.map((model)=>{
                if(model.modelName === this.state.show2 && model.year.length > 0){
                  carItems4 = model.year.map(year=>{
                    if(year.date === this.state.show3 && year.cylinder.length > 0){
                      return (
                        <Accordian key="3" title="CILINDRAJE" data={year.cylinder} shownName="cylinderName" onclick={this.onClick3}/>
                      );
                    }
                    return '';
                  })
                }
                return '';
              });
            }
            return '';
          })
        }
      }
    }

    return (
     <div>
       {carItems1}
        {this.state.show1?carItems2:''}
        {this.state.show2?carItems3:''}
        {this.state.show3?carItems4:''}

        <div className="mt-5 confirm" align="center">
          <button className="btn btn-success1"  onClick={this.props.nextclick}>SIGUIENTE</button>
          <button className="btn btn-default">¿No encuentras tu vehículo?</button>
        </div>
        {/* disabled={this.state.show3?false:true} */}
     </div>
    );
  }
}

SelectMoto.propTypes = {
  getCars: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  car: state.car,
});

export default connect(mapStateToProps, { getCars })(
  withRouter(SelectMoto)
);