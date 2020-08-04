import reducer from './appReducer'

describe('app reducer', () => {
  it('increments the page', () => {
    const state = {
      page: 1
    };

    const action = {
      type: 'NEXT_PAGE'
    }

    const newState = reducer(state, action)

    expect(newState).toEqual({
      page: 2
    })

  })

  it('decrements the page', () => {
    const state = {
      page: 1
    };

    const action = {
      type: 'PREV_PAGE'
    }

    const newState = reducer(state, action)

    expect(newState).toEqual({
      page: 0
    })
  })

  it('sets the characters list', () => {
    const state = {
      charactersList: [{
        name: 'aang'
      }]
    }
  })

  it('toggles the theme from light to dark', () => {
    const state = {
      theme: 'light'
    }

    const action = {
      type: 'TOGGLE_THEME'
    }

    const newState = reducer(state, action)

    expect(newState).toEqual({
      theme: 'dark'
    })
    
  })

  it('toggles the theme from dark to light', () => {
    const state = {
      theme: 'dark'
    }

    const action = {
      type: 'TOGGLE_THEME'
    }

    const newState = reducer(state, action)

    expect(newState).toEqual({
      theme: 'light'
    })
  })

})