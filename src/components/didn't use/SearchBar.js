import {useRef} from 'react'
import employees from '../data'

export default function SearchBar({setEmployees}) {
  const input = useRef(null)

  
  const handleChange = ()=>{
    const filtered = employees.filter((employee) => {
      return employee.name
      .toLowerCase()
      .includes(input.current.value.toLowerCase())
    })
    setEmployees(filtered)
  }


  return (
    <div className='search-bar'>
      <input 
      type="text" 
      onChange={handleChange}
      ref={input}
      placeholder="Search ..."/>
    </div>
  )
}
