import spiffLogo from './img/spiff-commerce-logo-dark.svg'
import ldLogo from './img/ld-logo.png'
import lazuriteLogo from './img/lazurite-logo.png'
import pyriteLogo from './img/pyrite-logo.png'
import openrct2Media from './img/rct2.webp'
import babylonMedia from './img/babylonjs.webp'
import githubLogo from './img/github-logo.png'
import linkedInLogo from './img/linked-in-logo.svg'

export interface ElementDetails {
    primary?: string
    title?: string
    time?: string
    secondary?: string
    href: string
    src?: string
    fit?: 'cover' | 'contain'
}

export const employers: ElementDetails[] = [
    {
        primary: 'Spiff Commerce',
        title: 'Technical Lead',
        time: 'Dec 2017 - Present',
        secondary:
            'Product personalization & fulfillment automation platform. I help guide many aspects of the company, including, Architecture, security, features & general management.',
        href: 'https://spiffcommerce.com/',
        src: spiffLogo,
        fit: 'contain',
    },
    {
        primary: 'Learn District',
        title: 'Junior Developer',
        time: '2014 - 2016',
        secondary:
            'Childrens Education via organised camps and workshops. I taught children how to code via Stencyl. I helped develop the UI of "The Hole Story" & an unrealeased card game called "Penguemic"',
        href: 'https://www.girlsmakegames.com/learndistrict',
        src: ldLogo,
        fit: 'contain',
    },
]

export const projects: ElementDetails[] = [
    {
        primary: 'Lazurite',
        secondary:
            'OpenGL Rendering Framework, utilizing GLFW for windowing support. I use this project as a basis for implementing various common patterns in game development.',
        href: 'https://github.com/elInfidel/lazurite',
        src: lazuriteLogo,
        fit: 'contain',
    },
    {
        primary: 'Pyrite',
        secondary:
            'A Gameboy Emulator written in C. Based on the documentation and research from the Pan Docs and work by Imran Nazar on his Javascript emulator.',
        href: 'https://github.com/elInfidel/pyrite-gbc',
        src: pyriteLogo,
        fit: 'contain',
    },
]

export const contributions: ElementDetails[] = [
    {
        primary: 'BabylonJS',
        secondary:
            "WebGL Rendering Framework, I've used this in several projects and have contributed code towards a feature called multi views.",
        href: 'https://www.babylonjs.com/',
        src: babylonMedia,
    },
    {
        primary: 'OpenRCT2',
        secondary:
            "Open Source engine implementation of the cult classic Roller Coaster Tycoon 2, One of my favorite games as a kid. I've helped fix several UI bugs over the years. Every now and then I find the drive to boot it up and help out where I can.",
        href: 'https://openrct2.org/',
        src: openrct2Media,
    },
]

export const mediaLinks: ElementDetails[] = [
    {
        primary: 'Github',
        secondary: 'More of My Code',
        href: 'https://github.com/elPixelador',
        src: githubLogo,
    },
    {
        primary: 'LinkedIn',
        secondary: 'Get in Touch',
        href: 'https://www.linkedin.com/in/liam-parker-40063648/',
        src: linkedInLogo,
    },
]
