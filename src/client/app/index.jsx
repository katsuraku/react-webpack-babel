import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Yo make some dots</p>
        <AwesomeComponent />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
