import { ParallaxController } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

ParallaxController.init();

// Parallax: https://jscottsmith.github.io/react-scroll-parallax-examples/examples/parallax-example/
// Idea now is to combine flexbox with parallax scroll component
class App extends Component {
  render() {

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="container">
      {/*}<Parallax
          className="custom-class1"
          offsetYMax="100px"
          offsetYMin="-100px"
          slowerScrollRate={false}
          tag="figure"
      >
        <div className = "box"><img src="https://placeimg.com/400/1000/any" /></div>
    </Parallax>*/}
      <Parallax
          className="custom-class1"
          offsetYMax="5000px"
          offsetYMin="0px"
          offsetXMin="0px"
          offsetXMax="500px"
          slowerScrollRate={false}
          tag="figure"
      >
        <img src="https://placeimg.com/400/1000/any" />
      </Parallax>
      <img src="https://placeimg.com/400/1000/any" />
          {/*}<P5Wrapper sketch={header_starfield} className="box"></P5Wrapper>
        <LazyLoad>
          <P5Wrapper sketch={footer_starfield} className="box"></P5Wrapper>
        </LazyLoad>*/}

      </div>
    );
  }
}
Hey, I just discovered spacetime Education. The place to be to learn #python-programming in #chennai.
Check it out!
