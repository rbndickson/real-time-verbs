import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div>
        <div className="dt fixed z-9999 top-0 left-0 w-100 h-100 bg-black-50 o-0 glow">
          <div className="dtc v-mid">
            <div className="w-90 w-60-l center pa4 br2 shadow-1 bg-white">
              {this.props.children}
              <button className="fr" onClick={() => this.props.closeModal()}>
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
