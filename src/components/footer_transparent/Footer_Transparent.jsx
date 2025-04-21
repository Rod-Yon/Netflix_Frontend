import React from 'react';

import './Footer_Transparent.css';
import SelectionMenu from '../selection_menu/Selection_Menu';

export default function Footer_Transparent() {

    const languages = [
        { value: 'en', text: 'English' },
        { value: 'ru', text: 'Russian' },
        { value: 'es', text: 'Spanish' },
        { value: 'fr', text: 'French' },
      ];

    const Do_Nothing = () => { };

    return (
        <div className='footer_transparent'>
            <div className='links_container'>
                <div className='links_column'>
                    <div className="links_row">
                        <span>
                            Questions? Call&nbsp;<button className='empty_link' onClick={Do_Nothing}>1-844-505-2993</button>
                        </span>
                    </div>
                </div>
                <div className='links_row'>
                    <div className='links_column'>
                        <button className='empty_link' onClick={Do_Nothing}>FAQ</button>
                        <button className='empty_link' onClick={Do_Nothing}>Privacy</button>
                    </div>
                    <div className='links_column'>
                        <button className='empty_link' onClick={Do_Nothing}>Help Center</button>
                        <button className='empty_link' onClick={Do_Nothing}>Cookie Preferences</button>
                    </div>
                    <div className='links_column'>
                        <button className='empty_link' onClick={Do_Nothing}>Netflix Shop</button>
                        <button className='empty_link' onClick={Do_Nothing}>Corporate Information</button>
                    </div>
                    <div className='links_column'>
                        <button className='empty_link' onClick={Do_Nothing}>Terms of Use</button>
                        <button className='empty_link' onClick={Do_Nothing}>Do Not Sell or Share My Personal Information</button>
                    </div>
                </div>
                <div className='links_row'>
                    <div className='links_column'>
                        <button className='empty_link' onClick={Do_Nothing}>Ad Choices</button>
                    </div>
                </div>
                <div className='links_row'>
                    <SelectionMenu values={languages} />
                </div>
            </div>
        </div >
    );
};