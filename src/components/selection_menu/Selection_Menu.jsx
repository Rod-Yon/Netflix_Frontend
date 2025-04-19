import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

import './Selection_Menu.css'

export default function LanguageSelector({ values }) {

    const props = {
        'value': '123'
    };

    const [value, Set_Value] = useState(values[0]?.value || '');

    const Change_Value = (event) => {
        Set_Value(event.target.value);
    };

    return (
        <FormControl className="selector" variant="standard">
            <Select
                value={value}
                onChange={Change_Value}
                displayEmpty
                disableUnderline
                className="custom_select"
                MenuProps={{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                    PaperProps: {
                        style: {
                            backgroundColor: '#222',
                            color: 'white',
                        }
                    }
                }}
            >
                {values.map((value) => (
                    <MenuItem
                        key={value.value}
                        value={value.value}
                        className="custom_menu_item"
                    >
                        {value.text}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}