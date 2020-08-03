import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  const characterList = [
    {
      id: 1,
      name: 'aang',
      image: 'testpicture.com'
    },
    {
      id: 2,
      name: 'sokka',
      image: 'testpicture.com'
    },
    {
      id: 3,
      name: 'katara',
      image: 'testpicture.com'
    },
    {
      id: 4,
      name: 'toph',
      image: 'testpicture.com'
    },
  
  ]

  it('renders CharacterList', () => {
    const wrapper = shallow(<CharacterList characterList={characterList}/>);
    expect(wrapper).toMatchSnapshot();
  });
});