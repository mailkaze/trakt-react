import reducer from './reducer'
import { createStore } from 'redux'

const initialState = {
    movieData: [],
    currentPage: 0,
    totalPages: 0,
    loadMore: false,
    searchTerm: ''
}

export default createStore(reducer, initialState)
