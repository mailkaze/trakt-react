import React from 'react'
import './card.css'

export const Card = props => {

    const rating = Math.round(props.data.rating * 10)
    const imdbUrl = 'https://www.imdb.com/title/'    

    return (
        <article className="card">
            <a href={`${imdbUrl}${props.data.imdb}`} target="_blank" rel="noopener noreferrer">
                <picture>
                    <img src={props.data.img} alt={props.data.title} />
                </picture>
                <div className="content">
                    <h4 className="title">{props.data.title}</h4>
                    <p className="year"><i className="fas fa-calendar-alt"></i><span>${props.data.year}</span></p>
                    <p className="ratings"><i className="fas fa-star"></i><span>{rating}%</span></p>
                </div>
            </a>
        </article>
    )
}
