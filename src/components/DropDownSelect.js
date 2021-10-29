import React from 'react'
import FilterCheckbox from './FilterCheckbox'

const DropDownSelect = ({data, criteria, finderCriteria, setFinderCriteria}) => {

  const handleInputChange = event => {
    let updatedFinderCriteria = {...finderCriteria, [criteria]: {...finderCriteria[criteria], "value": event.target.value}}
    setFinderCriteria(updatedFinderCriteria)
  }

  const getDropDownOptions = () => {
    return(data.reduce((options, shoe) => {
      if (!options.includes(shoe[criteria])) {
        options.push(shoe[criteria])
      }
      return(options)
    }, []))
  }

  return(
    <div>
      <div>
        <label>{criteria}</label>
      </div>
      <FilterCheckbox name={criteria} finderCriteria={finderCriteria} setFinderCriteria={setFinderCriteria} />
      <div>
        <select onClick={handleInputChange} name={criteria} id={criteria}>{getDropDownOptions(criteria).map(option => {
          return(<option value={option}>{(option).toString()}</option>
        )})}</select>
      </div>
    </div>
  )
}

export default DropDownSelect
