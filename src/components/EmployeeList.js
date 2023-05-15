import employeeData from "../data";
import { Link } from 'react-router-dom'
import { useState } from "react";

// export default function EmployeeList({employees,setSelectedEmployee}) {

//     const handleClick = (id) => {
//         setSelectedEmployee(employees.find((employee) => employee.id === id));
//       };

//   return (
//     <div className="employee-list">

//       <Routes>
//         <Route path='/employees/' element={<EmployeePage />}/>
//       </Routes>

//       {/* {employees.map((employee, idx) => {
//         return (
//           <EmployeeListItem
//           key={idx}
//           {...employee}
//           handleClick={handleClick}
//           />
//           );
//         })} */}

//         {employees.map((employee) => (
//           <Link key={employee.id} to={`/employees/${employee.id}`}>
//             <EmployeeListItem
//               name={employee.name}
//               role={employee.role}
//               img={employee.img}
//               id={employee.id}
//               handleClick={handleClick}
//             />
//           </Link>
//       ))}
      
//     </div>
//   );

  
// }

export default function EmployeeList(employees) {
  // const [employees,setEmployees] = useState(employeeData)

  return(

    <>
    
    im a employee testing
    </>
    // <div>
    //   <ul>
    //     {employeeData.map((employee) => {
    //       return (
    //         <li> 
    //           <Link to={`/employees/${employee.id}`}>
    //             {employee.name}
    //             {/* {employee.id} */}
    //           </Link>
    //         </li>
    //       )
    //     }
    //     )}
    //   </ul>
    // </div>
  )
}
