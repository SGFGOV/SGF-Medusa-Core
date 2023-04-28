import { useState } from "react"

import { STRAPI_URL as strapiUrl } from "../../constants/medusa-backend-url"
import api from "../../services/api"
const authenticatedStrapiUrl = `${strapiUrl}/strapi-plugin-sso/medusa`

const StrapiCms = ({ reload }:{reload:boolean}) => {
  const [strapiFrameState, setStrapiFrameState] = useState<string>(
    reload ? "true" : "false"
  )
  
  api.auth.session().then(async (session) => {
    if (session) {
      await api.strapi.login()
      setStrapiFrameState(session.data.user.id)
    }
  })
  return (
    <iframe
      src={authenticatedStrapiUrl}
      key={strapiFrameState?.toString()}
      width="100%"
      height="100%"
      sandbox="allow-scripts allow-modals allow-forms allow-same-origin allow-scripts"
    ></iframe>
  )
}
export default StrapiCms
