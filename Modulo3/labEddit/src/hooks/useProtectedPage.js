// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { goToLoginPage } from '../routes/Coodinator'

const useProtectedPage = () => {
  // const history = useHistory()
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
        goToLoginPage(navigate)
    }
  }, [navigate])
}

export default useProtectedPage
