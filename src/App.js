import React from "react";
import NavBar from "./NavBar/NavBar";
import IntroSection from "./IntroSection";

class App extends React.Component {
  state = {
    links: ["Home", "About", "Resume", "Projects", "My Blog", "Contact Me"]
  };

  render() {
    return (
      <div
        className="App"
        data-spy="scroll"
        data-target=".site-navbar-target"
        data-offset="300"
      >
        <NavBar links={this.state.links} />
        <IntroSection />

        <div id="ftco-loader" classname="show fullscreen">
          <svg classname="circular" width="48px" height="48px">
            <circle
              classname="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke="#eeeeee"
            />
            <circle
              classname="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke="#F96D00"
            />
          </svg>
        </div>

        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-migrate-3.0.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/aos.js"></script>
        <script src="js/jquery.animateNumber.min.js"></script>
        <script src="js/scrollax.min.js"></script>

        <script src="js/main.js"></script>
      </div>
    );
  }
}

export default App;
