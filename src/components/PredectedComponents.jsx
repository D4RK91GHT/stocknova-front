import React from 'react'
// import Plot from "react-plotly.js";
import PComponent from './PComponent'; // Import the component


const PredectedComponents = ({componentsData}) => {
  return (
    <PComponent base64Image={componentsData}/>
  )

}
export default PredectedComponents;