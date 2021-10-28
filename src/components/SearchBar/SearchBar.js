import React from 'react';
import './SearchBar.css';
import { Select } from '../Select/Select';

export const SearchBar = (props) => {


    return (
        <form>
        <div className='inputBar'>
            <input 
                type="number"
                className="search-bar"
                placeholder="25"
                onChange={props.onChange}
                value={props.value}
                onKeyPress={props.onKeyPress}
            />
            <Select />
        </div>
        <input 
            className="submitBtn"
            type="submit" 
            name="converter"
            value="Convert"
        />
        </form>
    )
}