import React from 'react'
import ShoeCard from './ShoeCard'
import { Container, Row } from 'react-bootstrap'

const ShoeFinderResults = ({ shoeData, finderCriteria, finderResults, setFinderResults, sliderValue, dropDownValue }) => {

  let criteriaList = Object.keys(finderCriteria)

  let finderQueryResults = shoeData.filter(shoe => { 
    let filterList = criteriaList.map(criteria => {
      let criteriaDetail = finderCriteria[criteria]
      if (finderCriteria[criteria]['control'] === sliderValue) {
        let criteriaValue = criteriaDetail['sliderValues']['values'][criteriaDetail['value']]
        if (criteriaDetail['type'] === 'range') {
          return({[criteria]: shoe[criteria] <= criteriaValue['range']['max'] && shoe[criteria] >= criteriaValue['range']['min']})
        } else if (criteriaDetail['type'] === 'max') {
          return({[criteria]: shoe[criteria] <= criteriaValue['range']['max']})
        }
      } else if (finderCriteria[criteria]['control'] === dropDownValue) {
        return({[criteria]: String(shoe[criteria]) === criteriaDetail['value']})
      }
    })
    return(!filterList.map(check => Object.values(check)[0]).includes(false))
  })

  console.log(finderQueryResults)

  return (
      <Container fluid>
        <Row>
          <div className="col-md-4">
            {finderQueryResults.map(result => <ShoeCard shoe={result} />)}
          </div>
        </Row>
      </Container>
  )
}

export default ShoeFinderResults