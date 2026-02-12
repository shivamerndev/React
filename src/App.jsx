import { Route, Routes } from 'react-router-dom'
import UseState from './concepts/Hooks/UseState'
import MapState from './concepts/Hooks/MapState'
import UseStateProject from './projects/UseStateProject'
import FormProject from './projects/FormProject'
import FormBinding from './concepts/Forms/FormBinding'
import HandleForm from "./concepts/Forms/HandleForm"

const App = () => {
  return <Routes>
    <Route path='/' element={<UseState />} />
    <Route path='/map' element={<MapState />} />
    <Route path='/p1' element={<UseStateProject />} />
    <Route path='/p2' element={<FormProject />} />
    <Route path='form/bind' element={<FormBinding/>} />
    <Route path='form/handle' element={<HandleForm/>} />
  </Routes>

}

export default App