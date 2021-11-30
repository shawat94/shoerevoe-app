import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {

  return (
    <div>
      <Card style={{height: '400px'}} className="bg-dark text-white" border="secondary" as={Link} to={`/post/${post.id}`}>
        <Card.Header style={{fontWeight: "bold", fontStyle: "italic"}}>{post.type}</Card.Header>
        <Card.Img variant="top" padding="5%" src={`${post.HeaderImage.url}`} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.preview}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PostCard