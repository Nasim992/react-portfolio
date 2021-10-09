import React, { useContext } from 'react';
import './index.scss';
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
    const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } = useContext(ThemeContext);

    function handleMouseEnter(e) {
        const type = e.nativeEvent.target.id;
        if (type) {
            changeTheme(type)
        }
    }

    return (
        <div className="skills">
            <h6>Skills</h6>
            <ul onMouseEnter={stopThemeChangeTimer}
                onMouseLeave={startThemeChangeTimer}
                onMouseOver={handleMouseEnter} >
                <li id="react" >React</li>
                <li id="bootstrap">Bootstrap</li>
                <li id="redux">React-Redux</li>
                <li id="node">Node Js</li>
                <li id="javascript">JavaScript</li>
                <li id="php">PHP</li>
            </ul>
        </div>
    );
};

export default Skills;
