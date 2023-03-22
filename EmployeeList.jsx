import React from 'react'
import EmployeeItem from './EmployeeItem'

function EmployeeList(props) {
  console.log(props)
  return (
    <div className="empList">
         <EmployeeItem eachEmp={props.emps.James}/>
         <EmployeeItem eachEmp={props.emps.Julie}/>
         <EmployeeItem eachEmp={props.emps.Eugene}/>
         <EmployeeItem eachEmp={props.emps.John}/>
         <EmployeeItem eachEmp={props.emps.Ray}/>
      
   
    </div>
  )
}

export default EmployeeList