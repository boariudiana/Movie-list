import React from "react";
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header';
import { NavLink } from 'react-router-dom';

 
configure ( {adapter : new Adapter()})

describe('<Header/>', () =>{
    it('should render two <NavLink/>' , () =>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.find(NavLink)).toHaveLength(2)
    })
} )