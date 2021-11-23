import React, { useState } from 'react'
import Slider from './Slider'
import useFetch from '../hooks/useFetch'
import DropDownSelect from './DropDownSelect'
import ShoeFinderResults from './ShoeFinderResults'
import './ShoeFinder.css'

const ShoeFinder = () => {
  const { loading, error, data } = useFetch('/shoes')

  const sliderValue = "slider"
  const dropDownValue = "dropDown"

  const [finderResults, setFinderResults] = useState([])
  const [finderCriteria, setFinderCriteria] = useState({
    "Usage": {"value": "", "required": false, "control": dropDownValue},
    "Brand": {"value": "", "required": false, "control": dropDownValue},
    "Plate": {"value": "", "required": false, "control": dropDownValue},
    "Weight": {
      "value": 2, 
      "required": false,
      "sliderValues": {
        "values": [
          {"name": "Ultralight", "range": {"min": "0", "max": "6"}},
          {"name": "Light", "range": {"min": "6", "max": "8"}},
          {"name": "Medium", "range": {"min": "8", "max": "10"}},
          {"name": "Heavy", "range": {"min": "10", "max": "50"}}
          ]
      },
      "unit": "oz",
      "type": "range",
      "control": sliderValue},
    "Drop": {
      "value": 2,
      "required": false,
      "sliderValues": {
        "values": [
          {"name": "Zero", "range": {"min": "0", "max": "1"}},
          {"name": "Low", "range": {"min": "1", "max": "4"}},
          {"name": "Medium", "range": {"min": "4", "max": "8"}},
          {"name": "High", "range": {"min": "8", "max": "15"}}
          ]
        }, 
      "unit": "mm",
      "type": "range",
      "control": sliderValue},
    "Price": {
      "value": 1,
      "required": false,
      "sliderValues": {
        "values": [
          {"name": "", "range": {"min": "0", "max": "100"}},
          {"name": "", "range": {"min": "100", "max": "150"}},
          {"name": "", "range": {"min": "150", "max": "200"}},
          {"name": "", "range": {"min": "200", "max": "250"}},
          {"name": "", "range": {"min": "250", "max": "300"}},
          {"name": "", "range": {"min": "300", "max": "500"}}
          ]
      },
      "unit": " USD",
      "type": "max",
      "control": sliderValue},
    "HeelStack": {
      "value": 2,
      "required": false,
      "sliderValues": {
        "values": [
          {"name": "Minimal", "range": {"min": "0", "max": "5"}},
          {"name": "Low", "range": {"min": "5", "max": "10"}},
          {"name": "Medium", "range": {"min": "10", "max": "30"}},
          {"name": "High", "range": {"min": "30", "max": "50"}},
          {"name": "Very High", "range": {"min": "50", "max": "150"}}
          ]
      },
      "unit": "mm",
      "type": "range",
      "control": sliderValue}
  })

  console.log(finderCriteria)


  if (loading) return(<p> loading </p>)
  if (error) console.log(error)

  console.log(data)

  return (
    <div> 
      <div className='filter-panel'>
        {Object.keys(finderCriteria).map(criteria => {
          let criteriaInfo = finderCriteria[criteria]
          if (criteriaInfo.control === sliderValue) {
            return(
              <Slider name={criteria} finderCriteria={finderCriteria} setFinderCriteria={setFinderCriteria} />
            )
          }
        })}
      </div>
      <div className='result-panel'>
          {Object.keys(finderCriteria).map(criteria => {
            if (finderCriteria[criteria]["control"] === dropDownValue) {
              return(
                <DropDownSelect data={data} criteria={criteria} finderCriteria={finderCriteria} setFinderCriteria={setFinderCriteria} />)
          }})}
      </div>
      <div className='results'>
        <ShoeFinderResults shoeData={data} finderCriteria={finderCriteria} finderResults={finderResults} setFinderResults={setFinderResults} sliderValue={sliderValue} dropDownValue={dropDownValue} />
      </div>
    </div>
  )
}

export default ShoeFinder