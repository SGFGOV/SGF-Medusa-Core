import StrapiCms from "./strapi-cms"
import { Route, Routes } from "react-router-dom"
const Cms = () => {
  return (
    <Routes>
      <Route index  element={<StrapiCms reload={false} />} />
    </Routes>
  )
}

export default Cms
