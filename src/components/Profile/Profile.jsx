import React from 'react';
import s from './Profile.module.css';
import photo from '../../assets/images/userpic.png'


const Profile = (props) => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img  src={photo} />
            </div>
            <div> some text</div>
        </div>
    );
}


export default Profile;