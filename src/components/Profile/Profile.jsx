import React, { useEffect } from 'react';
import s from './Profile.module.css';
import photo from '../../assets/images/userpic.png'
import { useDispatch } from 'react-redux';
import { changePath } from '../../redux/path-reducer';


const Profile = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
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
                    <p className={s.paragraph}>I was always interested in learning new things. Studying at the Lyceum and University gave me a strong knowledge of mathematics, understanding the basics of development and teamwork. But then I realized that the things I learned at hight school/ university were not exactly new. Therefore I want to improve my skills and work on a real tasks using latest technologies. I could always easily process big amount of new materials and I'm open to try myself in any IT area. Also opportunity to receive money for my work is a great motivation for me.</p>
                </div>
            </div>
        </div>
    );
}


export default Profile;