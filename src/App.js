import React, {useState} from 'react';
import './App.css';
import logo from './images/background 3.png';
import google from './images/google 1.png'
function App() {
  return (
    <div className='contener'>
      <div className='logoconten'>
        <img src={logo} className='logo'></img>
      </div>
      <div className='conteners'>
        <div className='box'>
          <div className='circle'></div>
            <h1 className='boxname'>Student</h1>
        </div>
        <div className='box'>
          <div className='circle'></div>
            <h1 className='boxname'>Parent</h1>
        </div>
        <div className='box'>
          <div className='circle'></div>
            <h1 className='boxname'>Staff</h1>
        </div>
      </div>
        <div className='form'>
          <h1 className='school'>school Code/Domain</h1>
          <div className='line'></div>
          <h2 className='user'>Username (Mobile/Email)</h2>
          <div className='line'></div>
          <h2 className='user'>Password/OTP</h2>
          <h1 className='school'>Forget Password?</h1>
        </div>
        <div className='but'>
          <h2 className='signin'>SIGN IN</h2>
        </div>

        <div className='or'>
          <div className='orline'></div>
          <h1 className='OR'>Or</h1>
          <div className='orline'></div>
        </div>

        <div className='google'>
          <img src={google}></img>
          <h2 className='login'>Login with Google</h2>
        </div>
        <h3 className='how'>HOW TO LOGIN?</h3>

        <div className='footer'>
          <h1 className='poweredby'>Powered by</h1>
          <h2 className='web'>DreamsGuider.com</h2>
          <h3 className='provide'>Software | Education | Advertising</h3>
        </div>

    </div>        
  );
}

export default App;

