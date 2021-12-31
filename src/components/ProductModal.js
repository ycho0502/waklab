import React, { Component } from "react";
import "./ProductModal.css";

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalclass: this.props.modalclass
    };
  }
  closemidal = () => {
    this.setState({
      modalclass: "modal-close",
    });
    setTimeout(() => {
      this.setState({ modalclass: "modal-open",});
    }, 200) 
  };

  render() {
    console.log(this.props.show);

 
    return (
      
      <React.Fragment>
        {this.props.show && (
          <div className="modalbg">
          <div className={this.state.modalclass}>
            <div className="modalclose"onClick={() => {this.props.onHide();this.closemidal()}}>↓</div>
            <div className="merchamodal">
              <img src={this.props.content} />
            </div>
            
          </div>
          </div>
        )}
        
      </React.Fragment>
      
    );
  }
  
}

export default Modal;
