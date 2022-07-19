<<<<<<< HEAD
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent';
import './App.css';

const store = ConfigureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <div className="App"> */}
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
      // <BrowserRouter>
      //   <div className="App">
      //     <Main />
      //   </div>
      // </BrowserRouter>
    );
  }  

}

export default App;
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 1fd9365 (Initialize project using Create React App)
