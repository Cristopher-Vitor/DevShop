import { Outlet } from 'react-router-dom'
import Header from "../Components/Header"

const DefaultLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default DefaultLayout