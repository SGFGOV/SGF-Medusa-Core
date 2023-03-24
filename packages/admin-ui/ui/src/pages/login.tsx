import { useAdminGetSession } from "medusa-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginCard from "../components/organisms/login-card"
import ResetTokenCard from "../components/organisms/reset-token-card"
import SEO from "../components/seo"
import PublicLayout from "../components/templates/login-layout"
import { MEDUSA_USER_LOGIN } from "../constants/medusa-backend-url"

const LoginPage = () => {
  const [resetPassword, setResetPassword] = useState(false)

  const { user } = useAdminGetSession()

  const navigate = useNavigate()

  // Redirect to dashboard if user is logged in
  useEffect(() => {
    if (user) {
      navigate("/")
    }
    else{
      
        const timeout = setTimeout(() => {
          window.location.replace(MEDUSA_USER_LOGIN)
        }, 3000)
    
        return () => clearTimeout(timeout)
        
      }
      
      
    
  }, [user, navigate])

  useEffect(() => {
    if (window.location.search.includes("reset-password")) {
      setResetPassword(true)
    }
  }, [])

  const showLogin = () => {
    setResetPassword(false)
    navigate("/login", { replace: true })
  }

  const showResetPassword = () => {
    setResetPassword(true)
  }
  if(!MEDUSA_USER_LOGIN){
  return (
    <PublicLayout>
      <SEO title="Login" />

      {resetPassword ? (
        <ResetTokenCard goBack={showLogin} />
      ) : (
        <LoginCard toResetPassword={showResetPassword} />
      )}
    </PublicLayout>
  )
      }
      else{ 
  return (
    <PublicLayout>
      <>Please wait redirecting to the user login page</>
    </PublicLayout>)
      }
}

export default LoginPage
