import React from 'react';
import './ThemeSwitch.css';


const ThemeSwitch = ({theme, themeSwitch}) => {

    const switchState = (theme === 'dark' ? 'on' : 'off')
    return (
        <button
            className='theme-switch-button'
            onClick={themeSwitch}
        >
            <span className='theme-switch material-icons-outlined'>toggle_{switchState}</span>
        </button>
    );
}

export default ThemeSwitch;
