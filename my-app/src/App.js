import React from 'react';
import Rect from './SVG/2.svg';
import Cir from './SVG/1.svg';
import Rect3 from './SVG/3.svg';
import Rect4 from './SVG/4.svg';
import Ecli from './SVG/5.svg';
import Ecli6 from './SVG/6.svg';
import Polygon from './SVG/7.svg';
import Polyline from './SVG/8.svg';
import Path from './SVG/9.svg';
import linearGradient from './SVG/10.svg';
import Filter from './SVG/11.svg';
import RadialGradient from './SVG/12.svg';
import LinkSvg from './SVG/13.svg';
import CreateSvg from './SVG/14.svg';
import Animate from './SVG/15.svg';
import Animate16 from './SVG/16.svg';
import Animate17 from './SVG/17.svg';
import Animate18 from './SVG/18.svg';
import Animate19 from './SVG/19.svg';
import Animate20 from './SVG/20.svg';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Cir} alt="logo" />
        <img src={Rect} alt="logo" style={{ float: "left" }} />
        <embed src={Rect3} width="100" height="100" type="image/svg+xml" style={{ float: "left" }} pluginspage="http://www.adobe.com/svg/viewer/install/" />
        <img src={Rect4} alt="logo" style={{ float: "left" }} />
      </header>

      <header className="App-header">
        <img src={Ecli} alt="logo" />
        <img src={Ecli6} alt="logo" />
        <embed src={Polygon} width="100" height="100" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />
        <img src={Polyline} alt="logo" />
      </header>

      <header className="App-header">
        <img src={Filter} alt="logo" />
        <img src={linearGradient} alt="logo" />
        <embed src={RadialGradient} width="100" height="100" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />
        <embed src={LinkSvg} alt="logo" width="100" height="100" />
      </header>

      <header className="App-header">
        <embed src={CreateSvg} alt="logo" />
        <embed src={Animate} alt="logo" />
        <embed src={Animate16} width="300" height="300" />
        <embed src={Animate17} alt="logo" />
      </header>
      <header className="App-header">
        <embed src={Animate18} alt="logo" />
        <embed src={Animate19} alt="logo" />
      </header>
      <header className="App-header">
        <embed src={Path} width="500" height="500" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />
        <embed src={Animate20} alt="logo" />
        <embed src={logo} width="300" height="300" />
      </header>
    </div>
  );
}

export default App;
