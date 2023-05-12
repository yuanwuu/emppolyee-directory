
import Header from "./Header";

export default function EmployeePage({text,employee}) {
    const loaded = () => {
        return (
          <div
            className="employee-page"
          >
            <Header text="Employee Page" />
            <img src={employee.img} alt={employee.name} className="profile-img" />
            <div className="profile-details">
              <h2 className="profile-name">{employee.name}</h2>
              <p className="profile-position">{employee.role}</p>
            </div>
          </div>
        );
      };
    
      const loading = () => {
        return (
          <div className="employee-page">
            <h2>No Employee Selected</h2>
          </div>
        );
      };
    
      return employee ? loaded() : loading();
}
