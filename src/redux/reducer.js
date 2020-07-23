export default function reducer(state, action) {
    switch (action.type){
        case 'SET_LOAD_MORE':
            return {...state, loadMore: action.payload}
        case 'SET_MOVIE_DATA':
            return {...state, movieData: action.payload}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.payload}
        case 'SET_TOTAL_PAGES':
            return {...state, totalPages: action.payload}
        case 'SET_SEARCH_TERM':
            return {...state, searchTerm: action.payload}
        default:
            return state
    }
}