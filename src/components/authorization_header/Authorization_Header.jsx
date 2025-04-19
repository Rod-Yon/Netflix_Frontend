import React from 'react';

import './Authorization_Header.css';

export default function Authorization_Header() {
    return (
        <header className="authorization_header">
            <div className="authorization_header_inner">
                <a href="/">
                    <img
                        src="/assets/images/netflix_logo.svg"
                        alt="Netflix Logo"
                        className="netflix_logo"
                    />
                </a>
            </div>
        </header>
    );
};