import React from 'react'
import useFetch from '../hooks/useFetch'
import PostCard from '../components/PostCard'
import { Table, TableRow } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const PostArchive = () => {  
  
  const history = useHistory()

  const handleRowClick = (post) => {
    history.push(`/post/${post.id}`)
  } 

  const { loading, error, data } = useFetch('http://localhost:1337/posts')

  if (loading) return(<p> loading </p>)
  if (error) return(error)

  return(
    <div>
      <div>
        <h1 align="center">All Posts</h1>
      </div>
      <div style={{ marginLeft: '150px', marginRight: '150px' }}>
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
            {data.map(post => <tr onClick={() => handleRowClick(post)}><td>{post.title}</td><td>{post.type}</td><td>{post.author}</td><td>{post.date}</td></tr>)}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default PostArchive