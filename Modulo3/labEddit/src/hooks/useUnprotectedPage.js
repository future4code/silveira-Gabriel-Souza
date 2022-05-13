import {useNavigate} from "react-router-dom";
// import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToFeedPage } from '../routes/Coodinator'

const useUnprotectedPage = () => {
  // const history = useHistory()
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToFeedPage(navigate)
    }
  }, [navigate])
}

export default useUnprotectedPage
