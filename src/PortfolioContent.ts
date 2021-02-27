import spiffLogo from "./img/spiff-logo.png";
import ldLogo from "./img/ld-logo.png";
import lazuriteLogo from "./img/lazurite-logo.png";
import pyriteLogo from "./img/pyrite-logo.png";
import openrct2Logo from "./img/openrct2-logo.png";
import babylonLogo from "./img/babylon-logo.png";
import githubLogo from "./img/github-logo.png";
import linkedInLogo from "./img/linked-in-logo.png";

export interface ElementDetails {
    primary: string;
    secondary?: string;
    href: string;
    src: string;
}

export const employers: ElementDetails[] = [
    {
        primary: "Spiff Pty Ltd",
        secondary: "Product Personalization Platform",
        href: "https://spiff.com.au/",
        src: spiffLogo,
    },
    {
        primary: "Learn District",
        secondary: "Childrens Education",
        href: "http://learndistrict.com/",
        src: ldLogo,
    },
];

export const projects: ElementDetails[] = [
    {
        primary: "Lazurite",
        secondary: "OpenGL Rendering Framework",
        href: "https://github.com/elInfidel/lazurite",
        src: lazuriteLogo,
    },
    {
        primary: "Pyrite",
        secondary: "Gameboy Emulator",
        href: "https://github.com/elInfidel/pyrite-gbc",
        src: pyriteLogo,
    },
];

export const contributions: ElementDetails[] = [
    {
        primary: "OpenRCT2",
        secondary: "Open Source Reimplementation",
        href: "https://openrct2.org/",
        src: openrct2Logo,
    },
    {
        primary: "BabylonJS",
        secondary: "WebGL Rendering Framework",
        href: "https://www.babylonjs.com/",
        src: babylonLogo,
    },
];

export const mediaLinks: ElementDetails[] = [
    {
        primary: "Github",
        secondary: "More of My Code",
        href: "https://github.com/elInfidel",
        src: githubLogo,
    },
    {
        primary: "LinkedIn",
        secondary: "Get in Touch",
        href: "https://www.linkedin.com/in/liam-parker-40063648/",
        src: linkedInLogo,
    },
];
