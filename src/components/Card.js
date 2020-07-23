import React from 'react'
import './card.css'

export const Card = props => {

    // const rating = 
    // const imdbUrl = ''    

    return (
        <article className="card">
            <a href={`https://www.imdb.com/title/${props.element.imdb}`} target="_blank" rel="noopener noreferrer">
                <picture>
                    <img src={props.element.img} alt={props.element.title} />
                </picture>
                <div className="content">
                    <h4 className="title">{props.element.title}</h4>
                    <p className="year"><i className="fas fa-calendar-alt"></i><span>{props.element.year}</span></p>
                    <p className="ratings"><i className="fas fa-star"></i><span>{Math.round(props.element.rating * 10)}%</span></p>
                </div>
            </a>
        </article>
    )
}
