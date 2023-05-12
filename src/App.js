import './App.css';
import employeeData from './data';
import Homepage from './components/Homepage';
import EmployeePage from './components/EmployeePage';
import { useState } from 'react';

function App() {
  const [employeeList, setEmployeeList] = useState(employeeData)
  const [selectedEmployee, setSelectedEmployee] = useState(null)

  return (
    <div className="App">
     <Homepage 
     employees = {employeeList}
     setSelectedEmployee = {setSelectedEmployee}
     setEmployees = {setEmployeeList}
     />
     <EmployeePage 
     employee={selectedEmployee}
     text="Empolyee Page"/>
     
    </div>
  );
}

export default App;
