import React from "react";

class Overlay extends React.Component {
  render() {
    return (
      <div className="overlay" onClick={this.props.onOutsideClick} style={{ display: this.props.display }}></div>
    );
  }
}

export default Overlay;
