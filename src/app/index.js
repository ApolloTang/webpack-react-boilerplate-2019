import React from 'react';
import img from './react.png';
import FontTest from 'font-test/';
import './style.less';

const App = () => (
  <div className="app">
    <h1>Hello React</h1>
    <div><img src={img} /></div>
    <FontTest />
  </div>
);

export default App;
