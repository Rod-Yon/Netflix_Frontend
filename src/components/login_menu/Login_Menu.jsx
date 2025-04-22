import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import './Login_Menu.css';

const api_url = 'http://localhost:8080';

export default function Login_Menu() {

    const [login, Set_Login] = useState('');
    const [login_error, Set_Login_Error] = useState('');

    const [password, Set_Password] = useState('');
    const [password_error, Set_Password_Error] = useState('');

    const [cookie, Set_Cookie] = useState(0);
    const [role, Set_Role] = useState('User');

    const [mode, Set_Mode] = useState(false);
    const [information, Set_Information] = useState(false)

    const [authorization_error, Set_Authorization_Error] = useState('');

    const Change_Mode = () => {
        Set_Mode(!mode);
        Set_Information(false);
    }

    const regex = (str) => {
        return !(/[a-zA-Z]/.test(str) && /\d/.test(str));
    };

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

        if ((value.length < 8) || (value.length > 60)) {
            Set_Password_Error('Your password must contain between 8 and 60 characters.');
        } else if (regex(password)) {
            Set_Password_Error('Your password must contain at least 1 letter and 1 number.');
        } else {
            Set_Password_Error('');
        }
    };

    const Send_Data = async (input) => {

        input.preventDefault();

        if (!login || login.length < 5) {
            Set_Login_Error('Please enter a valid email or phone number.');
        }

        if (!password || password.length < 8 || password.length > 60) {
            Set_Password_Error('Your password must contain between 8 and 60 characters.');
        } else if (regex(password)) {
            Set_Password_Error('Your password must contain at least 1 letter and 1 number.');
        }

        if (!login_error && !password_error && login && password) {
            
            const res = await fetch(`${api_url}/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ username: login, password, cookie, role, mode}),
            });

            const data = await res.json();

            if (res.ok) {

                if (!cookie && data.token) {
                  localStorage.setItem('token', data.token);
                }
                window.location.href = '/profile';

              } else {
                alert(data.message || 'Authorization Error');
              }
        }
    };

    return (
        <div className='login_menu'>
            <div className='login_container'>
                <div className='title'>{!mode ? 'Sign In' : 'Sign Up'}</div>
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
                    {mode && (
                        <>
                            <label className="remember_me">
                                <input type="checkbox" className="custom_checkbox" onChange={() => {
                                    if (role == 'User') {
                                        Set_Role('Admin')
                                    } else {
                                        Set_Role('User')
                                    }
                                }} />
                                <span className="checkbox_label">Administrator</span>
                            </label>
                        </>
                    )}
                    <input className='submit_button' type='submit' value={!mode ? 'Sign In' : 'Sign Up'} />
                    {!mode && (
                        <>
                            <div className='forgotten_password'>
                                <a href="/" onClick={(action) => { action.preventDefault(); Change_Mode(); }}>Forgot Password?</a>
                            </div>
                            <label className="remember_me">
                                <input type="checkbox" className="custom_checkbox" onChange={() => Set_Cookie((value) => !value)} />
                                <span className="checkbox_label">Remember me</span>
                            </label>
                        </>
                    )}
                </form>
                {!mode && (
                    <>
                        <div className="signup_now">
                            New to Netflix? <a href="/" onClick={(action) => { action.preventDefault(); Change_Mode(); }} >Sign up now.</a>
                        </div>
                    </>
                )}
                <div className="recaptcha_notice">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='learn_more' href="/" onClick={(action) => { action.preventDefault(); Set_Information(true) }}>{information ? '' : 'Learn more.'}</a>
                </div>
                {information && (
                    <div className="recaptcha_notice">
                        The information collected by Google reCAPTCHA is subject to the Google <a className='learn_more' href='https://policies.google.com/privacy'>Privacy Policy</a> and <a className='learn_more' href='https://policies.google.com/terms'>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                    </div>
                )}
            </div>
        </div >
    );
};