import React from 'react';
import "./Desserts.css";

class Desserts extends React.Component {
  render () {
    return(
      <div className="container-fluid" id="desserts">
        <div className="row desserts">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img src={require("../../assets/brownies.jpg")} alt="Brownies"/>
              <p className='caption'>Mini Brownies</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img src={require("../../assets/chocolate-cake.jpg")} alt="Chocolate cake"/>
              <p className='caption'>Chocolate Cake</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img src={require("../../assets/coco-truffles.jpg")} alt="Coconut truffles"/>
              <p className='caption'>Coconut Truffles</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img src={require("../../assets/lemon-pie-shots.jpg")} alt="Lemon Pie Shots"/>
              <p className='caption'>Lemon Pie Shots</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img src={require("../../assets/macaroons.jpg")} alt="Macaroons"/>
              <p className='caption'>Macaroons</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img src={require("../../assets/red-velvet-cupcakes.jpg")} alt="Red Velvet Cupcakes"/>
              <p className='caption'>Red Velvet Cupcakes</p>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Desserts;
