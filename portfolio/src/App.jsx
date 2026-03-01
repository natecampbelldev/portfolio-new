import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'


const router = createBrowserRouter([{
  path: '/',
  Component: RootLayout,
  children: [
    {
      index: true,
      Component: Home,
    },
    {
      path: '/about',
      Component: About,
    },
    {
      path: '/resume',
      Component: Resume
    },
    {
      path: '/projects',
      Component: ProjectLayout,
      children: [
        {
          index: true,
          component: tbd
        }
      ]
    }
  ]
}]);

export default function App() {
  return <RouterProvider router={router} />
}