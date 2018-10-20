import React from 'react'
import "./Footer.css";

class Footer extends React.Component {
  render () {
    return(
      <div className="container-fluid" style={{backgroundColor: "brown", marginTop: "10px"}}>
        <div className="row">
          <footer>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p>Dessert Journal, 2018. All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 social">
              <a href="https://twitter.com/jfuenmayor96">Twitter</a>
              <a href="https://github.com/jfuenmayor96">Github</a>
              <a href="https://steemit.com/@jfuenmayor96">Steemit</a>
            </div>
          </footer>
        </div>
      </div>

    );
  }
}

export default Footer;