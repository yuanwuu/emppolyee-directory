import Header from "./Header";
import { Route, Routes , Link} from "react-router-dom";
import empolyees from '../data'
import EmployeePage from '../components/EmployeePage'

export default function Homepage (

) {
    return (
        <div>
            
            <Header text="Empolyee Directory"/>
            {empolyees.map((employee) => {
                return (
                    <li key={employee.id}> 
                    <Link to={`/employees/${employee.id}`}>
                        <h1>{employee.name}</h1>
                        <img src={employee.img} />
                    </Link>
                    </li>
                )
            
            })}
            <Routes>
                <Route path="/employees/:id" element={<EmployeePage />} />
            </Routes>
          
        </div>
    )
} 



