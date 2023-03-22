import React from 'react'
import Header from './Header'
import titles from '../models/titles'

function EmployeePage(props) {
  return (
    <div className="employeePage">
        <Header  titleProp={props.epTitle}/>

        {/* console.log({emps}) */}
    </div>
  )
}

export default EmployeePage