import React from 'react'
import './cardsContainer.css'
import {Card} from './Card'

export const CardsContainer = props => {
    return (
        <div className="cards-container">
            {
                //load cards if got images:
                // <Card />
            }
            <div className="empty">
                <span>Search something!</span>
                <i className="fas fa-ticket-alt"></i>
            </div>
        </div>
    )
}
