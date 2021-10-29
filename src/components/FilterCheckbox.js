import React from 'react'

const FilterCheckbox = ({ name, finderCriteria, setFinderCriteria }) => {

  let criteriaOption = finderCriteria[name]

  const setRequired = event => {
    let updatedFinderCriteria = {...finderCriteria, [name]: {...criteriaOption, "required": !criteriaOption['required']}}
    setFinderCriteria(updatedFinderCriteria)
  }

  return(
    <div>
        <input id="enable-checkbox" type="checkbox" onChange={setRequired} />
        <label for="enable-checkbox">Enable Filter</label>
    </div>
  )
}

export default FilterCheckbox