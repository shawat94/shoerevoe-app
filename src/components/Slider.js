import React from 'react'

const Slider = ({ name, max, step, finderCriteria, handleSliderChange}) => {

  return (
    <div>
      <input type="range" id={`${name}-slider`} name={`${name}-slider`} min="0" max={max} step={step} value={finderCriteria[name]['value']} defaultValue="0" onChange={handleSliderChange(name)} />
      <label for={`${name}-slider`}>{`${name}: ${finderCriteria[name]["value"]}`}</label>
    </div>
  )
}

export default Slider