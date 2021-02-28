import React from 'react';
import  {configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBox from './SearchBox';

configure({ adapter : new Adapter() })

describe('Search Component' , () => {
    it( 'SearchBox renders', () => {
        const wrapper = shallow ( <SearchBox/> );
        expect(wrapper.exists()).toBe(true);
    } );
    it( 'user text is echoed', () => {
        const wrapper = shallow ( <SearchBox.WrappedComponent onMovieAdd={() =>{}}
                                                             savedMovies = {() =>{}}
                                                             onSelectedMovie = {() =>{}}/> 
        )
        wrapper.find('input').simulate('change', { target: { value : "hello" } });

        expect(wrapper.find('input').props().value).toEqual("hello");
    } )
})