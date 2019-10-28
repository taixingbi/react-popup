import React, { Component } from 'react';
import instyles from './styles';

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'             
                style= {instyles.popup}
         >
          <div className='popupInner'>
            <h1>{this.props.text}</h1>
            {"test...."}
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }

export default Popup;
