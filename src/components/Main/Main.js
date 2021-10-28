import React, {useState} from 'react';
import './Main.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Select } from '../Select/Select';



export const Main = () => {
    const [query, setQuery] = useState(0);
    const [result, setResult] = useState(0);

    const handleEvent = e => setQuery(e.target.value);

   

    const search = evt => {
        if(evt.key === "Enter") {
            
            setQuery('');
        }
    };


    return(
        <main>
            <h1>{result}</h1>
            <SearchBar 
                onChange={handleEvent}
            />
            <div className="converterOption">
                <h2>convert to: </h2>
                <Select />
            </div>
        </main>
    )
}