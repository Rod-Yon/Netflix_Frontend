import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import './Profiles_Menu.css'

const api_url = 'https://netflix-backend-f9gl.onrender.com/';

export default function Profile() {

    const [profiles, Set_New_Profiles] = useState([]);
    const [name_change_index, Set_Name_Change_Index] = useState(null);
    const [new_name, Set_New_Name] = useState('');
    const [error_element, Set_Error_Element] = useState('');

    const navigate = useNavigate();

    const get_token = () => {

        const local_token = localStorage.getItem('token');
        const cookie_token = document.cookie.match(new RegExp('(^| )token=([^;]+)'));

        const token = local_token || (cookie_token && cookie_token[2]);

        if (!token) return null;
        return token;
    };

    const get_profiles = async () => {

        const token = get_token();

        try {
            const decoded = jwtDecode(token);
            const username = decoded.username;

            const response = await fetch(`${api_url}/profiles/${username}`);
            if (!response.ok) throw new Error('Failed to fetch profiles');

            const profiles = await response.json();
            update_profiles(profiles);
            return profiles;

        } catch (error) {
            alert(`Error fetching profiles: ${error}`);
            return null;
        }
    };

    const create_new_profile = async (index) => {

        if (profiles[index].avatar != '00') {
            redirect_page(profiles[index].profile_id);

        } else {

            Set_Error_Element('');

            const token = get_token();

            try {
                const decoded = jwtDecode(token);
                const username = decoded.username;

                const response = await fetch(`${api_url}/profiles/${username}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ username }),
                });

                if (!response.ok) throw new Error('Failed to create new profile');

                const profiles = await response.json();
                update_profiles(profiles);
                return profiles;

            } catch (error) {
                Set_Error_Element(error);
                return null;
            }
        }
    };

    const redirect_page = (profile_id) => {
        
        localStorage.setItem('profile_id', profile_id);
        navigate(`/home/${profile_id}`);
    };

    const change_name = (index) => {

        if (profiles[index].name != 'Add Profile') {

            Set_Error_Element('');
            Set_Name_Change_Index(index);
            Set_New_Name(profiles[index].name);
        }
    };

    const new_name_submit = async (index) => {

        const profile_id = profiles[index].profile_id;

        try {
            const response = await fetch(`${api_url}/profiles`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ profile_id, new_name })
            });

            if (!response.ok) throw new Error('Name Change Error');

            update_profiles();

        } catch (error) {

            Set_Error_Element(error);
        }

        Set_Name_Change_Index(null);
    };

    const update_profiles = async (profiles = null) => {

        let temp_profiles;

        if (profiles) {
            temp_profiles = profiles;
        } else {
            temp_profiles = await get_profiles();
        }

        if ((temp_profiles.length < 5) && (temp_profiles[temp_profiles.length - 1].name != 'Add Profile')) {
            temp_profiles.push(
                {
                    'name': 'Add Profile',
                    'avatar': '00'
                }
            );
            Set_New_Profiles(temp_profiles);
        }
    };

    useEffect(() => { update_profiles(); }, []);

    return (
        <div className='profiles_background'>
            <div className='profiles_wrapper'>
                <div className='profiles_row'>
                    <div className='profiles_title'>Who’s watching?</div>
                    <div className='profiles_container'>
                        {
                            profiles.map((person, index) => (
                                <div className='profiles_card' key={index}>
                                    <img className='profiles_avatar' src={`/assets/avatars/${person.avatar}.png`} alt='Avatar' onClick={() => create_new_profile(index)} />
                                    {name_change_index === index ? (
                                        <input
                                            value={new_name}
                                            onChange={(name) => { Set_New_Name(name.target.value) }}
                                            onBlur={() => Set_Name_Change_Index(null)}
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                    new_name_submit(index);
                                                }
                                            }}
                                            autoFocus
                                            className='profiles_input' />) : (
                                        <div className='profiles_name' onClick={() => change_name(index)} >{person.name}</div>)}
                                </div>
                            ))
                        }
                    </div>
                    {Boolean(error_element) && <div className='error_element'>{error_element}</div>}
                </div>
            </div>
        </div>
    );
}