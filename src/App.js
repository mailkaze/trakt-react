import React, { useEffect } from 'react';
import {Search} from './components/Search'
import {DarkMode} from './components/DarkMode'
import {CardsContainer} from './components/CardsContainer'    

import { useSelector, useDispatch } from 'react-redux'
import { traktClientId, tmdbApiKey } from './secrets'
import { setLoadMore, setMovieData, setCurrentPage, setTotalPages } from './redux/actions'



function App() {
  const traktUrl = 'https://api.trakt.tv'
  const tmdbUrl = 'https://api.themoviedb.org/3'
  const tmdbImageUrl = 'https://image.tmdb.org/t/p/'
  const tmdbImageSize = 'w154'

  const dispatch = useDispatch()
  const currentPage = useSelector((store) => store.currentPage)
  const totalPages = useSelector((store) => store.totalPages)
  const searchTerm = useSelector(state => state.searchTerm)
  const loadMore = useSelector(state => state.loadMore)

  const getRating = async (slug, media) => { // Gets the rating of a media from Trakt.
    const res = await fetch(`${traktUrl}/${media}/${slug}/ratings`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': traktClientId
        }
    })
    const ratings = await res.json()
    return ratings.rating
  }

  const getPoster = async (tmdbId, media) => { // Gets the poster of a media from TMDB
      const res = await fetch(`${tmdbUrl}/${media}/${tmdbId}?api_key=${tmdbApiKey}`)
      const data = await res.json()
      let poster = ''
      data.poster_path
      ? poster = `${tmdbImageUrl}${tmdbImageSize}${data.poster_path}`
      : poster = null
      return poster
  }

  const searchMedia = (query, page=1) => { // Gets the list of the medias that match with the search, from Trakt.
    dispatch(setLoadMore(false))
    dispatch(setMovieData([]))
    fetch(`${traktUrl}/search/movie,show?query=${query}&page=${page}&limit=12`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': traktClientId
        }
    })
    .then(res => {
      const current = parseInt(res.headers.get('X-Pagination-Page'))
      const total = parseInt(res.headers.get('X-Pagination-Page-Count'))
      dispatch(setCurrentPage(current))
      dispatch(setTotalPages(total))
      return res.json()
    })
    .then( async data => {
      console.log(data)
      let elements = []
      let element = {}
      for (let i = 0; i < 12; i++) { // Constructs an object with the data needed from the items sent by Trakt.
          const e = data[i]
          if (e.type === 'movie') {
              element = {
                  img: await getPoster(e.movie.ids.tmdb, 'movie'),
                  title: e.movie.title,
                  year: e.movie.year,
                  rating: await getRating(e.movie.ids.slug, 'movies'),
                  imdb: e.movie.ids.imdb
              }
          } else if (e.type === 'show') {
              element = {
                  img: await getPoster(e.show.ids.tmdb, 'tv'),
                  title: e.show.title,
                  year: e.show.year,
                  rating: await getRating(e.show.ids.slug, 'shows'),
                  imdb: e.show.ids.imdb
              }
          }
          elements.push(element)
      }
      dispatch(setMovieData(elements))
      // setCurrentPage(currentPage + 1)
    })
    .catch(e => console.log('Error al conseguir los datos:', e))
  }

  useEffect(() => {
    if (currentPage < totalPages) dispatch(setLoadMore(true))
  }, [currentPage, totalPages, dispatch])

  return (
    <>
      <Search searchMedia={searchMedia} />
      <div className="container">
        <DarkMode />
        <CardsContainer />
        { 
          loadMore && 
            <button 
              id="load-more"
              onClick={() => searchMedia(searchTerm, currentPage + 1)}
            >Load more results</button>
        }
      </div>
    </>
  );
}

export default App;
