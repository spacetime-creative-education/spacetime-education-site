import React, {Component} from 'react';
import config from './config.json';
import MapGL, {NavigationControl, Marker} from 'react-map-gl';

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 13.030970,
        longitude: 80.183993,
        width: 400,
        height: 400,
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render(){
    //const {viewport, updateViewport} = this.props;
    const {viewport} = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/neotheicebird/cj6o1xgu419mi2soe3i7l1pww"
        mapboxApiAccessToken={config.mapboxPublicKey}
        onViewportChange={v => this.setState({viewport: v})}
        preventStyleDiffing={false}
        >
        <div style={{position: 'absolute', right: 0, padding: '0.5rem'}}>
          <NavigationControl onViewportChange={v => this.setState({viewport: v})} />
        </div>
        <Marker latitude={13.031102} longitude={80.183646} offsetLeft={-20} offsetTop={-10}>
           <div className="pin"></div>
        </Marker>
      </MapGL>
    )
  }
}

export default MyMap;
