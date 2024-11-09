import { Outlet } from "react-router-dom"




function CommonLayout() {
  return (
    <>
    <div>Common Content </div>
    <Outlet />
    </>
  )
}

export default CommonLayout;