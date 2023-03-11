import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import appRoutes from "./router"
import { Header } from './components'

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Router>
        <Routes>
          {appRoutes.map((routeItem, idx) => (
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
