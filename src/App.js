import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      lat: '',
      lon: '',
      displayName: '',
      mapFlag: false,
      displayErr: false

    }
  }


  locationHandler = async (event) => {
    event.preventDefault();
    let locationName = event.target.locationName.value;
    let myKey = 'pk.2859d110775b5becfbac71c3ce6fba2d';
    let URL = `https://eu1.locationiq.com/v1/search.php?key=${myKey}&q=${locationName}&format=json`;

    try {
      let collectedData = await axios.get(URL);
      this.setState({
        lat: collectedData.data[0].lat,
        lon: collectedData.data[0].lon,
        displayName: collectedData.data[0].display_name,
        mapFlag: true
      })
    }

    catch
    {

      this.setState({
        displayErr: true
      })
    }


  }






  render() {
    return (
      <>
        <h1 style={{ padding: 20 }}>Location App</h1>
        <Form style={{ padding: 20 }} style={{ backgroundColor: '#dddd' }} onSubmit={this.locationHandler}>
          <fieldset>


            <input type='text' name='locationName' placeholder='Enter city name' />
            <br />
            <Button style={{ marginTop: 20 }} type='submit'>Explore!</Button>

          </fieldset>
        </Form>

        <div style={{ float: 'left' }} >
          <p  style={{ padding: 20 }}> Display name : {this.state.displayName}</p>
          <p style={{ padding: 20 }}>Lat : {this.state.lat}</p>
          <p style={{ padding: 20 }}>Lon : {this.state.lon}</p>
        </div>



        {this.state.mapFlag &&
          <Image style={{ float: 'right' }} style={{ marginRight: 40 }} src={`https://maps.locationiq.com/v3/staticmap?key=pk.2859d110775b5becfbac71c3ce6fba2d&center=${this.state.lat},${this.state.lon}&size=400x400`} alt='map' fluid />}

        {this.state.displayErr && <p>The server is not responding, try again !</p>}
      </>


    )
  }




}

export default App;