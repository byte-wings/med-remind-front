// React Router Dom
import { Outlet } from "react-router-dom"

export const RootLayout = () => {
  return (
    <div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
