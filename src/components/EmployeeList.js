import EmployeeListItem from "./EmployeeListItem";
// import employees from "../data";
import EmployeePage from "./EmployeePage";
import {Link, Routes, Route} from 'react-router-dom'

export default function EmployeeList({employees,setSelectedEmployee}) {

    const handleClick = (id) => {
        setSelectedEmployee(employees.find((employee) => employee.id === id));
      };

  return (
    <div className="employee-list">

      <Routes>
        <Route path='/employees/' element={<EmployeePage />}/>
      </Routes>

      {/* {employees.map((employee, idx) => {
        return (
          <EmployeeListItem
          key={idx}
          {...employee}
          handleClick={handleClick}
          />
          );
        })} */}

        {employees.map((employee) => (
          <Link key={employee.id} to={`/employees/${employee.id}`}>
            <EmployeeListItem
              name={employee.name}
              role={employee.role}
              img={employee.img}
              id={employee.id}
              handleClick={handleClick}
            />
          </Link>
      ))}
      
    </div>
  );

  
}
