export const initialState = {
  page: 1,
  theme: 'light',
  characterList: []
}

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characterList: action.payload }
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }
    case 'NEXT_PAGE':
      return { ...state, page: state.page + 1}
    case 'PREV_PAGE': 
        return { ...state, page: state.page - 1}
    default: 
      return state
  }
}