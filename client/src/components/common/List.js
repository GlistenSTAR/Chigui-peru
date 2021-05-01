import React, { Component } from "react"; 

class ListComponent extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    let Content;
    if(typeof this.props.data !=="undefined"){
      // console.log(this.props.data)
      Content = this.props.data.map((item, index)=>(
        <li key={index}>{item}</li>
      ))
    }
    
    return (
      <ul className="mt-2">
       {Content}
      </ul>
    );
  }
}

export default ListComponent;