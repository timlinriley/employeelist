import React from 'react'
import EmployeeItem from './EmployeeItem'
import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'
import titles from '../models/titles'


function HomePage(props) {
  return (
    <div className="homePage">
        <Header titleProp={props.hpTitle}/>
        <SearchBar />
        <EmployeeList emps={props.workers}/>
       
    </div>
  )
}

export default HomePage