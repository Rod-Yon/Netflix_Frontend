import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import './Login_Menu.css';

export default function Login_Menu() {

    const [login, Set_Login] = useState('');
    const [login_error, Set_Login_Error] = useState('');

    const [password, Set_Password] = useState('');
    const [password_error, Set_Password_Error] = useState('');

    const Login_Validation = (input) => {

        const value = input.target.value;

        Set_Login(value);

        if (value.length < 5) {
            Set_Login_Error('Please enter a valid email or phone number.');
        } else {
            Set_Login_Error('');
        }
    };

    const Password_Validation = (input) => {

        const value = input.target.value;

        Set_Password(value);

        if ((value.length < 4) || (value.length > 60)) {
            Set_Password_Error('Your password must contain between 4 and 60 characters.');
        } else {
            Set_Password_Error('');
        }
    };

    const Send_Data = (input) => {

        input.preventDefault();

        if (!login || login.length < 5) {
            Set_Login_Error('Please enter a valid email or phone number.');
        }

        if (!password || password.length < 4 || password.length > 60) {
            Set_Password_Error('Your password must contain between 4 and 60 characters.');
        }

        if (!login_error && !password_error && login && password) {
            console.log('Sending data:', { login, password });
        }
    };

    return (
        <div className='login_menu'>
            <div className='login_container'>
                <div className='title'>Sign In</div>
                <form onSubmit={(input) => { Send_Data(input) }} className='menu_container'>
                    <TextField
                        label='Email or phone number'
                        variant='filled'
                        fullWidth
                        className='input_field'
                        value={login}
                        onChange={Login_Validation}
                        error={Boolean(login_error)}
                        helperText={
                            login_error &&
                            (<div className='error_container'>
                                <img src="/assets/icons/error.svg" alt="error" className='error_icon' />
                                <span className='error_text'>{login_error}</span>
                            </div>)
                        }
                    />
                    <TextField
                        label='Password'
                        variant='filled'
                        fullWidth
                        className='input_field'
                        value={password}
                        onChange={Password_Validation}
                        error={Boolean(password_error)}
                        helperText={
                            password_error &&
                            (<div className='error_container'>
                                <img src="/assets/icons/error.svg" alt="error" className='error_icon' />
                                <span className='error_text'>{password_error}</span>
                            </div>)
                        }
                    />
                    <input className='submit_button' type='submit' value='Sign In' />
                    <div className="form_bottom_row">
                        <label className="remember_me">
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="#" className="help_link">Need help?</a>
                    </div>
                </form>
                <div className="signup_now">
                    New to Netflix? <a href="/registration">Sign up now.</a>
                </div>
                <div className="recaptcha_notice">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
                </div>
            </div>
        </div>
    );
};