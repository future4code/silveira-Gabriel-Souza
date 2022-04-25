import React, { useEffect, useState } from 'react';
import ProfileCard from '../ChooseProfilePage/ProfileCard'
import ChooseButtons from '../ChooseProfilePage/ChooseButtons';
import axios from 'axios';

function ChooseProfilePage() {
    const [profileToChoose, setProfileToChoose] = useState(undefined)
    
    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel-Souza/person')
        .then(response => {
            setProfileToChoose(response.data.profile)
        })
    }

    const chooseProfile = (choice) => {
        const body = {
            choice: choice, 
            id: profileToChoose.id
      } 
      setProfileToChoose(undefined)

            axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel-Souza/choose-person', body)
            .then(response => {
             getProfileToChoose()
            })
    }
   

        useEffect (() => {
        getProfileToChoose()
    }, []);

    const onClickNo = () => {
        chooseProfile(false)
  }
    const onClickYes = () => {
        chooseProfile(true)
    }
  
    
    return (
        <div>
            { profileToChoose ?
           ( <>
               <ProfileCard profile={profileToChoose}/> 
               <ChooseButtons
                onClickNo={onClickNo} onClickYes={onClickYes}/>
            </>) :<p>Carregando...</p>
            }
        </div>
    )
}



export default ChooseProfilePage