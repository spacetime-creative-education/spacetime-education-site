import React, {Component} from 'react';
import config from './config.json';
import MapGL, {NavigationControl, Marker} from 'react-map-gl';
import Fullscreenable from 'react-fullscreenable';
import PropTypes from 'prop-types';

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 13.030970,
        longitude: 80.183993,
        width: this.props.width,
        height: this.props.height,
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
  }

  componentWillReceiveProps(nextProps) {
        if (this.props.isFullscreen !== nextProps.isFullscreen) {
            // Fullscreen status has changed.
            console.log("Toggling Fullscreen");

            if (nextProps.isFullscreen) {
              console.log(nextProps.viewportDimensions);
              this.setState({viewport: {
                latitude: 13.030970,
                longitude: 80.183993,
                width: nextProps.viewportDimensions.width,
                height: nextProps.viewportDimensions.height,
                zoom: 14,
                bearing: 0,
                pitch: 0
              }
              });
            } else {
              console.log(this.props.width);
              this.setState({viewport: {
                latitude: 13.030970,
                longitude: 80.183993,
                width: this.props.width,
                height: this.props.height,
                zoom: 14,
                bearing: 0,
                pitch: 0
                }
              });
            }

        }
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
        <button onClick={this.props.toggleFullscreen}>Fullscreen</button>
      </MapGL>
    )
  }
}

MyMap.defaultProps = {
  width: 400,
  height: 400
}

MyMap.propTypes = {
    isFullscreen: PropTypes.bool,
    toggleFullscreen: PropTypes.func,
    viewportDimensions: PropTypes.object
};

const FullscreenableMyMap = Fullscreenable()(MyMap);

export default FullscreenableMyMap;
