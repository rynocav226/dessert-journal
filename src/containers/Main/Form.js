import React from 'react'

class Form extends React.Component {
  render () {
    return(
      <div className="container-fluid" id="contact">
        <div className="row">
          <h1 className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-lg-offset-3 col-md-offset-3 " style={{textAlign: "center"}}>Submit Your Dessert!</h1>
          <form className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-lg-offset-3 col-md-offset-3 ">
            <div className="form-group">
              <label for="dessertName">Dessert Name</label>
              <input type="text" className="form-control" id="desserName" placeholder="Chocolate chips cookies"/>
            </div>
            <div className="form-group">
              <label for="dessertPicture">Dessert Picture Link</label>
              <input type="text" className="form-control" id="dessertPicture" placeholder="https://picture.com/my_picture"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

    );
  }
}

export default Form;
