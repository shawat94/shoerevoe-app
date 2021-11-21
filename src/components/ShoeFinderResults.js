import React from 'react'
import ShoeCard from './ShoeCard'
import { Container, Row } from 'react-bootstrap'

const ShoeFinderResults = ({ shoeData, finderCriteria, sliderValue, dropDownValue }) => {

  let criteriaList = Object.keys(finderCriteria)

  let finderQueryResults = shoeData.filter(shoe => { 
    let filterList = criteriaList.map(criteria => {
      let criteriaDetail = finderCriteria[criteria]
      if (!finderCriteria[criteria]['required'] || !finderCriteria[criteria]['value']  ) {
        return true
      }
      else if (finderCriteria[criteria]['control'] === sliderValue) {
        let criteriaValue = criteriaDetail['sliderValues']['values'][criteriaDetail['value']]
        if (criteriaDetail['type'] === 'range') {
          return({[criteria]: shoe[criteria] ? (shoe[criteria] <= criteriaValue['range']['max'] && shoe[criteria] >= criteriaValue['range']['min']) : true })
        } else if (criteriaDetail['type'] === 'max') {
          return({[criteria]: shoe[criteria] ? (shoe[criteria] <= criteriaValue['range']['max']) : true})
        }
      } else if (finderCriteria[criteria]['control'] === dropDownValue) {
        return({[criteria]: shoe[criteria] ? (String(shoe[criteria]) === criteriaDetail['value']) : true})
      }
    })
    return(!filterList.map(check => Object.values(check)[0]).includes(false))
  })

  console.log(finderQueryResults)

  return (
      <Container fluid>
        <Row>
            {finderQueryResults.map(result => <div style={{marginTop: "10px", marginBottom: "10px"}} className="col-md-4" ><ShoeCard shoe={result} /></div>)}
        </Row>
      </Container>
  )
}

export default ShoeFinderResults