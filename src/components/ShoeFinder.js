import React, { useState } from 'react'
import Slider from './Slider'
import useFetch from '../hooks/useFetch'

const ShoeFinder = () => {

  const { loading, error, data } = useFetch('http://localhost:1337/shoes')

  const sliderValue = "slider"
  const dropDownValue = "dropDown"

  const findMax = (criteria) => {
    return(data.reduce((max, shoe) => max > shoe[criteria] ? max : shoe[criteria], 0))}

  const getDropDownOptions = (criteria) => {
    return(data.reduce((options, shoe) => {
      if (!options.includes(shoe[criteria])) {
        options.push(shoe[criteria])
      }
      return(options)
    }, []))
  }

  const handleInputChange = name => event => {
    let updatedFinderCriteria = {...finderCriteria, [name]: {...finderCriteria[name], "value": event.target.value}}
    setFinderCriteria(updatedFinderCriteria)
    console.log(finderCriteria)
  }

  const [finderResults, setFinderResults] = useState([])
  const [finderCriteria, setFinderCriteria] = useState({
    "Usage": {"value": "", "control": dropDownValue},
    "Brand": {"value": "", "control": dropDownValue},
    "Plate": {"value": "", "control": dropDownValue},
    "Weight": {"value": "", "control": sliderValue},
    "Drop": {"value": "", "control": sliderValue},
    "Price": {"value": "", "control": sliderValue},
    "ForeFootStack": {"value": "", "control": sliderValue}
  })

  if (loading) return(<p> loading </p>)
  if (error) console.log(error)

  return (
    <div> 
      <div>
        {Object.keys(finderCriteria).map(criteria => {
          let criteriaInfo = finderCriteria[criteria]
          if (criteriaInfo.control == sliderValue) {
            let criteriaMax = findMax(criteria)
            let criteriaStep = criteriaMax/10
            return(
              <Slider name={criteria} handleSliderChange={(event) => handleInputChange(criteria, event)} finderCriteria={finderCriteria} setFinderCriteria={setFinderCriteria} max={criteriaMax} step={criteriaStep} />
            )
          }
        })}
      </div>
      <div>
          {Object.keys(finderCriteria).map(criteria => {
            if (finderCriteria[criteria]["control"] == dropDownValue) {
              return(
                <div>
                  <label>{criteria}</label>
                  <select onClick={(event) => handleInputChange(criteria, event)} name={criteria} id={criteria}>{getDropDownOptions(criteria).map(option => {
                    return(<option value={option}>{option}</option>
                  )})}</select>
                </div>)
          }})}
      </div>
    </div>
  )
}

export default ShoeFinder