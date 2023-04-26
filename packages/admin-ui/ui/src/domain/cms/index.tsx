import StrapiCms from "./strapi-cms"
import { Route, Routes } from "react-router-dom"
const Cms = () => {
  return (
    <Routes>
      <Route path="/" element={<StrapiCms reload={false} />} />
    </Routes>
  )
}

export default Cms
