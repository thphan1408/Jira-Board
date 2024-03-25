import useRouteElement from './routes/useRouteElement'

function App() {
  const routeElement = useRouteElement()
  return <>{routeElement}</>
}

export default App
