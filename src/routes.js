import { Login } from './Component/Login';
import { Main } from './Component/Main';
import { Dashboard } from './Component/Dashboard';
import { Profile } from './Component/profile';
import { DataContext } from './DataContext';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
export const router=createBrowserRouter([
    {
      path:'/login',
      element: (<Login/>)
    },
    {
      path:'/',
      element:(<Main/>),
      children:[
        {
          path:'/dashboard',
          element:(<Dashboard/>)
        },
        {
          path:'/profile',
          element:(<Profile/>)
        }
      ]
  
    }
  ])