import { useState } from "react"
import api from "../../../../../../../SGF-MedusaAdmin/src/services/api"
import { strapiUrl } from "../../../../../../../SGF-MedusaAdmin/src/services/config"
const authenticatedStrapiUrl = `${strapiUrl}/strapi-plugin-sso/medusa`

const StrapiCms = ({ reload }) => {
  const [strapiFrameState, setStrapiFrameState] = useState<string>(
    reload ? "true" : "false"
  )
  // setStrapiFrameState("")
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
