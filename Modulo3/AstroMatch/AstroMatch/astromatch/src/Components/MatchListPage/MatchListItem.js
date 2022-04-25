import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
    display:flex;
    align-items:center;
    border-bottom: 1px solid #a1887f;

    :hover {
        background-color:#bdbdbd;
    }
`
const Avatar = styled.img`
    border-radius: 50%;
    margin-right: 10px;
    width: 30px;
    height: 30px;

       
  @media screen and (max-width: 500px) {
    padding-left: 30px;
    margin: 10px;

    border-radius: 50%;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    
  }
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { };
    @media only screen 
    and (device-width : 414px) 
    and (device-height : 736px) 
    and (-webkit-device-pixel-ratio : 3) { };
    @media only screen 
    and (device-width : 360px) 
    and (device-height : 640px) 
    and (-webkit-device-pixel-ratio : 3) { };
`


function MatchListItem(props) {
    const profile = props.profile
    return (
        <ListItemContainer>
            <Avatar src={profile.photo} />
            <p>{profile.name} </p>
        </ListItemContainer>
    )

}

export default MatchListItem