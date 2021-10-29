import React from 'react'
import ShoeFinder from '../components/ShoeFinder'

const ShoeFinderPage = () => {

  return (
    <div>
      <div align='center' style={{ marginTop: '30px'}}>
        <h1>Running Shoe Finder</h1>
      </div>
      <div style={{ padding: '30px'}}>
        <ShoeFinder />
      </div>
    </div>
  )
}

export default ShoeFinderPage