import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './FeaturedBlogJumbo.css'

const FeaturedArticleJumbo = ({ blog }) => {
  const baseImgUrl = "http://localhost:1337"

  return(
    <div>
      <Jumbotron className='featured-blog-jumbo' style={{backgroundImage: `url(${baseImgUrl}${blog.HeaderImage.url})`}}>
        <div className='jumbo-interior'>
          <h1>{blog.title}</h1>
          <hr/>
          <h4>{blog.preview}</h4>
          <Button variant="secondary" as={Link} to={`/post/${blog.id}`}>Read More</Button>
        </div>
      </Jumbotron>
    </div>
  )
}

export default FeaturedArticleJumbo