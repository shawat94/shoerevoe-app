import React from "react"
import useFetch from "../hooks/useFetch"
import PostCard from "../components/PostCard"
import FeaturedArticleJumbo from "../components/FeaturedBlogJumbo"
import { Container, Row, Col } from "react-bootstrap"

const Home = ({ posts }) => {

  return (
    <div>
      <FeaturedArticleJumbo blog={posts[0]} />
      <div style={{padding: '20px 0px 0px'}}>
        <h1 align="center">Recent Posts</h1>
      </div>
      <div className="home-card-container">
        <Container fluid>
          <Row>
            {posts.map(post => (
              <div key={post.id} className="col-md-4">
                  <PostCard post={post} />
              </div>))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home