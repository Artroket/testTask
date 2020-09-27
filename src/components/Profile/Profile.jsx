import React, { useEffect } from 'react';
import s from './Profile.module.css';
import photo from '../../assets/images/userpic.png'
import { useDispatch } from 'react-redux';
import { changePath } from '../../redux/path-reducer';


const Profile = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(props.path);
        dispatch(changePath(props.path));
    }, [])

    return (
        <div className={s.container}>
            <div className={s.contentContainer}>
                    <img  src={photo} />
                <div className={s.topPart}>
                    <div className={s.dividerDesktop}/>
                    <div className={s.nameInfo}> 
                        <p className={s.name}>Tarasenko Artem</p>
                        <p className={s.position}>Junior React developer</p>
                        <div className={s.dividerMobile}/>
                    </div>
                </div>
                <div className={s.about} >
                    <p className={s.subtitle}>About me</p>
                    <p className={s.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet arcu ultrices, viverra massa consectetur, tempus turpis. Fusce ornare sem in mi laoreet ultricies. Sed varius tincidunt orci, vestibulum faucibus dolor aliquam sed. Praesent congue diam ac diam gravida vehicula. Nulla facilisi. Nulla facilisi. Mauris vitae maximus ex. Nulla eget urna libero</p>
                </div>
            </div>
        </div>
    );
}


export default Profile;