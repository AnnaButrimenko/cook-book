import React from 'react'
import { shallow } from 'enzyme';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import AddRecipeBtn from '../Add-recipe-btn/add-recipe-btn'

describe('Header component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AppBar />)
    expect(wrapper.find('p').text()).toEqual('1');
  })
})