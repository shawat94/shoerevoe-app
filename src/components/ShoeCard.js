import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShoeCard = ({ shoe }) => {

  const placeholderImgUrl = "https://via.placeholder.com/1008x756?text=No+Image"

  let image

  if (shoe.CardImage) {
    image = <Card.Img variant="top" padding="5%" src={`${shoe.CardImage.url}`} />
  } else {
    image = <Card.Img variant="top" padding="5%" src={`${placeholderImgUrl}`} />
  }

  const displayAttributes = ['Weight', 'Drop', 'HeelStack', 'Price', 'Usage', 'Plate']

  const bodyText = displayAttributes.map(attribute => <Card.Text style={{margin: '2px'}}>{`${attribute}: ${shoe[attribute]}`}</Card.Text>)

  const reviewButton = () => {
    if (shoe.review) {
      return <Button as={Link} to={`/post/${shoe.review.id}`} >Review</Button>
    }
  }

  return (
    <div>
      <Card style={{height: '500px'}} className="bg-dark text-white" border="secondary">
        {image}
        <Card.Body className="scrollbar-primary" style={{margin: '2px', overflowY: 'auto'}}>
          <Card.Title>{shoe.Name}</Card.Title>
          {bodyText}
          {reviewButton()}
        </Card.Body>
      </Card>
    </div>
  )
}

export default ShoeCard