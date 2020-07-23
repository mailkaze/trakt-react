import React from 'react'
import './search.css'
import { setSearchTerm } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'

export const Search = props => {
    const searchTerm = useSelector((store) => store.searchTerm)
    const dispatch = useDispatch()

    const handleChange = e => {
        dispatch(setSearchTerm(e.target.value))
    }

    const handleClick = () => {
        props.searchMedia(searchTerm)
        setSearchTerm('')
    }

    const handlekeyUp = e => {
        if (e.keyCode === 13) {
            props.searchMedia(searchTerm)
        }
    }

    return (
        <div className="input-container">
            <input 
                type="text" 
                placeholder="Search movies and shows ..." 
                id="searchBox" 
                onChange={handleChange}
                autoFocus
                onKeyDown={handlekeyUp}
                value={searchTerm}
            />
            <i className="fas fa-search search-icon" onClick={handleClick} ></i>
        </div>
    )
}
