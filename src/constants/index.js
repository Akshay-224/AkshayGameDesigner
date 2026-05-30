import { asset } from '../utils.js';

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
    {
        id: 5,
        name: 'Resume',
        href: asset('/assets/AkshaySA_GameDesign_Resume.pdf'),
        target: '_blank',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: asset('assets/review1.png'),
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: asset('assets/review2.png'),
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: asset('assets/review3.png'),
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: asset('assets/review4.png'),
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Infinity Asylum',
        desc: 'Infinity Asylum is a PC psychological survival horror game centered around light-based gameplay and environmental tension. Players navigate an infinite, ever-changing asylum where statue enemies stalk them in darkness and reality constantly shifts through looping hallways and teleporting rooms. The narrative follows a journalist searching for his missing friend, only to uncover a deeper conspiracy involving human experimentation, betrayal, and a doctor’s spirit seeking escape through possession.',
        subdesc:
            `• Designed a psychological-survival horror game set inside an infinite, looping asylum
        • Created environment-driven gameplay focused on darkness, limited visibility, and spatial disorientation
        • Developed light-based mechanics where enemies freeze under light and move in darkness
        • Worked on all the Game Design, Combat Design, Level Design, Environment Design`,
        href: 'https://drive.google.com/file/d/1_lVOX4vEffk2KZkRiukC2TC9mUEtKk_r/view?usp=sharing',
        texture: 'https://res.cloudinary.com/demuxwbk2/video/upload/v1780164789/InfinityAsylumDemo_erka4t.mp4',
        logo: asset('/assets/InfinityAsylumIcon.png'),
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: asset('/assets/spotlight1.png'),
        tags: [
            {
                id: 1,
                name: 'UnrealEngine',
                path: asset('/assets/UnrealEngineLogo.png'),
            },
            {
                id: 2,
                name: 'Blender',
                path: asset('assets/BlenderLogo.png'),
            },
            {
                id: 3,
                name: 'SubstancePainter',
                path: asset('/assets/SubstanceLogo.png'),
            },
            {
                id: 4,
                name: 'Photoshop',
                path: asset('/assets/PhotoshopLogo.png'),
            },
        ],
    },
    {
        title: 'Serenikitty',
        desc: 'A cozy yet fast-paced endless runner where players transform between human and cat forms to overcome obstacles and progress through atmospheric environments.',
        subdesc:
            `• Designed and developed a hypercasual endless runner centered around transformation-based gameplay
        • Created a mechanic where players switch between girl and cat forms to navigate obstacles differently
        • Designed gameplay focused on balancing cozy atmosphere with fast-paced movement and reactions
        • Developed the complete game independently, including gameplay design, art direction, UI, and implementation in Unity`,
        href: 'https://drive.google.com/file/d/1pVhbdZLANDlqM5tdTT2JX_qsX_B7lWsO/view?usp=sharing',
        texture: 'https://res.cloudinary.com/demuxwbk2/video/upload/v1780164773/SerenikittyDemo_ukqhzs.mp4',
        logo: asset('/assets/SerenikittyIcon.png'),
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: asset('/assets/spotlight2.png'),
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: asset('/assets/UnityLogo.png'),
            },
            {
                id: 2,
                name: 'Photoshop',
                path: asset('assets/PhotoshopLogo.png'),
            },
            {
                id: 3,
                name: 'Figma',
                path: asset('/assets/FigmaLogo.png'),
            },

        ],
    },
    {
        title: 'Pressure Cookers',
        desc: 'A chaotic arcade cooking experience where players fulfill orders using unique ingredient-launching gameplay mechanics.',
        subdesc:
            `• Collaborated on a fast-paced arcade cooking game focused on fulfilling customer orders through ingredient-launching combat mechanics
            • Contributed to gameplay ideation, core mechanics design, 3D asset creation and overall gameplay flow
            • Designed UI/UX elements and visual presentation to support readability and player interaction
            • Worked within a team environment during rapid game development and iteration`,
        href: 'https://drive.google.com/file/d/1lx99-0COmhXVl-KL0N877Wp0O_bW5Uld/view?usp=sharing',
        texture: 'https://res.cloudinary.com/demuxwbk2/video/upload/v1780164788/PressureCookersDemo_zzqa61.mp4',
        logo: asset('/assets/project-logo3.png'),
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: asset('/assets/spotlight3.png'),
        tags: [
            {
                id: 1,
                name: 'UnrealEngine',
                path: asset('/assets/UnrealEngineLogo.png'),
            },
            {
                id: 2,
                name: 'Blender',
                path: asset('assets/BlenderLogo.png'),
            },
            {
                id: 3,
                name: 'SubstancePainter',
                path: asset('/assets/SubstanceLogo.png'),
            },
            {
                id: 4,
                name: 'Photoshop',
                path: asset('/assets/PhotoshopLogo.png'),
            },
        ],
    },
];


