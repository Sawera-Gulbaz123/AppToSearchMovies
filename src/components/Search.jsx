import React from 'react'

export default function Search({searchTerm, setSearchTerm}) {
    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
    }
  return (
    <div className='search'>
    <div>
        <img src="/search.svg" alt="...." />
        <input type="text"
        placeholder='Search from thousands of movies'
        value={searchTerm}
        onChange={handleChange}
         />

    </div>
      
    </div>
  )
}
