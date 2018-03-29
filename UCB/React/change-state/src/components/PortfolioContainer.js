import React, { Component } from "react";
import Navpills from "./Navpills";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  selectPage = (page) => {
    switch(this.state.currentPage) {
      case 'Home':
          return <Home />
          break;
      case 'Contact':
          return <Contact />
          break;
      case 'Blog':
          return <Blog />
          break;
      case 'About':
          return <About />
          break;
      default:
          alert("select a page");
    };
  }
  

  render() {
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        Based on `this.state.currentPage`, render the appropriate component
        here.
        <div className="container">
          
            {this.selectPage()}
          
        </div>
      </div>
    );
  }
}

export default PortfolioContainer;
