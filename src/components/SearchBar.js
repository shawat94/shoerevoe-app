import React from 'react'
import { Form } from 'react-bootstrap'

const SearchBar = ({ setSearchTerm }) => {

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div id="search">
    <Form>
      <Form.Group>
        <Form.Control onChange={handleSearchChange} placeholder='Search' />
      </Form.Group>    
    </Form>
  </div>
  )
}

export default SearchBar