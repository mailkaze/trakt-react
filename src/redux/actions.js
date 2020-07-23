export function setLoadMore(value) {
    return {
        type: 'SET_LOAD_MORE',
        payload: value
    }
}

export function setMovieData(data) {
    return {
        type: 'SET_MOVIE_DATA',
        payload: data
    }
}

export function setCurrentPage(page) {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: page
    }
}

export function setTotalPages(pages) {
    return {
        type: 'SET_TOTAL_PAGES',
        payload: pages
    }
}

export function setSearchTerm(search) {
    return {
        type: 'SET_SEARCH_TERM',
        payload: search
    }
}

