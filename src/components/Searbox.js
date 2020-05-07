import React from 'react'

const Seachbox = ({Searchfield,onchange}) =>{
    return(
        <input 
        className="bg-light-green" 
        type="search"
         placeholder="search" 
         onChange={onchange}
         />
    )
}
export default Seachbox