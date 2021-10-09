import react from '../../assets/react.png';
import node from '../../assets/node.png';
import js from '../../assets/js.png';
import redux from '../../assets/redux.jpg';
import bootstrap from '../../assets/bootstrap.png';
import php from '../../assets/php.png';

export const THEMES = {
    'react' : {
        backgroundImage: react,
        linearGradient: createLinearGradient('#61dafb', '#222222'),
        primaryColor: '#61dafb',
        color: '#222222'
    },
    'bootstrap':{
        backgroundImage: bootstrap,
        linearGradient: createLinearGradient('#61dafb', '#0d1cd1'),
        primaryColor: '#0d1cd1',
        color: '#0d1cd1'
    },
    'php':{
        backgroundImage: php,
        linearGradient: createLinearGradient('#61dafb', '#222222'),
        primaryColor: '#61dafb',
        color: '#0d1cd1'
    },
    'node': {
        backgroundImage: node,
        linearGradient: createLinearGradient('#80BD01', '#333333'),
        primaryColor: '#333333',
        color: '#80BD01'
    },
    'javascript': {
        backgroundImage: js,
        linearGradient: createLinearGradient('#F7E018', '#000000'),
        primaryColor: '#F7E018',
        color: '#000000'
    },
    'redux': {
        backgroundImage: redux,
        linearGradient: createLinearGradient('#764ABD', '#1E1E1E'),
        primaryColor: '#764ABD',
        color: '#1E1E1E'
    },
}

function createLinearGradient(color1, color2) {
    return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
