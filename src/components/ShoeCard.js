import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShoeCard = ({ shoe }) => {

  const baseImgUrl = "http://localhost:1337"

  let image

  if (shoe.CardImage) {
    image = <Card.Img variant="top" padding="5%" src={`${baseImgUrl}${shoe.CardImage.url}`} />
  } else {
    image = <p>No Image</p>
  }

  const displayAttributes = ['Weight', 'Drop', 'HeelStack', 'Price', 'Usage', 'Plate']

  const bodyText = displayAttributes.map(attribute => <Card.Text style={{margin: '2px'}}>{`${attribute}: ${shoe[attribute]}`}</Card.Text>)

  console.log(bodyText)


  return (
    <div>
      <Card style={{height: '400px'}} className="bg-dark text-white" border="secondary">
        {image}
        <Card.Body style={{margin: '2px'}}>
          <Card.Title>{shoe.Name}</Card.Title>
          {bodyText}
        </Card.Body>
      </Card>
    </div>
  )
}

export default ShoeCard