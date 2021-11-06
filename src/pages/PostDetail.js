import React from 'react'
import DOMPurify from 'dompurify'
import { Jumbotron } from 'react-bootstrap'
import './PostDetail.css'

const marked = require("marked")

const PostDetail = ({ post }) => {

  const htmlPost = marked(post.body)
  const purePost = DOMPurify.sanitize(htmlPost)
  const baseImgUrl = "http://localhost:1337"
  const imgUrl = `url(${baseImgUrl}${post.HeaderImage.url})`

  console.log(imgUrl)

  return (
    <div>
      <div>
        <Jumbotron className='header-image' style={{ backgroundImage: imgUrl }}>
          <div className='header-image-text'>
            <h1>{post.title}</h1>
          </div>
        </Jumbotron>
      </div>
      <div dangerouslySetInnerHTML={{ __html: purePost }} className='review-text' />
    </div>
  )
}

export default PostDetail