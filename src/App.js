import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import mainRoutes from "./router"
import { Header } from './components'

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Router>
      <Header />
        <Routes>
          {mainRoutes.map((routeItem, idx) => (
            <Route
              key={idx}
              path={routeItem.path}
              element={<routeItem.component />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  )
}
export default AppLayout
