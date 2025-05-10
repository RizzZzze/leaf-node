import React, { useState } from 'react'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <h1>LeafNode</h1>
      <input
        type="text"
        placeholder="Search Notes"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        <h2>Search Results</h2>
        {/* Implement search results display */}
      </div>
    </div>
  )
}

export default App
