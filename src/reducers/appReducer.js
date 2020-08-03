export const initialState = {
  page: 1,
  theme: 'dark',
  characterList: []
}

export default function reducer(state, action) {
  switch(action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    case 'NEXT_PAGE':
      return { ...state, page: state.page + 1}
      case 'PREV_PAGE':
        return { ...state, page: state.page - 1}
    default: 
      return state
  }
}