import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import nasimImage from "../../assets/nasim.jpg";
// @ts-ignore
import cv from '../../assets/CV_Md.Nasim Hossain.pdf';

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img src={nasimImage} alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Md.Nasim Hossain
                </div>
                <TypedText
                  dataText={
                      [
                          'Frontend Development',
                          'Backend Development'
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    Bangladesh
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href={cv} target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:mdnasim6416@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
