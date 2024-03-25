import { useRoutes } from 'react-router-dom'
import DefaultLayout from '../layouts'
import Home from '../pages/home'
import Projects from '../pages/projects'

const useRouteElement = () => {
  const routes = [
    {
      path: '/',
      element: <DefaultLayout />,
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
