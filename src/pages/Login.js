import React from 'react';

import Background from '../components/background/Background';
import AuthorizationHeader from '../components/authorization_header/Authorization_Header'
import LoginMenu from '../components/login_menu/Login_Menu';
import FooterTransparent from '../components/footer_transparent/Footer_Transparent';

import './css/Login.css'


export default function Login() {
  return (
    <div>
      <Background />
      <div className="auth_wrapper">
        <AuthorizationHeader />
        <div className="login_wrapper">
          <LoginMenu />
        </div>
        <FooterTransparent />
      </div>
    </div>
  );
}