export const myProjects2 = [
    {
        title: 'Advanced Enemy AI System',
        desc: 'A modular and scalable combat AI framework built in Unreal Engine featuring reusable enemy systems for melee, ranged, mage, and boss archetypes with advanced combat behaviors, perception systems, and extensible AAA-style encounter design.',
        subdesc:
            `• Developed a scalable and reusable enemy AI framework for action-combat gameplay in Unreal Engine
            • Created a modular base enemy system allowing multiple enemy archetypes to be easily extended and customized
            • Designed melee, ranged, mage, and boss enemy behaviors featuring attacks, blocking, teleportation, perception, and damage response systems
            • Built the framework to support rapid enemy creation, encounter design, and scalable combat systems inspired by AAA-style gameplay experiences`,
        href: 'https://drive.google.com/drive/folders/1rYA6wxJzl0SbvQ-f8ImgbZ4UyecrixdD?usp=sharing',
        texture: 'https://res.cloudinary.com/demuxwbk2/video/upload/v1780164784/SmartEnemyAI_QuickMontage_usr21u.mp4',
        logo: asset('/assets/SmartEnemyIcon.png'),
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: asset('/assets/spotlight1.png'),
        tags: [
            {
                id: 1,
                name: 'UnrealEngine',
                path: asset('/assets/UnrealEngineLogo.png'),
            },
            {
                id: 2,
                name: 'Blender',
                path: asset('assets/BlenderLogo.png'),
            },
        ],
    },
    {
        title: 'RPG Gameplay Ability System Framework',
        desc: 'A scalable and reusable RPG gameplay framework built in Unreal Engine using the Gameplay Ability System (GAS), featuring modular abilities, weapon systems, talent progression, status effects, and extensible character combat architecture.',
        subdesc:
            `• Developed a scalable RPG gameplay framework in Unreal Engine using Gameplay Abilities, Gameplay Effects, Attributes, and Gameplay Tags
                • Created a modular base character architecture supporting reusable player and enemy systems with customizable combat attributes such as health, stamina, armor, and strength
                • Built a dynamic weapon management system handling weapon equipping, unequipping, and weapon-specific ability sets for melee and ranged combat
                • Designed reusable and extensible combat abilities allowing rapid creation and scaling of gameplay mechanics across multiple character archetypes
                • Implemented a fully functional talent tree system enabling player progression and weapon-specific upgrades through talent point allocation
                • Created customizable status effect systems including burn and freeze mechanics adaptable to different gameplay requirements
                • Developed adaptive enemy combat widgets and gameplay systems that respond dynamically to currently equipped weapons and combat states`,
        href: 'https://drive.google.com/file/d/1fCXhF838qlpLVHrFbLE5QhsgdIW9TJcX/view?usp=sharing',
        texture: 'https://res.cloudinary.com/demuxwbk2/video/upload/v1780164784/RPGGameplayAbilitySystemFramework_dze20j.mp4',
        logo: asset('/assets/GASIcon.png'),
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: asset('/assets/spotlight2.png'),
        tags: [
            {
                id: 1,
                name: 'UnrealEngine',
                path: asset('/assets/UnrealEngineLogo.png'),
            },
            {
                id: 2,
                name: 'C++',
                path: asset('assets/C++Icon.png'),
            },
            {
                id: 3,
                name: 'Blender',
                path: asset('/assets/BlenderLogo.png'),
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
        GameboyPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        XboxControllerPosition:  isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        EnvironmentPosition: isSmall ? [-7, -5, 0] : isMobile ? [-15, -5, 0] : isTablet ? [-9, -5, 0] : [-12, -5.5, 0],
        SwordPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Ojasneuro',
        pos: 'Game Design / Art Intern',
        duration: 'Jan 2026 – May 2026',
        title: `• Designing concept art and moodboards for multi-chapter interactive mobile experiences
                • Creating 2D and 3D assets to support visual development and gameplay presentation
                • Supporting early-stage product exploration and creative direction
                • Developing game concepts and GDDs for relaxation-focused mobile game experiences`,
        icon: asset('/assets/OjasNeuro.png'),
        animation: 'snake',
    },
    {
        id: 2,
        name: 'Artion Interactive',
        pos: 'Game Design Intern',
        duration: 'Jul 2025 - Ocr 2025',
        title: `• Designing concept art and moodboards for multi-chapter interactive mobile experiences
                • Creating 2D and 3D assets to support visual development and gameplay presentation
                • Supporting early-stage product exploration and creative direction
                • Developing game concepts and GDDs for relaxation-focused mobile game experiences`,
        icon: asset('/assets/arteon_interactive_logo.png'),
        animation: 'wave',
    },

];