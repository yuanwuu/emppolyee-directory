import employees from '../data'
// import { Routes, Route} from 'react-router-dom'

export default function EmployeeListItem ({ name, role, img,id,handleClick}) {

    // const handleClickItem = () =>{
    //   handleClick(id)
    // }
    return (
        <div className='employeelistitem'>
          
          <img className='pic' src={img} />
            <div
            onClick={() =>{handleClick(id)}}>
              <h3>{name}</h3>
              <h6>{role}</h6>
            </div>

        </div>
    )
}