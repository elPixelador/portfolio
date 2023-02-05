import spiffLogo from './img/spiff-commerce-logo-dark.svg'
import ldLogo from './img/ld-logo.png'
import lazuriteLogo from './img/lazurite-logo.png'
import pyriteLogo from './img/pyrite-logo.png'
import openrct2Logo from './img/openrct2-logo.png'
import babylonLogo from './img/babylon-logo.png'
import githubLogo from './img/github-logo.png'
import linkedInLogo from './img/linked-in-logo.png'

export interface ElementDetails {
    primary: string
    secondary?: string
    href: string
    src: string
}

export const employers: ElementDetails[] = [
    {
        primary: 'Learn District',
        secondary: 'Childrens Education',
        href: 'https://www.girlsmakegames.com/learndistrict',
        src: ldLogo,
    },
    {
        primary: 'Spiff Commerce',
        secondary:
            'Product personalization & fulfillment automation platform. I currently serve as technical lead and help guide many aspects of the company, including, Architecture, security, features & general management.',
        href: 'https://developer.spiffcommerce.com/',
        src: spiffLogo,
    },
]

export const projects: ElementDetails[] = [
    {
        primary: 'Lazurite',
        secondary: 'OpenGL Rendering Framework',
        href: 'https://github.com/elInfidel/lazurite',
        src: lazuriteLogo,
    },
    {
        primary: 'Pyrite',
        secondary: 'Gameboy Emulator',
        href: 'https://github.com/elInfidel/pyrite-gbc',
        src: pyriteLogo,
    },
]

export const contributions: ElementDetails[] = [
    {
        primary: 'OpenRCT2',
        secondary: 'Open Source Reimplementation',
        href: 'https://openrct2.org/',
        src: openrct2Logo,
    },
    {
        primary: 'BabylonJS',
        secondary: 'WebGL Rendering Framework',
        href: 'https://www.babylonjs.com/',
        src: babylonLogo,
    },
]

export const mediaLinks: ElementDetails[] = [
    {
        primary: 'Github',
        secondary: 'More of My Code',
        href: 'https://github.com/elInfidel',
        src: githubLogo,
    },
    {
        primary: 'LinkedIn',
        secondary: 'Get in Touch',
        href: 'https://www.linkedin.com/in/liam-parker-40063648/',
        src: linkedInLogo,
    },
]
