// React Router Dom
import { Outlet } from "react-router-dom"
import { SiteHeader } from "../components/header/siteHeader"

export const RootLayout = () => {
  return (
    <div>
      <header>
        <SiteHeader></SiteHeader>
      </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
