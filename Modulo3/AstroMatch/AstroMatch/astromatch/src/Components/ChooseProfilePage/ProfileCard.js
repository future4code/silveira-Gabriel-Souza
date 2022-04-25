import React from 'react';
import styled from 'styled-components'

const ProfileCardContainer = styled.div`
    margin: 16px;
    box-shadow: 2px 2px 3px 1px #bcaaa4;
    border-radius: 1px;
`
const ProfilePicture = styled.img`
    width:100%;
    display: block;
    max-height: 310px;

`
const ProfileInfo = styled.div`
    padding: 16px;
`

function ProfileCard(props) {
   const profile = props.profile
   return (
     <ProfileCardContainer>
        <ProfilePicture src={profile.photo}/>
     <ProfileInfo>    
        <p>{profile.name},{profile.age}</p>
        <p>{profile.bio}</p>
     </ProfileInfo>
     </ProfileCardContainer>
    )

}



export default ProfileCard