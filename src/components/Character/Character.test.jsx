import React from 'react'
import { shallow } from 'enzyme'
import Character from './Character'

describe('Character component', () => {
let wrapper;

  beforeEach(() => {
    const character = {
      name: 'aang',
      image: 'testpicture.com'
    }
    wrapper = shallow(<Character character={character}/>)
  })

  it('to have 1 h1, 1 img tag, and 1 li element', () => {
    expect(wrapper.find('h1')).toHaveLength(1)
    expect(wrapper.find('img')).toHaveLength(1)
    expect(wrapper.find('li')).toHaveLength(1)
  })
})