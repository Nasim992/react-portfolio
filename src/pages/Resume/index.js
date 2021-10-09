import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";
import companyLogo from '../../assets/Reconnect-Logo.png';
import iubat from '../../assets/iubat.png';

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('01/10/2021', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'October 2021 - Present'}
                title={'Software Engineer'}
                company={'reconnectsoft.com'}
                logo={companyLogo}
            >
                • Work on front-end as well as Backend Technologies. <br/>
                • Develop protototype of different types of software for production.
            </ResumeItem>
            <ResumeItem
                date={'January 2021 – May 2021'}
                title={'Full-Stack Developer Intern'}
                company={'IUBAT'}
                logo={iubat}
            >
                • Develop IUBAT Review Journal Management System <br/>
                • Responsible for design and development of the web pages from sketches.
            </ResumeItem>

            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2017 – 2021'}
                title={'International University of Business Agriculture and Techlology'}
                company={'Dhaka, Bangladesh'}
                logo={iubat}
            >
                Bachelor's Degree in Computer Science and Engineering
            </ResumeItem>
        </div>
    );
};

export default Resume;
