import { createRoot } from 'react-dom/client'
import  { routes } from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
)
