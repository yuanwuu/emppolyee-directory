import EmployeeListItem from "./EmployeeListItem";
import employees from "../data";

export default function EmployeeList({employees,setSelectedEmployee}) {

    const handleClick = (id) => {
        setSelectedEmployee(employees.find((employee) => employee.id === id));
      };

  return (
    <div className="employee-list">
      {employees.map((employee, idx) => {
        return (
          <EmployeeListItem
            key={idx}
            {...employee}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );

  
}
