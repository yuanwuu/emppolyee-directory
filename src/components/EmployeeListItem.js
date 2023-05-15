import employeeData from '../data'
import { useParams } from 'react-router-dom'

export default function EmployeeListItem (props) {

  const {id} = useParams()
  console.log(id)

  const currentEmpolyee = employeeData.find((empolyee)=>{
    return id === empolyee.id
  })
    
    return (
        <div className='employeelistitem'>
      
          <img className='pic' src={currentEmpolyee.img} />
            <div>
              <h3>{currentEmpolyee.name}</h3>
              <h6>{currentEmpolyee.role}</h6>
            </div>

        </div>
    )
}