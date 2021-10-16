import React from 'react'
import { Table } from 'react-bootstrap'

const ArchiveTable = ({ data, searchTerm }) => {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Author</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {data.map(post => {
        if (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm) {
          return(<tr onClick={() => handleRowClick(post)}><td>{post.title}</td><td>{post.type}</td><td>{post.author}</td><td>{post.date}</td></tr>)
        } else {
          return(null)}
      })}
    </tbody>
  </Table>)
}

export default ArchiveTable