import React from 'react'

const Slider = ({ name, finderCriteria, setFinderCriteria }) => {

  let criteriaOption = finderCriteria[name]
  let criteriaValues = criteriaOption['sliderValues']['values']
  let currentValue = criteriaValues[criteriaOption['value']]
  let currentValueRange = currentValue['range']
  let sliderValue = `${currentValue['name']} (${currentValueRange['min']}-${currentValueRange['max']}${criteriaOption['unit']})`

  const handleInputChange = event => {
    let valueIndex = parseInt(event.target.value)
    let updatedFinderCriteria = {...finderCriteria, [name]: {...criteriaOption, "value": valueIndex}}
    setFinderCriteria(updatedFinderCriteria)
  }

  return (
    <div>
      <div>
        <label>{name}</label>
        <p>{sliderValue}</p>
      </div>
      <div>
        <input type="range" id={`${name}-slider`} name={`${name}-slider`} min="0" max={criteriaValues.length-1} value={criteriaOption['value']} onChange={handleInputChange} />
      </div>
    </div>
  )
}

export default Slider