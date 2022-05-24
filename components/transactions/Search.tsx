import React from 'react'
import { TextField } from '../../lib/components/TextField'

interface Props {
    
}

const Search = (props: Props) => {
    return (
        <TextField className="d-flex flex-column" hasError={false}>
            <label htmlFor="search-transactions">Search</label>
            <input type="text" name="search-transactions" id="search-transactions" placeholder="Search transactions"/>
        </TextField>
    )
}

export default Search
