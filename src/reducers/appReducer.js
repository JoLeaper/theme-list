export const initialState = {
  page: 1,
  theme: 'dark'
}

export default function reducer(state, action) {
  switch(action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    default: 
      return state;
  }
}