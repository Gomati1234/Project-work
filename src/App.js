import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import GitHubLogin from 'react-github-login';




const MyFacebookButton = ({ onClick }) => (
  <button onClick={onClick}>
    Login with facebook
  </button>
);
class App extends Component {
  render() {
    const responseFacebook = (response) => {
      console.log("response from FACEBOOK " + JSON.stringify(response,undefined,5));
    }
    const responseGoogle = (response) => {
      console.log(JSON.stringify(response,undefined,5));
    }
    const onSuccess = response => console.log("Success   "+JSON.stringify(response));
    const onFailure = response => console.log("Failed here "+response);

return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <GoogleLogin
            clientId="324956446559-mb14m1p3pmvv2jnobvj2q0glsheo9g62.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          
          <FacebookLogin
            appId="815415458651207"
            // autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook} 
            component = {MyFacebookButton}
          />
          <GitHubLogin 
              redirectUri="" 
              clientId="815b62d2de3f985b85da"
              onSuccess={onSuccess}
              onFailure={onFailure}
          />
         
        </div>
);
}
}

export default App;
