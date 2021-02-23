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
        src: "img/spiff-logo.png",
    },
    {
        primary: "Learn District",
        secondary: "Childrens Education",
        href: "http://learndistrict.com/",
        src: "img/ld-logo.png",
    },
];

export const projects: ElementDetails[] = [
    {
        primary: "Lazurite",
        secondary: "OpenGL Rendering Framework",
        href: "https://github.com/elInfidel/lazurite",
        src: "img/lazurite-logo.png",
    },
    {
        primary: "Pyrite",
        secondary: "Gameboy Emulator",
        href: "https://github.com/elInfidel/pyrite-gbc",
        src: "img/pyrite-logo.png",
    },
];

export const contributions: ElementDetails[] = [
    {
        primary: "OpenRCT2",
        secondary: "Open Source Reimplementation",
        href: "https://openrct2.org/",
        src: "img/openrct2-logo.png",
    },
    {
        primary: "BabylonJS",
        secondary: "WebGL Rendering Framework",
        href: "https://www.babylonjs.com/",
        src: "img/babylon-logo.png",
    },
];

export const mediaLinks: ElementDetails[] = [
    {
        primary: "Github",
        secondary: "More of My Code",
        href: "https://github.com/elInfidel",
        src: "img/github-logo.png",
    },
    {
        primary: "LinkedIn",
        secondary: "Get in Touch",
        href: "https://www.linkedin.com/in/liam-parker-40063648/",
        src: "img/linked-in-logo.png",
    },
];
