import Header from "./Header";
import { useParams, Link } from "react-router-dom";
import employees from "../data";

export default function EmployeePage(props) {
  const { id } = useParams();
  console.log(id);

  const currentEmployee = employees.find((employee) => {
    return id === employee.id.toString();
  });

  console.log(currentEmployee);

  return (
    <div>
      {/* Display the current employee data */}
      {currentEmployee && (
        <div>
          <Header text="Employee" />
          <Link to='/employees'>Directory</Link>
          <h1>{currentEmployee.name}</h1>
          <h3>{currentEmployee.role}</h3>
          <img src={currentEmployee.img} alt={currentEmployee.name} />
        </div>
      )}
    </div>
  );
}