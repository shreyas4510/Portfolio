import { GoHomeFill } from 'react-icons/go';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { FaFolderOpen } from 'react-icons/fa';
import { RiUserStarFill } from 'react-icons/ri';
import { MdMarkEmailRead } from 'react-icons/md';
import frameworkAndLanguages from '../assets/images/framework&Languages.png';
import cloud from '../assets/images/cloud.png';
import databases from '../assets/images/databases.png';
import developmentTools from '../assets/images/developmentTools.png';
import Rasops from "../assets/images/rasops.png";

export const navbarTabs = [
    { title: "Home", icon: GoHomeFill },
    { title: "Skills", icon: RiUserStarFill },
    { title: "Projects", icon: FaFolderOpen },
    { title: "Contact me!", icon: MdMarkEmailRead }
]

export const homeName = `I'M SHREYAS DESHMUKH`;
export const homePosition = `SOFTWARE DEVELOPER`;
export const summary = `Senior Software Engineer with 4+ years of experience driving transformative software solutions across various
domains. Proven track record of delivering high-impact, maintainable code through clear, concise programming
and innovative problem-solving. Adept at leading development teams to build and scale integrated full-stack
applications, leveraging expertise in JavaScript, TypeScript, Node.js, and React.js.`

export const skills = [
    { label: 'Framework & Languages', icon: frameworkAndLanguages },
    { label: 'Cloud', icon: cloud },
    { label: 'Databases', icon: databases },
    { label: 'Development Tools', icon: developmentTools }
]

export const projects = [
    {
        title: 'Rasops',
        img: Rasops,
        gitLink: 'https://github.com/shreyas4510/Rasops',
        live: 'https://rasops.vercel.app/',
        description: 'The Hotel Management System is designed to simplify hotel operations and enhance guest experience through modern technology. It supports multiple hotels management, secure role-based access, QR code-based ordering, and real-time notifications.',
        features: [
            { label:'Role-Based Authentication', des: 'Secure and customizable access for different roles within the hotel.' },
            { label:'Multi-Hotel Management', des: 'Manage multiple hotels from a single platform, providing a unified interface for seamless operations.' },
            { label:'QR Scanner Menu Ordering', des: 'Modernize dining experiences with QR code-based menu ordering, improving convenience for guests.' },
            { label:'Live Notifications', des: 'Real-time updates for managers, cooks, and waiters to ensure smooth and efficient service using react service worker.' },
            { label:'Razorpay Integration', des: 'Simplified and secure payment and subscriptions processing through Razorpay.' },
            { label:'Statistics Dashboard', des: 'Detailed monthly, weekly, and yearly statistics to aid in decision-making and performance tracking.' },
            { label:'Online Invoicing', des: 'Generate and manage invoices online for greater efficiency and accuracy.' },
        ],
        skills: [
            'Node.js', 'Express', 'MySQL',
            'Sequelize', 'Razorpay', 'React Js',
            'Redux', 'Redux Saga', 'Bootstrap'
        ]
    }
]

export const resumeLink = 'https://drive.google.com/uc?export=download&id=1ASwS8sZ2H900e2z8upwXxMre0HtVuj1P';
export const details = {
    phoneNumber: '+91-9370806369',
    email: 'shreyasdeshmukh06@gmail.com'
}

export const links = {
    linkedln: 'https://www.linkedin.com/in/deshmukh-shreyas/',
    twitter: 'https://x.com/Shreyas4510',
    github: 'https://github.com/shreyas4510'
}
