import React from "react";
import  { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieList from './MovieList';

configure({ adapter : new Adapter() })

const mockMovies = [
    {
        id : 12,
    } 
];


describe('MovieList Component' , () => {
    it("renders MovieList", () => {
      
        const wrapper = shallow( <MovieList  movies = {mockMovies}/> );
        expect(wrapper).toMatchSnapshot();
    })

    it("returns an empty array when there is no data to map though", () => {
      
        const wrapper = shallow( < MovieList  /> );
        expect(wrapper).toMatchSnapshot();
    })

    it( 'does not break with an empty array',  () => {
        const wrapper = shallow ( < MovieList  movies = {[]} /> );

        expect(wrapper.find('li')).toHaveLength(0);
    } )

    it( 'does not break without movies',  () => {
        const wrapper = shallow ( < MovieList /> );

        expect(wrapper.find('li')).toHaveLength(0);
    } )

    it( 'renders search results when movies changes', () => {
        const wrapper = shallow ( < MovieList 
                                          movies ={[]} /> );
        wrapper.setProps({
            movies: [{
                id : 12,
                title : "title"
            }]
        });
        expect(wrapper.find('img').prop("alt")).toEqual("title")
    } )

})

