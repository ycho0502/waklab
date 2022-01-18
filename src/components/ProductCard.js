import React, { Component } from "react";
import "./ProductCard.css";
import Modal from "./ProductModal";

class Product extends Component {
  state = {
    showModal: 0,
  };

  getModal = (value) => {
    this.setState({ showModal: value });
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  };

  hideModal = (value) => {
    setTimeout(() => {
      this.setState({ showModal: 0 });
    }, 200);
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  };

  render() {
    return (
      <div className="container">
        <h2 className={this.props.className}>{this.props.title}</h2>
        <div className="sct">
          {this.props.data
            .filter((category) => category.caid == this.props.caid)
            .map((data, key) => (
              <div key={key} className="products">
                <div onClick={() => this.getModal(data.id)}>
                  <img src={data.image} className="productsimg" />
                </div>
                <Modal
                  show={this.state.showModal === data.id}
                  onHide={() => this.hideModal(data.id)}
                  content={data.content}
                  modalclass="modal-open"
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Product;
