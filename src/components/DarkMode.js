import React from 'react'
import './darkMode.css'

export const DarkMode = () => {

    const toggleDarkMode = e => { // Puts ON or OFF the Dark Mode.
        if (e.target.checked === true) {
            document.body.classList.add('is-dark-mode')
        } else {
            document.body.classList.remove('is-dark-mode')
        }
    }

    return (
        <div className="dark-mode">
            <span>Dark Mode</span>
            <input 
                type="checkbox" 
                id="dark-mode-checkbox" 
                onChange={toggleDarkMode}
            />
            <label 
                htmlFor="dark-mode-checkbox" 
                className="switch"
            ><div className="switch-ball"></div>
            </label>
        </div>
    )
}
