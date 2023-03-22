import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';
import EmployeeItem from './components/EmployeeItem';
import EmployeePage from './components/EmployeePage';
import employees from './models/employees';
import titles from './models/titles';


function App() {
  return (
    <div className="App">
        <HomePage workers={employees} hpTitle={titles.homepage}/>
        <EmployeePage workers={employees} epTitle={titles.epage}/>
    </div>
  );
}

export default App;
