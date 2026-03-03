import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About';
import Resume from './pages/Resume';
import ProjectLayout from './layouts/ProjectLayout'


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
    }
  ]
}]);

export default function App() {
  return <RouterProvider router={router} />
}