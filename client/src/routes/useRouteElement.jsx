import { useRoutes } from 'react-router-dom'
import Home from '../pages/home'
import Projects from '../pages/projects'
import UserLayout from '../layouts/UserLayout'

const useRouteElement = () => {
  const routes = [
    {
      path: '/',
      element: <UserLayout />,
      children: [
        { index: true, path: '/dashboard', element: <Home /> },
        {
          path: '/project',
          element: <Projects />,
        },
      ],
    },
    {
      path: '*',
      // element: <NotFound />
    },
  ]

  return useRoutes(routes)
}

export default useRouteElement
