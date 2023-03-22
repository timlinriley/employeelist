import React from 'react'
import employees from '../models/employees'

function EmployeeItem(props) {
  return (
    <div className="empItem">
      
    <h3>{props.eachEmp.names}</h3>
    <h5>{props.eachEmp.title}</h5>
        </div> 
        
      
  )
}

export default EmployeeItem