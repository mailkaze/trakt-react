import React from 'react'
import './search.css'

export const Search = () => {
    return (
        <div className="input-container">
            <input 
                type="text" 
                placeholder="Search movies and shows ..." 
                id="searchBox" 
                autoFocus
            />
            <i className="fas fa-search search-icon"></i>
        </div>
    )
}
