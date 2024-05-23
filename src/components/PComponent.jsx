import React from 'react'

const PComponent = ({ base64Image }) => {
  return (
    <div>
      <h2>Forecast Components</h2>
      <img src={`data:image/png;base64, ${base64Image}`} alt="Forecast Components" />
    </div>
  )
}

export default PComponent