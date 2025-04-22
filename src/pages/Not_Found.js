import React from 'react';

import './css/Not_Found.css'

export default function Not_Found() {
    return (
        <div className='not_found_background'>
            <div className='not_found_wrapper'>
                <div className='not_found_container'>
                    <a href='/' className='not_found_link'>
                        <img src='/assets/images/netflix_logo.svg' alt='NETFLIX' className='not_found_netflix_logo'/>
                    </a>
                    <div className='not_found_text'>ERROR 404</div>
                    <div className='not_found_text'>Page Not Found</div>
                </div>
            </div>
        </div>
    );
}