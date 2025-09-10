
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import Admin from './layouts/Admin'
import UserManager from './pages/UserManager'
import Productmanager from './pages/Productmanager'
import OderManager from './pages/OderManager'
import './App.css'
import Login from './pages/Login'
import ProductsDetail from './pages/ProductsDetail'
export default function App() {
  const routers = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },{
      path :'contact',
      element: <Contact/>

    },{
      path :'/admin',
      element: <Admin/>,
      children :[
        {
          path:"user",
          element:<UserManager/>
        },{
          path:"product",
          element:<Productmanager/>
        },{
          path:"product/:id",
          element:<ProductsDetail/>
        },{
          path:"oder",
          element:<OderManager/>
        },
        
      ]
    }
    
    ,{
      path:"*",
      element:<Notfound/>
    },{
      path:"/Login",
      element:<Login/>
    }
  ])
  return (
    <div>
      react router
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
