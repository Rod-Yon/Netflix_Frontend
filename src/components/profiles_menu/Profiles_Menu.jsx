import React from 'react';

import './Profiles_Menu.css'

export default function Profile() {

    let profiles = [
        {
            'name': 'Jennifer',
            'avatar': '01'
        },
        {
            'name': 'Bill',
            'avatar': '05'
        },
        {
            'name': 'Alice',
            'avatar': '06'
        },
        {
            'name': 'James',
            'avatar': '15'
        },
    ];

    if (profiles.length < 5) {
        profiles.push(
            {
                'name': 'Add Profile',
                'avatar': '00'
            }
        );
    }


    return (
        <div className='profiles_background'>
            <div className='profiles_wrapper'>
                <div className='profiles_row'>
                    <div className='profiles_title'>Who’s watching?</div>
                    <div className='profiles_container'>
                        {
                            profiles.map((person, index) => (
                                <div className='profiles_card' key={index}>
                                    <img src={`/assets/avatars/${person.avatar}.png`} />
                                    <div className='profiles_name'>{person.name}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}