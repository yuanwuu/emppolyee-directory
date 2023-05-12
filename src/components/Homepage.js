import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from './EmployeeList'


export default function Homepage ({
    employees,
    setSelectedEmployee,
    setEmployees,
}) {
    return (
        <div>
            <Header text="Empolyee Directory"/>
            <SearchBar 
                setEmployees={setEmployees}
                employees={employees}
            />
            <EmployeeList 
            employees={employees}
            setSelectedEmployee={setSelectedEmployee}
            />
          
        </div>
    )
} 

