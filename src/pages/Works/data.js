import React from 'react';
import react_project_1 from '../../assets/react_project_1.jpg';
import react_project_2 from '../../assets/react_project_2.jpg';
import react_project_3 from '../../assets/react_project_3.jpg';
import react_project_4 from '../../assets/raect_project_4.jpg';

export const projects = [
    {
        title: 'React Portfolio',
        images: [ react_project_1,
                react_project_2
        ],
        sourceCodeLink: 'https://github.com/nasim992/react-portfolio',
        demoLink: 'https://portfolio-nasim92.netlify.app/',
        type: 'react'
    },
    {
        title: 'React Ecommerce App With Firebase',
        images: [
            react_project_3
        ],
        sourceCodeLink: 'https://github.com/Nasim992/e-commerce-simple',
        demoLink: 'https://e-commerce-simple-c748d.web.app/shop',
        type: 'react'
    },
    {
        title: 'Company Portfolio Site',
        images: [
            react_project_4
        ],
        demoLink: 'https://reconnectsoft.com/',
        type: 'react'
    },
]
