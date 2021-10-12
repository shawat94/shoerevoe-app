import React from 'react'
import useFetch from '../hooks/useFetch'
import PostCard from '../components/PostCard'
import { Container, Row } from 'react-bootstrap'

const PostArchive = () => {

  const { loading, error, data } = useFetch('http://localhost:1337/posts')

  if (loading) return(<p> loading </p>)
  if (error) return(error)

  return(
    <div>
      <div>
        <h1 align="center">All Posts</h1>
      </div>
      <div class="archive-card-container">
        <Container fluid> 
          <Row gutter={24}>
            {data.map(post => ( 
              <div key={post.id} className="col-md-4">
                  <PostCard post={post} />
              </div>))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default PostArchive