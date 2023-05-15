
import './App.css';
import Homepage from './components/Homepage';
import EmployeePage from './components/EmployeePage';
import{ Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/employees' element={<Homepage />} />
        <Route path='/employees/:id' element = {<EmployeePage />} />
      </Routes>
    </div>
  )
}