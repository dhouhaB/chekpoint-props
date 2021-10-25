import React from 'react'
import PropTypes from 'prop-types'
import PhotoProfile from './PhotoProfile'
const Profile = (props) => {

    return (
        <div>
        <PhotoProfile>
        <img src={props.img} alt="img"/>
        </PhotoProfile>
       <h1  style={{ color: "pink", fontSize: 60 , textDecoration : "underline"
}}>{props.fullName}</h1>     
       <p style={{textDecoration : "underline" , fontSize: 20}} >{props.bio}</p>
       <p style={{textDecoration : "underline" , fontSize: 20}} >{props.profession}</p>
      
        </div>
    )
}
Profile.defaultProps=
{
    fullName: "no data to show",
    bio: "no data to show",
    profession: "no data to show"
}

Profile.propTypes=
{
fullName:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string,

}

export default Profile
