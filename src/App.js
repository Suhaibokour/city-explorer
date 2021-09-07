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
    // let myKey = 'pk.2859d110775b5becfbac71c3ce6fba2d';
    let URL = `https://city-explorer-api-suhaib.herokuapp.com/?foundData=${locationName}`;

    try {
      let collectedData = await axios.get(URL);
      this.setState({
        data1:collectedData.data[0],
        data2:collectedData.data[1],
        data3:collectedData.data[2],
        data4:collectedData.data[3],
        data5:collectedData.data[4],
        data6:collectedData.data[5],
        data7:collectedData.data[6],
        data8:collectedData.data[7],
        data9:collectedData.data[8],
        // lat: collectedData.data[0].lat,
        // lon: collectedData.data[0].lon,
        // displayName: collectedData.data[0].display_name,
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
          <p>data1 : {this.state.data1}</p>
          <p>data2 : {this.state.data2}</p>
          <p>data3 : {this.state.data3}</p>
          <p>data4 : {this.state.data4}</p>
          <p>data5 : {this.state.data5}</p>
          <p>data6 : {this.state.data6}</p>
          <p>data7 : {this.state.data7}</p>
          <p>data8 : {this.state.data8}</p>
          <p>data9 : {this.state.data9}</p>

          {/* <p  style={{ padding: 20 }}> Display name : {this.state.displayName}</p>
          <p style={{ padding: 20 }}>Lat : {this.state.lat}</p>
          <p style={{ padding: 20 }}>Lon : {this.state.lon}</p> */}
        </div>


{/* 
        {this.state.mapFlag &&
          <Image style={{ float: 'right' }} style={{ marginRight: 40 }} src={`https://maps.locationiq.com/v3/staticmap?key=pk.2859d110775b5becfbac71c3ce6fba2d&center=${this.state.lat},${this.state.lon}&size=400x400`} alt='map' fluid />}

        {this.state.displayErr && <p>The server is not responding, try again !</p>} */}
      </>


    )
  }




}

export default App;