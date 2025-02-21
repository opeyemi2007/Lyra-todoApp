import { createBrowserRouter } from 'react-router-dom'
import './styles/App.css'
import Signup from '../src/pages/auth/Signup'
import { RouterProvider } from 'react-router'
import Login from '../src/pages/auth/Login'
import Verify from './pages/Verify'
import Global from './routes/Global'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Welcome from './pages/Welcome'
import PrivateRoute from './routes/Private'


function App() {
  const routes = createBrowserRouter([
    {
      path: '/private',
      element: <PrivateRoute/>,
      children: [
        {
          path: '',
          element: <Global/>
        }
      ]
    },


    {
      path: '/home',
      element: <Global/>,
      children: [
        {
          path: '',
          element: <Home/>
        },
        {
          path: 'tasks',
          element: <Tasks/>
        },
      ]
    },


    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: "user/verify-email",
      element: <Verify />,
    },
    {
      path: "",
      element: <Welcome/>,
    }
  ])

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
