import 'normalize.css';
import './styles/demo.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import Slider from './components/Slider';

const wallpaper =
  'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-164335.png';

class App extends React.Component {
  render() {
    return (
      <Slider>
        <Slider.Item
          style={{ backgroundColor: '#353330' }}
          menuName="BiZidu"
          pathName=""
        >
          <div className="content">BiZidu</div>
          <div className="content-sub">Business Education. Gamified</div>
        </Slider.Item>
        <Slider.Item
          className="has-overlay"
          style={{
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: 'cover'
          }}
          menuName="Our products"
          pathName="products"
        >
          <div className="content">Yo.</div>
        </Slider.Item>
        <Slider.Item
          style={{ backgroundColor: '#aaa', color: '#333' }}
          menuName="Contact us"
          pathName="contact"
        >
          <div className="content love">
            <i className="fa fa-heart" />
            <iframe
              src="http://ghbtns.com/github-btn.html?user=daviferreira&repo=react-viewport-slider&type=follow&count=true&size=large"
              allowTransparency="true"
              frameBorder="0"
              scrolling="0"
              width="auto"
              height="30"
            />
            <iframe
              src="http://ghbtns.com/github-btn.html?user=daviferreira&repo=react-viewport-slider&type=watch&count=true&size=large"
              allowTransparency="true"
              frameBorder="0"
              scrolling="0"
              width="auto"
              height="30"
            />
            <iframe
              src="http://ghbtns.com/github-btn.html?user=daviferreira&repo=react-viewport-slider&type=fork&count=true&size=large"
              allowTransparency="true"
              frameBorder="0"
              scrolling="0"
              width="auto"
              height="30"
            />
          </div>
        </Slider.Item>
      </Slider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
ReactGA.initialize('UA-109826366-1');
ReactGA.pageview(window.location.pathname + window.location.search);

window.addEventListener("hashchange", () => ReactGA.pageview(window.location.pathname + window.location.hash));
