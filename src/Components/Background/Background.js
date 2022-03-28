import './Background.css';
import React from 'react';


class Background extends React.Component {
    render() {
        return (
          <div className="background-base">
              {this.props.children}
          </div>
        ); 
    }
};


export default Background;
