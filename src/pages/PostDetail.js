import React from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import { Jumbotron } from 'react-bootstrap'

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
        <Jumbotron style={{ backgroundImage: imgUrl, backgroundSize: 'cover', backgroundPosition: 'center center', height: '400px' }}>
          <div style={{ textAlign: 'center', padding: '15px', width: '40%', margin: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <h1>{post.title}</h1>
          </div>
        </Jumbotron>
      </div>
      <div dangerouslySetInnerHTML={{ __html: purePost }} style={{ padding: '30px', marginLeft: '150px', marginRight: '150px', backgroundColor: '#525252' }} />
    </div>
  )
}

export default PostDetail