import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const routerNavigate = useNavigate()
  const location = useLocation()

  return (
    <div className="Header py-2">
        <h2 className="text-lg text-blue-500 font-bold pb-2 px-6 border-b border-gray-200 mb-4" onClick={() => routerNavigate(`/`)}>Podcaster</h2>
        {location?.pathname !== '/' && <p className="cursor-pointer px-6" onClick={() => routerNavigate(-1)}>Go back</p>}
    </div>
  )
}
export default Header
