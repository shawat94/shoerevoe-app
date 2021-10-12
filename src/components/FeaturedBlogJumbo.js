import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const FeaturedArticleJumbo = ({ blog }) => {
  const baseImgUrl = "http://localhost:1337"

  return(
    <div>
      <Jumbotron style={{paddingTop: '0', paddingBottom: '0', borderTop: '2px solid black', borderBottom: '2px solid black', backgroundImage: `url(${baseImgUrl}${blog.HeaderImage.url})`, backgroundSize: 'cover', backgroundPosition: 'center center', height: '400px'}}>
        <div style={{padding: '15px', width: '40%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <h1>{blog.title}</h1>
          <hr style={{width: '80%', marginLeft: '0'}}/>
          <h4 style={{paddingBottom: '30px'}}>{blog.preview}</h4>
          <Button variant="secondary">Read More</Button>
        </div>
      </Jumbotron>
    </div>
  )
}

export default FeaturedArticleJumbo