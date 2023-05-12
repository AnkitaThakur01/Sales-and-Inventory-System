import React from "react";
import Overlay from "./Overlay";
import PageLoader from "./PageLoader";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import GoogleFontLoader from "react-google-font-loader";
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends React.Component {
  state = {
    bodyClass: "my-theme ls-closed",
    displayOverlay: "none",
    width: window.screen.width,
  };
  onBarClick = () => {
    if (this.state.bodyClass == "my-theme ls-closed overlay-open") {
      this.onOutsideClick();
    } else if (this.state.bodyClass == "my-theme ls-closed") {
      this.setState({ bodyClass: "my-theme ls-closed overlay-open" });
      this.setState({ displayOverlay: "block" });
    }
  };

  onOutsideClick = () => {
    this.setState({ bodyClass: "my-theme ls-closed" });
    this.setState({ displayOverlay: "none" });
  }

  onscreenresize = () => {
    console.log(window.screen.width);
    this.setState({ width: window.screen.width });
  };

  componentWillMount() {
    window.addEventListener("resize", this.onscreenresize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onscreenresize);
  }

  componentDidMount() {
    var inputall = document.querySelectorAll("input");
    inputall.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentNode.className = "form-line focused";
      });
    });

    inputall.forEach((input) => {
      input.addEventListener("blur", function () {
        this.parentNode.className = "form-line";
      });
    });
  }

  render() {
    console.log(this.props);
    if (this.state.width > 1150) {
      document.getElementById("root").className = "my-theme";
    } else {
      document.getElementById("root").className = this.state.bodyClass;
    }

    var Page = this.props.page;

    return (
      <React.Fragment>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, 700],
            },
          ]}
          subsets={["latin", "cyrillic-ext"]}
        />
        <GoogleFontLoader
          fonts={[
            {
              font: "Material+Icons",
            },
          ]}
        />
        <Overlay onOutsideClick={this.onOutsideClick} display={this.state.displayOverlay} />
        <Navbar onBarClick={this.onBarClick} />
        <Sidebar activepage={this.props.activepage} />
        <Page {...this.props} />
      </React.Fragment>
    );
  }
}

export default MainComponent;
